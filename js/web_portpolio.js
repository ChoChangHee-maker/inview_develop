const pfFrame = document.querySelector(".portpolio_box");

const homepageList = [
/*
{
url: "https://sehwafoods0718.cafe24.com/",
img: "sehwa0802",
name: "세화푸드",
descript: "우리동네 달떡볶이",
},
*/
{
url: "https://hyunsit0220.cafe24.com/",
img: "hyunsit",
name: "현대시트",
descript: "현대시트",
},
{
url: "https://happycotton0131.cafe24.com/",
img: "happycotton",
name: "행복솜틀집",
descript: "행복솜틀집",
},
{
url: "https://unigoodlife0215.cafe24.com/",
img: "unigood",
name: "유니굿라이프",
descript: "유니굿라이프",
},
{
url: "http://thekingstudy0109.cafe24.com/",
img: "theking",
name: "티엔지",
descript: "더킹스터디카페",
},
{
url: "https://teaseong0104.cafe24.com/",
img: "teasong",
name: "태성조경",
descript: "태성조경",
},
{
url: "https://xn--h50b90bus927b9ufcpmo6d12d.com/",
img: "dongdae",
name: "동대스틸",
descript: "동대스틸",
},
{
url: "https://xn--zf4b06g5ay42f.com/",
img: "echo",
name: "에코산업",
descript: "에코산업",
},
{
url: "https://blnutrition.co.kr/",
img: "blnutrition",
name: "BL뉴트리션",
descript: "BL뉴트리션",
},
{
url: "https://meta-office.biz/",
img: "meta_office",
name: "한샘비츠",
descript: "한샘비츠",
},
{
url: "https://xn--2i0bk9g3qejvfc61b.com/",
img: "biggraphic",
name: "대박그래픽",
descript: "대박그래픽",
},
{
url: "https://kgas24.com",
img: "kgas24",
name: "도시가스공사",
descript: "도시가스공사",
},
{
url: "https://paracafe1111.cafe24.com/",
img: "paracafe",
name: "패러카페",
descript: "패러카페",
},
{
url: "https://www.jinjimeal.co.kr/",
img: "open11-6",
name: "진지덮밥",
descript: "진지덮밥",
},
{
url: "https://xn--oy2b2l8h935bb2i.com/",
img: "open11-5",
name: "유리카모메",
descript: "유리카모메",
},
{
url: "https://xn--ok1by1zd1ab8xg5ha.com/",
img: "open11-4",
name: "팔팔식당",
descript: "팔팔식당",
},
{
url: "https://andbom.co.kr/",
img: "open11-3",
name: "그리고, 봄 심리상담센터",
descript: "그리고, 봄 심리상담센터",
},
{
url: "https://kgas24.com",
img: "open11-2",
name: "도시가스공사",
descript: "도시가스공사",
},
{
url: "http://hs-pumps.co.kr/",
img: "open11-1",
name: "에이치에스펌프",
descript: "에이치에스펌프",
},
{
url: "https://lohashousing1007.cafe24.com",
img: "lohas",
name: "로하스하우징",
descript: "로하스하우징",
},
{
url: "https://studioon0830.cafe24.com/bizdemo128585/index.php",
img: "studioon1",
name: "Studioon",
descript: "Studioon",
},
{
url: "https://cosman0928.cafe24.com/",
img: "cosman",
name: "코스만경사로",
descript: "코스만경사로",
},
    {
url: "http://sukomichi.co.kr",
img: "sukomichi",
name: "수코미치",
descript: "맛과 분위기가 좋은 우리동네 이자카야",
},
{
url: "http://글로리데이.com",
img: "gloryday1",
name: "글로리데이",
descript: "글로리데이",
},
{
url: "https://xn--s39a64bwa012lqqf0pis2e994a.com/",
img: "hangil",
name: "한길민간조사기업",
descript: "한길민간조사기업",
},
{
url: "http://제주도대리.com",
img: "jejucar",
name: "제주굿모닝",
descript: "제주굿모닝",
},

{
url: "http://security1.co.kr/",
img: "onesecure",
name: "원 정보통신",
descript: "원 정보통신",
},
{
url: "https://daolanddaol.com",
img: "daol",
name: "다올상사",
descript: "다올상사",
},
{
url: "https://getnuri.kr/",
img: "getnuri",
name: "갯누리",
descript: "갯누리",
},
{
url: "https://skjob06.com/",
img: "sunggang",
name: "성강개발",
descript: "성강개발",
},
{
url: "http://www.choksan.co.kr/",
img: "sohak",
name: "소학레저",
descript: "소학레저",
},
{
url: "http://chaeum0719.cafe24.com/",
img: "chaum",
name: "채움닷컴",
descript: "채움닷컴",
},
{
url: "http://www.dal-tokk.co.kr/ ",
img: "dal",
name: "세화푸드",
descript: "세화푸드",
},
{
url: "https://soniafurni0712.cafe24.com",
img: "soniafurni0712",
name: "소니아퍼니처",
descript: "소니아퍼니처",
},
{
url: "https://ganeshi0707.cafe24.com",
img: "ganeshi0707",
name: "도도한주얼리",
descript: "도도한주얼리",
},
{
url: "https://dongyang0622.cafe24.com",
img: "dongyang0622",
name: "동양철학관",
descript: "동양 철학원",
},
{
url: "https://taebackchulhak.com/#anchor1",
img: "taebak",
name: "태백철학관",
descript: "태백 철학원",
},
{
url: "https://atz0616.cafe24.com",
img: "atz0616",
name: "ATZ",
descript: "ATZ",
},
{
url: "http://srider0906.cafe24.com",
img: "srider",
name: "에스라이더",
descript: "프리미엄 승마 운동",
},
{
url: "https://woomatdo.co.kr//",
img: "chamchi",
name: "참치현",
descript: "우리동네 맛집 도시락",
},

    {
url: "https://trueflavor0408.cafe24.com/",
img: "chamfarm",
name: "참이맛농장",
descript: "서귀포에서 재배되는 농장",
},
        {
url: "https://steamshot.co.kr",
img: "steamshot",
name: "스팀샷",
descript: "고온/고압 스팀세차",
},
    {
url: "https://xn--2j1br9j1dl64g.com/",
img: "dareum",
name: "다름클린",
descript: "실내, 가전 청소솔루션",
},
    {
url: "https://seolhwasanps.com/",
img: "seolhwasan",
name: "설화산펜션",
descript: "펜션 소개 및 예약 홈페이지",
},
    {
url: "https://youngjinsports.com/",
img: "youngjin",
name: "영진스포츠",
descript: "러닝머신 쇼핑몰",
},
    
{
url: "https://homeforest.co.kr/",
img: "homeforest",
name: "홈포레스트",
descript: "인테리어 소품, 페인트 판매 쇼핑몰",
},
    {
url: "https://jungsuje.com/",
img: "jungsuje",
name: "정수제 고로케",
descript: "수제 고로케",
},
    {
url: "https://바로설비.com/",
img: "baro",
name: "바로설비",
descript: "설치, 수선, 방수, 고압세척 등 인테리어 전문",
},
    {
url: "https://베리트.com/",
img: "berit",
name: "황금맷돌",
descript: "기계설비 성능점검, 설비법, 유지보수",
},
{
url: "http://grandapple818.cafe24.com",
img: "grandapple",
name: "그랜드애플",
descript: "그랜드애플",
},
{
url: "https://urbangarden0628.cafe24.com",
img: "urbangarden0628",
name: "어반가든",
descript: "어반가든",
},

{
url: "http://거성주방.com/",
img: "geosung",
name: "거성주방",
descript: "주방기구 식당이전 전문",
},
{
url: "https://haesong0425.cafe24.com/",
img: "haesong",
name: "해송",
descript: "살아있는 해물백화점",
},
{
url: "http://www.kooky.co.kr/",
img: "kooky",
name: "쿠키혼레이저",
descript: "레이저 시스템",
},

{
url: "http://hyonanum.com/",
img: "hyonanum",
name: "효나눔방문요양센터",
descript: "방문요양센터",
},
{
url: "https://billiardskhan.com/",
img: "billiardskhan",
name: "당구칸",
descript: "당구용품 쇼핑몰",
},
{
url: "http://우성적재함.com/",
img: "woosung",
name: "우성적재함",
descript: "용접 및 제품 제작/설치 전문 업체",
},
{
url: "https://unigoodlife0215.cafe24.com/",
img: "unigoodlife",
name: "유니굿라이프",
descript: "프린팅 마스크 제작",
},
{
url: "https://sl0078.co.kr/",
img: "slimg",
name: "에스엘",
descript: "일회용기 쇼핑몰",
},
{
url: "https://stmcell-telomere.com/",
img: "aplgo",
name: "에이피엘고 코리아",
descript: "DNA Drops 캔디 영양제",
},
{
url: "https://gunpo0207.cafe24.com/",
img: "gunpo",
name: "SB건설중기",
descript: "중기대여 및 토목공사 전문기업",
},

{
url: "https://bikita.net/",
img: "bikita",
name: "지클론테크",
descript: "고급 커피원두 쇼핑몰",
},

{
url: "http://noeulps.com/",
img: "noeulps",
name: "노을펜션",
descript: "펜션 소개 홈페이지",
},
{
url: "https://fenableboutique.com/",
img: "fenable",
name: "페나블",
descript: "여성신발 쇼핑몰",
},


{
url: "https://seolguk.kr/",
img: "seolguk",
name: "설국유통",
descript: "얼음, 컵얼음, 음료, 얼린생수 납품 전문업체",
},


{
url: "https://idealwellness.co.kr/",
img: "ideal",
name: "아이디얼웰니스",
descript: "척추교정센터",
},
{
url: "https://jinsungfrp.com/",
img: "jinsung",
name: "진성에프알피",
descript: "FRP/SMC 물탱크 제조, 보수, 방수공사 전문",
},



{
url: "https://withfarm.net",
img: "withfarm",
name: "위드팜",
descript: "야생화, 아카시아, 피나무 등 청정 스틱꿀",
},
{
url: "https://방방곡곡.com",
img: "bangkoc",
name: "방방곡곡 엔틱 골동품",
descript: "유럽 엔틱가구, 엔틱소품 전문",
},
{
url: "https://kalsae.co.kr/",
img: "kalsae",
name: "칼새빌리어드",
descript: "당구용품 쇼핑몰",
},

{
url: "https://tgreengolf.co.kr",
img: "mpsolution",
name: "엠피솔루션",
descript: "고급 디지털 퍼터",
},
{
url: "http://waldorfmall.cafe24.com",
img: "mercurius",
name: "머큐리어스 코리아",
descript: "나무 놀잇감, 에포크 공책, 발도르프 악기",
},
{
url: "https://jeilps.co.kr",
img: "jeilpns",
name: "제일피앤에스",
descript: "주차시스템 솔루션",
},
{
url: "https://artem.co.kr",
img: "artem",
name: "아르템",
descript: "붓 판매 쇼핑몰",
},
{
url: "https://e-packing.co.kr",
img: "epacking",
name: "E-팩킹",
descript: "포장자재 판매홈페이지",
},
{
url: "https://yedamjeju.com",
img: "yedam",
name: "예담 부동산",
descript: "부동산 홈페이지",
},
{
url: "http://daewonjeju.com/",
img: "omegi",
name: "대원 오메기떡",
descript: "제주 전통 오메기떡",
},

{
url: "http://okgashelium.co.kr/",
img: "lsy",
name: "LSY 산업가스",
descript: "가스 전문",
}
];

function setList() {
  for (let i = 0; i < homepageList.length; i++) {
    pfFrame.innerHTML +=
      "<li data-aos='fade-up' data-aos-duration='350'><a href=" +
      homepageList[i].url +
      ' target="_blank"><img src="./img/web_portpolio/' +
      homepageList[i].img +
      '.png" alt="'+ homepageList[i].name + ' 섬네일" /></a>' +
      '<a href="'+ homepageList[i].url +'" target="_blank" class="portpolio_info"><h4>' +
      homepageList[i].name +
      "</h4><span>" +
      homepageList[i].descript +
      "</span></li>"; +
      "</a>"
  }
}
setList();

$(function(){
  $(".portpolio_box li").slice(0, 12).show(); // 초기갯수
  $(".portpolio_more").click(function(e){ // 클릭시 more
      e.preventDefault();
      $(".portpolio_box li:hidden").slice(0, 12).show(); // 클릭시 more 갯수 지저정
      if($(".portpolio_box li:hidden").length == 0){ // 컨텐츠 남아있는지 확인
        $(".portpolio_more").fadeOut(450);
      }      
      AOS.init({
        easing: 'ease-out',
        duration: 700
      });
  });
});