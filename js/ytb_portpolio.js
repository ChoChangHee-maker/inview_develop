const pfFrame = document.querySelector(".ytb_portpolio_box");

const videoList = [
  {
    url: "https://www.youtube.com/watch?v=uqcF8lK7hRE",
    img: "ytb_portpolio_83",
    name: "컬러힐",
    descript: "운동 요가 용품",
  },
  {
    url: "https://www.youtube.com/watch?v=JESGyA4HNf8 ",
    img: "ytb_portpolio_82",
    name: "다미축산",
    descript: "돼지갈비전문 다미축산",
  },
  {
    url: "https://www.youtube.com/watch?v=avVNiZVAyZU ",
    img: "ytb_portpolio_81",
    name: "바라모",
    descript: "탈모원인물질(DHT)생성억제 탈모특허 바라모",
  },
  {
    url: "https://www.youtube.com/watch?v=l3w1JLjYjUY ",
    img: "ytb_portpolio_80",
    name: "소디프몰",
    descript: "소문난 식자재몰 소디프몰",
  },
  {
    url: "https://www.youtube.com/watch?v=TX4LGIuV23Q ",
    img: "ytb_portpolio_79",
    name: "(주)코덴",
    descript: "허리보호의자 (주)코덴",
  },
  {
    url: "https://www.youtube.com/watch?v=4MgvPZ3wOhk ",
    img: "ytb_portpolio_78",
    name: "남해 캐슬529",
    descript: "키즈풀빌라 남해 캐슬529",
  },

  {
    url: "https://www.youtube.com/watch?v=MP31qaxgz5M ",
    img: "ytb_portpolio_77",
    name: "엘자임",
    descript: "발효전문기업 엘자임",
  },
  {
    url: "https://www.youtube.com/watch?v=Qa5Glskf76s ",
    img: "ytb_portpolio_76",
    name: "보성녹차김치",
    descript: "전라도김치 전문 보성녹차김치",
  },
  {
    url: "https://www.youtube.com/watch?v=66Q9rG9QGu8 ",
    img: "ytb_portpolio_75",
    name: "신불산공원묘원",
    descript: "천혜의 명당 신불산공원묘원",
  },
  {
    url: "https://www.youtube.com/watch?v=Z3YnlCcol10 ",
    img: "ytb_portpolio_74",
    name: "아지트글램핑",
    descript: "아지트글램핑, 럭셔리글램핑",
  },
  {
    url: "https://www.youtube.com/watch?v=L0D83eR8P8I",
    img: "ytb_portpolio_73",
    name: "욜로와",
    descript: "나를위한 힐링선물 욜로와!",
  },
  {
    url: "https://www.youtube.com/watch?v=vRsObS1MO2E  ",
    img: "ytb_portpolio_72",
    name: "꿈드림혁신교육",
    descript: "진로 직업체험 및 융합창의교육",
  },
  {
    url: "https://www.youtube.com/watch?v=KVxaw_Bq54g  ",
    img: "ytb_portpolio_71",
    name: "하늘농군들",
    descript: "무농약 백향과 판매",
  },
  {
    url: "https://www.youtube.com/watch?v=vj70ON7MtT0 ",
    img: "ytb_portpolio_70",
    name: "에그트리농장",
    descript: "신선한 달걀, 에그트리농장",
  },
  {
    url: "https://www.youtube.com/watch?v=5LD4QtIqWiw",
    img: "ytb_portpolio_69",
    name: "에이스크랩",
    descript: "인천송도맛집 에이스크랩",
  },
  {
    url: "https://www.youtube.com/watch?v=1pihithRVh8 ",
    img: "ytb_portpolio_68",
    name: "카모메키친 코코로박스",
    descript: "테이블웨어 브랜드",
  },
  {
    url: "https://www.youtube.com/watch?v=LLt8yQxFuKM ",
    img: "ytb_portpolio_67",
    name: "청공한옥스테이",
    descript: "경주 한옥 청공한옥스테이",
  },
  {
    url: "https://youtu.be/P2KziaSIDXI",
    img: "ytb_portpolio_66",
    name: "월드원동시통역시스템",
    descript: "통역장비 렌탈 전문",
  },
  {
    url: "https://youtu.be/QeingOy-Zgs",
    img: "ytb_portpolio_65",
    name: "디브이디로",
    descript: "손상된 비디오테이프 변환",
  },
  {
    url: "https://youtu.be/C034sy2NHCs",
    img: "ytb_portpolio_64",
    name: "트리플케이 베이스볼",
    descript: "야구선수 트레이닝",
  },
  {
    url: "https://www.youtube.com/watch?v=XXCb1Ha-m5I",
    img: "ytb_portpolio_63",
    name: "하렌풀빌라",
    descript: "가평 대형 프라이빗 풀빌라",
  },
  {
    url: "https://www.youtube.com/watch?v=JPHgM8QSpno",
    img: "ytb_portpolio_62",
    name: "세이브투어",
    descript: "제주도 골프전문여행사",
  },
  {
    url: "https://www.youtube.com/watch?v=_zUCMNux3C8",
    img: "ytb_portpolio_61",
    name: "제이케이호텔 앤 리조트",
    descript: "자연속에서의 휴식, 틈별한 쉼을 이야기하는곳",
  },
  {
    url: "https://www.youtube.com/watch?v=-ffogRG_L7U",
    img: "ytb_portpolio_60",
    name: "자작나무길펜션",
    descript: "향긋한 공간으로 초대하는 펜션",
  },
  {
    url: "https://www.youtube.com/watch?v=QB4GvzLQRxg",
    img: "ytb_portpolio_59",
    name: "제주기와",
    descript: "한옥과 자연이 함께있는 카페",
  },
  {
    url: "https://www.youtube.com/watch?v=1zqjBmPQjk0",
    img: "ytb_portpolio_58",
    name: "㈜케이엘공조",
    descript: "주거, 상업 시스템에어컨 설계 시공 및 납품",
  },
  {
    url: "https://www.youtube.com/watch?v=EGSpJj9xco8",
    img: "ytb_portpolio_57",
    name: "바보형제쭈꾸미",
    descript: "창녕 쭈꾸미&오리탕",
  },
  {
    url: "https://www.youtube.com/watch?v=o240g_HC3q8",
    img: "ytb_portpolio_56",
    name: "새집인테리어",
    descript: "내가 원하는 인테리어 디자인",
  },
  {
    url: "https://www.youtube.com/watch?v=fWmCiDccfmo",
    img: "ytb_portpolio_55",
    name: "니즈포맨",
    descript: "부드러운 남자 데일리 전문 쇼핑몰",
  },
  {
    url: "https://www.youtube.com/watch?v=agZtekfLJQ4",
    img: "ytb_portpolio_54",
    name: "아띠레테이블",
    descript: "20년전통, 2대째 내려오는 나무제품 수제작 기업",
  },
  {
    url: "https://www.youtube.com/watch?v=9MSf1Fj_GT8",
    img: "ytb_portpolio_53",
    name: "탑비디오",
    descript: "오래된 비디오테이프를  생생하게 디지털 변환해 드립니다",
  },
  {
    url: "https://www.youtube.com/watch?v=kXtkDW6UGZ4",
    img: "ytb_portpolio_52",
    name: "에이엘",
    descript: "단 하나의 브랜드 Another Level 에이엘 (AL)",
  },
  {
    url: "https://www.youtube.com/watch?v=36xIBIKv5ks",
    img: "ytb_portpolio_51",
    name: "블루헬스",
    descript: "어골칼슘의 왕 '칼시오' (모비코사)",
  },
  {
    url: "https://www.youtube.com/watch?v=1ZcjP1CpfJ8",
    img: "ytb_portpolio_50",
    name: "카페 플롯",
    descript: "예술과 함께하는 공간, 카페 플롯",
  },
  {
    url: "https://www.youtube.com/watch?v=XGqKpD5yEuU",
    img: "ytb_portpolio_49",
    name: "365출장용접",
    descript: "전국 출장용접, 알곤용접, 용접 365출장용접",
  },
  {
    url: "https://www.youtube.com/watch?v=IP_1UoUwC6U",
    img: "ytb_portpolio_48",
    name: "(주)일피트",
    descript: "하비루트 (hobbyroute) - 세상의 모든 취미, 한곳에 모으다",
  },
  {
    url: "https://www.youtube.com/watch?v=wWMvtsXJaIo",
    img: "ytb_portpolio_47",
    name: "주식회사 씨네트웍스",
    descript: "국내 최초 수비드 전문 유통 기업",
  },
  {
    url: "https://www.youtube.com/watch?v=7PaY6sL5WT8",
    img: "ytb_portpolio_46",
    name: "올댓프린팅",
    descript: "링링굿즈 - 네임택, 키링, 그립톡",
  },
  {
    url: "https://www.youtube.com/watch?v=Xjuc3m080Fw",
    img: "ytb_portpolio_45",
    name: "(주)캐디몬",
    descript: "청년백수 시대 탈피의 정답, 골프 캐디 무료교육 아카데미",
  },
  {
    url: "https://www.youtube.com/watch?v=Eu5cjTr4NTI",
    img: "ytb_portpolio_44",
    name: "에바다번역",
    descript: "20년 전통 1위 번역업체 에바다번역",
  },
  {
    url: "https://www.youtube.com/watch?v=YfQjmR4DF8g",
    img: "ytb_portpolio_43",
    name: "더꽃 본점",
    descript: "더꽃 본점! 거제현지인맛집! 거제도맛집 인정!",
  },
  {
    url: "https://www.youtube.com/watch?v=dDlN97RaEmI",
    img: "ytb_portpolio_42",
    name: "백가네 제주한상",
    descript: "제주 음식을 한상에! 백가네 제주한상!",
  },
  {
    url: "https://www.youtube.com/watch?v=tBXLkR9P9fk",
    img: "ytb_portpolio_41",
    name: "미온수",
    descript: "뜨겁지도 차갑지도 않은, 미온수만의 유니크 감성",
  },
  {
    url: "https://www.youtube.com/watch?v=OGIiQ3t6iKA",
    img: "ytb_portpolio_40",
    name: "에듀플러스(주)",
    descript: "원격평생교육원 국민내일배움카드 직장인 국비지원 온라인 교육과정",
  },
  {
    url: "https://www.youtube.com/watch?v=0HHOw8mvyQ0",
    img: "ytb_portpolio_39",
    name: "서래헌",
    descript: "지리산맛집, 서래헌",
  },
  {
    url: "https://www.youtube.com/watch?v=4AIOM-6wGWk",
    img: "ytb_portpolio_38",
    name: "어부가",
    descript: "좋은 먹거리를 위한 어부가!",
  },
  {
    url: "https://www.youtube.com/watch?v=SIYYk-MWoq4",
    img: "ytb_portpolio_37",
    name: "에이치투",
    descript: "인력관리대행은 에이치투에서",
  },
  {
    url: "https://www.youtube.com/watch?v=9Nlz6xoaapE",
    img: "ytb_portpolio_36",
    name: "제일피앤에스",
    descript: "우리가 앞장 설 때 대한민국도 앞장서 나갑니다.",
  },
  {
    url: "https://www.youtube.com/watch?v=yzixOuAyCZk",
    img: "ytb_portpolio_35",
    name: "올인산업 주식회사",
    descript: "녹색기술 인증, 국내 유일 철거공법",
  },
  {
    url: "https://www.youtube.com/watch?v=QPxWQP4KPNU",
    img: "ytb_portpolio_34",
    name: "3D프린팅 서누기",
    descript: "네임택 판매 및 3D프린터 출력대행",
  },
  {
    url: "https://www.youtube.com/watch?v=kx5PDEYcmdM",
    img: "ytb_portpolio_33",
    name: "라피노",
    descript: "자연을 담은 원목가구",
  },
  {
    url: "https://www.youtube.com/watch?v=LYkdMiqKKBY",
    img: "ytb_portpolio_32",
    name: "정직한 농장",
    descript: "정직한농장의 컬러방울토마토",
  },
  {
    url: "https://www.youtube.com/watch?v=V06_6DQFQnQ",
    img: "ytb_portpolio_31",
    name: "라비쉬앳홈",
    descript: "친환경 소재로 만든 감성침구",
  },
  {
    url: "https://www.youtube.com/watch?v=h8UN5v2nSvU",
    img: "ytb_portpolio_30",
    name: "(주)원어스플래닛",
    descript: "편안하고 디자인이 예쁜 언더웨어",
  },
  {
    url: "https://www.youtube.com/watch?v=2ZNPn40lU1Y",
    img: "ytb_portpolio_29",
    name: "한스",
    descript: "느낌가득한 한스코디 방수 테이블보 셋팅",
  },
  {
    url: "https://www.youtube.com/watch?v=9QKRkf1C_qc",
    img: "ytb_portpolio_28",
    name: "시온몰",
    descript: "박달홍게, 박달대게, 홍게대게 산지직송",
  },
  {
    url: "https://www.youtube.com/watch?v=eY9KuqIcme4",
    img: "ytb_portpolio_27",
    name: "랜드마크원",
    descript: "대부도 독채 풀빌라 펜션",
  },
  {
    url: "https://www.youtube.com/watch?v=pdTPM-QPdbo",
    img: "ytb_portpolio_26",
    name: "불노하마중고차",
    descript: "영업용번호판 직거래 전문",
  },
  {
    url: "https://www.youtube.com/watch?v=wftkKbk2sMg",
    img: "ytb_portpolio_25",
    name: "끼니",
    descript: "밀키트, 간편식품 구매",
  },
  {
    url: "https://www.youtube.com/watch?v=ifL_iDL73QU",
    img: "ytb_portpolio_24",
    name: "토들러",
    descript: "우리아이 안전한 가드높은 아기범퍼침대",
  },
  {
    url: "https://www.youtube.com/watch?v=Wz9yjhLqFxQ",
    img: "ytb_portpolio_23",
    name: "더에이치케이스",
    descript: "다양한 폰케이스와 핸드폰 용품의 만남",
  },
  {
    url: "https://www.youtube.com/watch?v=KIb-wq6uZ1c",
    img: "ytb_portpolio_22",
    name: "CP오토모티브",
    descript: "투명한 중고차 거래문화 정착",
  },
  {
    url: "https://www.youtube.com/watch?v=INdBqguKXx0",
    img: "ytb_portpolio_21",
    name: "푸디베어",
    descript: "간편식 전문",
  },
  {
    url: "https://www.youtube.com/watch?v=-YCPtdTDa1o",
    img: "ytb_portpolio_20",
    name: "바스몽",
    descript: "펫코스메틱 전문 브랜드",
  },
  {
    url: "https://www.youtube.com/watch?v=vG6wuEHpH-Y",
    img: "ytb_portpolio_19",
    name: "수코미치",
    descript: "일본 가정식 전문",
  },
  {
    url: "https://www.youtube.com/watch?v=6lQQwu0s9D8",
    img: "ytb_portpolio_18",
    name: "팜시스",
    descript: "리듬악기 전문",
  },
  {
    url: "https://www.youtube.com/watch?v=-l_v0P_vcdw",
    img: "ytb_portpolio_17",
    name: "니골리앙",
    descript: "턱시도 & 맞춤정장",
  },
  {
    url: "https://www.youtube.com/watch?v=B6wORBqsBDw",
    img: "ytb_portpolio_16",
    name: "(주)베스코",
    descript: "자판기형식으로 하는 무인기계 프랜차이즈",
  },
  {
    url: "https://www.youtube.com/watch?v=PNDaIzVbyGQ",
    img: "ytb_portpolio_15",
    name: "슬랭해즈",
    descript: "헤드셋, 캐리어 등 암웨이 쇼핑몰",
  },
  {
    url: "https://www.youtube.com/watch?v=Vfl2TU9cbv0",
    img: "ytb_portpolio_14",
    name: "69슬램",
    descript: "비치웨어, 래쉬가드, 수영복 쇼핑몰",
  },
  {
    url: "https://www.youtube.com/watch?v=cGj-MRnBlDo",
    img: "ytb_portpolio_13",
    name: "만수르렌탈",
    descript: "모든 가전제품 렌탈서비스 전문",
  },
  {
    url: "https://www.youtube.com/watch?v=mmuRWie5dbs",
    img: "ytb_portpolio_12",
    name: "브리체",
    descript: "여성향수 쇼핑몰",
  },
  {
    url: "https://www.youtube.com/watch?v=EWXRxECuOJM",
    img: "ytb_portpolio_11",
    name: "마켓1231",
    descript: "아기들을 위한 파티용품 전문 쇼핑몰",
  },
  {
    url: "https://www.youtube.com/watch?v=wBqQk6ntjVI",
    img: "ytb_portpolio_10",
    name: "비에스한스",
    descript: "여성가방 쇼핑몰",
  },
  {
    url: "https://www.youtube.com/watch?v=_jLvZYwQYLo",
    img: "ytb_portpolio_09",
    name: "부산전자몰",
    descript: "오디오 및 스피커 등 모든 음향기기 판매",
  },
  {
    url: "https://www.youtube.com/watch?v=1McJeXJL7ek",
    img: "ytb_portpolio_08",
    name: "자라나다(모하루)",
    descript: "탈모샴푸 쇼핑몰",
  },
  {
    url: "https://www.youtube.com/watch?v=kK8CAALFYOc",
    img: "ytb_portpolio_07",
    name: "디자인엔트",
    descript: "인테리어 필름 시공전문",
  },
  {
    url: "https://www.youtube.com/watch?v=T1dzCYNwD2o",
    img: "ytb_portpolio_06",
    name: "견인구역",
    descript: "강아지 영양제, 수제간식 등 애견용품 쇼핑몰",
  },
  {
    url: "https://www.youtube.com/watch?v=P5tJi13uWAE",
    img: "ytb_portpolio_05",
    name: "바이더스",
    descript: "마사지기 판매 전문",
  },
  {
    url: "https://www.youtube.com/watch?v=rGjY-VzDDpE",
    img: "ytb_portpolio_04",
    name: "굿타임서비스",
    descript: "곰팡이, 바퀴벌레, 해충 등 방역전문",
  },
  {
    url: "https://www.youtube.com/watch?v=agA7SJWrZ-4",
    img: "ytb_portpolio_03",
    name: "이츠캔버스",
    descript: "각종 그림액자, 캔버스액자, 알류미늄액자",
  },
  {
    url: "https://www.youtube.com/watch?v=Y7kL1AUWRW8",
    img: "ytb_portpolio_02",
    name: "이든트리",
    descript: "천연디퓨져, 소이캔들, 탈취제 등 판매 쇼핑몰",
  },
  {
    url: "https://www.youtube.com/watch?v=aC03Dc_--BM",
    img: "ytb_portpolio_01",
    name: "이텔레맨",
    descript: "퍼즐, 대형퍼즐까지도 주문제작 판매",
  },
];
function setList() {
  for (let i = 0; i < videoList.length; i++) {
    pfFrame.innerHTML +=
      "<li data-aos='fade-up' data-aos-duration='350'><a href=" +
      videoList[i].url +
      ' target="_blank"><img src="/img/ytb_portpolio/' +
      videoList[i].img +
      '.png" alt="'+ videoList[i].name + ' 섬네일" /></a>' +
      '<a href="'+ videoList[i].url +'" target="_blank" class="portpolio_info"><h4>' +
      videoList[i].name +
      "</h4><span>" +
      videoList[i].descript +
      "</span></li>"; +
      "</a>"
  }
}
setList();

$(function(){
  $(".ytb_portpolio_box li").slice(0, 12).show(); // 초기갯수
  $(".ytb_portpolio_more").click(function(e){ // 클릭시 more
      e.preventDefault();
      $(".ytb_portpolio_box li:hidden").slice(0, 12).show(); // 클릭시 more 갯수 지저정
      if($(".ytb_portpolio_box li:hidden").length == 0){ // 컨텐츠 남아있는지 확인
        $(".ytb_portpolio_more").fadeOut(450);
      }      
      AOS.init({
        easing: 'ease-out',
        duration: 700
      });
  });
});