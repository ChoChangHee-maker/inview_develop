import * as PIXI from "https://cdn.skypack.dev/pixi.js@5.x";
import { KawaseBlurFilter } from "https://cdn.skypack.dev/@pixi/filter-kawase-blur@3.2.0";
import SimplexNoise from "https://cdn.skypack.dev/simplex-noise@3.0.0";
import hsl from "https://cdn.skypack.dev/hsl-to-hex";
import debounce from "https://cdn.skypack.dev/debounce";

// return a random number within a range
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// map a number from 1 range to another
function map(n, start1, end1, start2, end2) {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

// Create a new simplex noise instance
const simplex = new SimplexNoise();
// ColorPalette class
class ColorPalette {
  constructor() {
    this.setColors();
    this.setCustomProperties();
  }
  setColors() {
    // set fixed values for hue and complimentary hues
    this.complimentaryHue1 = 111, 52, 97;
    this.complimentaryHue2 = 111, 52, 97;
    this.complimentaryHue3 = 110, 79, 46;
    
    // define a fixed saturation and lightness
    this.saturation = 100;
    this.lightness = 65;
  
    // define a base color
    this.baseColor = hsl(this.complimentaryHue1, this.saturation, this.lightness);
    // define a complimentary color, 30 degress away from the base
    this.complimentaryColor2 = hsl(
      this.complimentaryHue2,
      this.saturation,
      this.lightness
    );
    // define a second complimentary color, 60 degrees away from the base
    this.complimentaryColor3 = hsl(
      this.complimentaryHue3,
      this.saturation,
      this.lightness
    );
  
    // store the color choices in an array so that a random one can be picked later
    this.colorChoices = [
      this.baseColor,
      this.complimentaryColor2,
      this.complimentaryColor3
    ];
  }
  randomColor() {
    // pick a random color
    return this.colorChoices[~~random(0, this.colorChoices.length)].replace(
      "#",
      "0x"
    );
  }
  setCustomProperties() {
    // set CSS custom properties so that the colors defined here can be used throughout the UI
    document.documentElement.style.setProperty("--hue", this.hue);
    document.documentElement.style.setProperty(
      "--hue-complimentary1",
      this.complimentaryHue1
    );
    document.documentElement.style.setProperty(
      "--hue-complimentary2",
      this.complimentaryHue2
    );
  }
}
// Orb class
class Orb {
  // Pixi takes hex colors as hexidecimal literals (0x rather than a string with '#')
  constructor(fill = { r: 255, g: 255, b: 255 }) {
    // bounds = the area an orb is "allowed" to move within
    this.bounds = this.setBounds();
    // initialise the orb's { x, y } values to a random point within it's bounds
    this.x = random(this.bounds["x"].min, this.bounds["x"].max);
    this.y = random(this.bounds["y"].min, this.bounds["y"].max);

    // how large the orb is vs it's original radius (this will modulate over time)
    this.scale = 1;

    // what color is the orb?
    this.fill = fill;

    // the original radius of the orb, set relative to window height
    this.radius = random(window.innerHeight / 6, window.innerHeight / 3);

    // starting points in "time" for the noise/self similar random values
    this.xOff = random(0, 1000);
    this.yOff = random(0, 1000);
    // how quickly the noise/self similar random values step through time
    this.inc = 0.002;

    // PIXI.Graphics is used to draw 2d primitives (in this case a circle) to the canvas
    this.graphics = new PIXI.Graphics();
    this.graphics.alpha = 0.825;

    // 250ms after the last window resize event, recalculate orb positions.
    window.addEventListener(
      "resize",
      debounce(() => {
        this.bounds = this.setBounds();
      }, 250)
    );
  }

  setBounds() {
    // how far from the { x, y } origin can each orb move
    const maxDist =
      window.innerWidth < 1000 ? window.innerWidth / 3 : window.innerWidth / 5;
    // the { x, y } origin for each orb (the bottom right of the screen)
    const originX = window.innerWidth / 1.25;
    const originY =
      window.innerWidth < 1000
        ? window.innerHeight
        : window.innerHeight / 1.375;

    // allow each orb to move x distance away from it's x / y origin
    return {
      x: {
        min: originX - maxDist,
        max: originX + maxDist
      },
      y: {
        min: originY - maxDist,
        max: originY + maxDist
      }
    };
  }

  update() {
    // self similar "psuedo-random" or noise values at a given point in "time"
    const xNoise = simplex.noise2D(this.xOff, this.xOff);
    const yNoise = simplex.noise2D(this.yOff, this.yOff);
    const scaleNoise = simplex.noise2D(this.xOff, this.yOff);

    // map the xNoise/yNoise values (between -1 and 1) to a point within the orb's bounds
    this.x = map(xNoise, -1, 1, this.bounds["x"].min, this.bounds["x"].max);
    this.y = map(yNoise, -1, 1, this.bounds["y"].min, this.bounds["y"].max);
    // map scaleNoise (between -1 and 1) to a scale value somewhere between half of the orb's original size, and 100% of it's original size
    this.scale = map(scaleNoise, -1, 1, 0.5, 1);

    // step through "time"
    this.xOff += this.inc;
    this.yOff += this.inc;
  }

  render() {
    // update the PIXI.Graphics position and scale values
    this.graphics.x = this.x;
    this.graphics.y = this.y;
    this.graphics.scale.set(this.scale);

    // clear anything currently drawn to graphics
    this.graphics.clear();

    // tell graphics to fill any shapes drawn after this with the orb's fill color
    this.graphics.beginFill(this.fill);
    // draw a circle at { 0, 0 } with it's size set by this.radius
    this.graphics.drawCircle(0, 0, this.radius);
    // let graphics know we won't be filling in any more shapes
    this.graphics.endFill();
  }
}

// Create PixiJS app
const app = new PIXI.Application({
  // render to <canvas class="orb-canvas"></canvas>
  view: document.querySelector(".orb-canvas"),
  // auto adjust size to fit the current window
  resizeTo: window,
  // transparent background, we will be creating a gradient background later using CSS
  transparent: true
});

app.stage.filters = [new KawaseBlurFilter(30, 10, true)];

// Create colour palette
const colorPalette = new ColorPalette();

// Create orbs
const orbs = [];

for (let i = 0; i < 10; i++) {
  const orb = new Orb(colorPalette.randomColor());

  app.stage.addChild(orb.graphics);

  orbs.push(orb);
}

// Animate!
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  app.ticker.add(() => {
    orbs.forEach((orb) => {
      orb.update();
      orb.render();
    });
  });
} else {
  orbs.forEach((orb) => {
    orb.update();
    orb.render();
  });
}

// Options
const particleCount = 10000;

const particleSize = 0.9;

const defaultAnimationSpeed = 1,
  morphAnimationSpeed = 18,
  color = "#FFFFFF";

// Triggers
const triggers = document.getElementsByClassName("trigger_txt");

// Renderer
var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.id = "canvas_id";
document
  .getElementsByClassName("trigger_txt_box")[0]
  .appendChild(renderer.domElement);

// Ensure Full Screen on Resize
function fullScreen() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", fullScreen, false);

// Scene
var scene = new THREE.Scene();

// Camera and position
var camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  1,
  1000
);

camera.position.x = 180;
camera.position.y = -45;
camera.position.z = -45;

// Lighting
var light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

// Orbit Controls
var controls = new THREE.OrbitControls(camera);
// controls.update();
controls.enabled = false;
controls.enableZoom = false;
controls.enableRotate = false;

// Particle Vars
var particles = new THREE.Geometry();

var texts = [];

var pMaterial = new THREE.PointCloudMaterial({
  size: particleSize,
});

// Texts
var loader = new THREE.FontLoader();
var typeface =
  "https://dl.dropboxusercontent.com/s/bkqic142ik0zjed/swiss_black_cond.json?";

loader.load(typeface, (font) => {
  Array.from(triggers).forEach((trigger, idx) => {
    texts[idx] = {};

    texts[idx].geometry = new THREE.TextGeometry(trigger.textContent, {
      font: font,
      size: window.innerWidth * 0.02,
      height: 8,
      curveSegments: 10,
    });

    THREE.GeometryUtils.center(texts[idx].geometry);

    texts[idx].particles = new THREE.Geometry();

    texts[idx].points = THREE.GeometryUtils.randomPointsInGeometry(
      texts[idx].geometry,
      particleCount
    );

    createVertices(texts[idx].particles, texts[idx].points);

    enableTrigger(trigger, idx);
  });
});

// Particles
for (var p = 0; p < particleCount; p++) {
  var vertex = new THREE.Vector3();
  vertex.x = 0;
  vertex.y = 0;
  vertex.z = 0;

  particles.vertices.push(vertex);
}

function createVertices(emptyArray, points) {
  for (var p = 0; p < particleCount; p++) {
    var vertex = new THREE.Vector3();
    vertex.x = points[p]["x"];
    vertex.y = points[p]["y"];
    vertex.z = points[p]["z"];

    emptyArray.vertices.push(vertex);
  }
}

function enableTrigger(trigger, idx) {
  trigger.setAttribute("data-disabled", false);

  trigger.addEventListener("click", () => {
    morphTo(texts[idx].particles, trigger.dataset.color);
  });

  if (idx == 0) {
    morphTo(texts[idx].particles, trigger.dataset.color);
  }
}

var particleSystem = new THREE.PointCloud(particles, pMaterial);

particleSystem.sortParticles = true;

// Add the particles to the scene
scene.add(particleSystem);

// Animate
const normalSpeed = defaultAnimationSpeed / 100,
  fullSpeed = morphAnimationSpeed / 100;

let animationVars = {
  speed: normalSpeed,
  color: color,
  rotation: -45,
};

function animate() {
  particleSystem.rotation.y += animationVars.speed;
  particles.verticesNeedUpdate = true;

  camera.position.z = animationVars.rotation;
  camera.position.y = animationVars.rotation;
  camera.lookAt(scene.position);

  particleSystem.material.color = new THREE.Color(animationVars.color);

  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

function morphTo(newParticles, color = "#62C250") {
  TweenMax.to(animationVars, 0.1, {
    ease: Power4.easeIn,
    speed: fullSpeed,
    onComplete: slowDown,
  });

  TweenMax.to(animationVars, 2, {
    ease: Linear.easeNone,
    color: color,
  });

  // particleSystem.material.color.setHex(color);

  for (var i = 0; i < particles.vertices.length; i++) {
    TweenMax.to(particles.vertices[i], 2, {
      ease: Elastic.easeOut.config(0.1, 0.3),
      x: newParticles.vertices[i].x,
      y: newParticles.vertices[i].y,
      z: newParticles.vertices[i].z,
    });
  }

  TweenMax.to(animationVars, 2, {
    ease: Elastic.easeOut.config(0.1, 0.3),
    rotation: animationVars.rotation == 45 ? -45 : 45,
  });
}
function slowDown() {
  TweenMax.to(animationVars, 0.3, {
    ease: Power2.easeOut,
    speed: normalSpeed,
    delay: 0.2,
  });
}
