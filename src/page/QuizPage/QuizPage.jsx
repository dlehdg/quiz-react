import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SET_QUIZ } from "../../redux/slice/quizSlice";
import styled from "styled-components";

const QuizPage = () => {
  const params = useParams();

  const [quiz, setQuiz] = useState("");
  const navigate = useNavigate();

  const Arrs = [
    {
      id: "1",
      text: "대한민국 수도는?",
      author: "메밀꽃 필 무렵",
    },
    {
      id: "2",
      text: `이 상황은 미국의 전투준비태세의 약자로 이루워져있으며,자국 국방군 경계수준을 측정하기 위한 단계로 설계되었다.
      단계는 5단계 까지있으며, 국지적 침투 및 도발이 예상될 경우 민군 통합방위 작전을 준비하기 위해 발령하는 경계 및 전투태세를 무엇이라 하는가`,
      author: "데프콘 or 워치콘",
    },
    {
      id: "3",
      text: `이 위인은 국가 독립유공자이며, 사회주의자로서 활동하였다. 국가가 국권 피탈로 어려워지자 1907년 신민회의 독립군 기지 건설 운동의 일환으로 국외로 이주했으며, 만주, 연해주 등에서 독립운동을 하여 활동하였다. 대한민국 임시정부 조직에서 빠져나온 후엔
독립신문에 정면으로 맞서 <신대한>을 발간하였으며, 나라의 주권을 찾기 위해 노력하였다. 대표적인 명언인 역사를 잊은 민족에게는 미래는 없다 라는 말을 남기고 떠난 위인의 이름을 말하시오`,
      author: "신채호",
    },
    {
      id: "4",
      text: `신라 제 27대 국왕이라 연호는 인평이며, 진평왕과 마야부인 사이에서 태어난 후손이다. 이 왕이 즉위 후에 백제와의 잦은 전쟁으로 대야성이 함락되기도 하였으며, 지금까지 현존하는 것중 세계에서 오래된 천문대를 지은 여왕의 이름은? `,
      author: "선덕여왕",
    },
    {
      id: "5",
      text: `조선의 19대 왕 숙종은 상평통보를 주조하여 정치적 경제적 뜻을 펼쳤으며, 이 정책을 발표했을 때 큰 반발이 있었다.
이 정책은 15세기 조선의 건국 당시 제정된 당나라의 조세제도를 비판하고, 지역특산물이 아닌 쌀로만 세금을 걷게 하는 제도이다.
처음에는 서울권 부터해서 경기권 강원권 등으로 점점 확산해 나간 이 제도의 이름을 말하시오. `,
      author: "대동법",
    },
    {
      id: "6",
      text: `그리스 로마신화로부터 유래된 단어로, 이상화된 자신에 대한 자기애적 왜곡을 의미하며, 다른 사람들에게 심적인 피해를 주고 반사회성 성질을 갖고 있으면 자기애성 성격장애로 분류된다.
대표적인 예로 스티브 잡스가 있으며, 일반 사람들로 하여금 자기애가 강한 이 장애는 무엇인가 `,
      author: "나르시시즘or 나르시시스트",
    },
    {
      id: "7",
      text: `집단 속에 참여하는 개인의 수가 늘어날수록 성과에 대한 1인당 공헌도가 오히려 떨어지는 현상을 말한다.
독일의 심리학자 링겔만은 줄다리를 통해 집단에 속한 각 개인들의 공헌도의 변화를 측정하는 실험을 통해 힘의 크기를 100으로 보았을 때 2명 4명 8명일 경우 200 400 800으로 생각하였으나, 실질적으론 93퍼 85퍼 49퍼등 공헌도가 오히려 떨어지는 현상을 발견하였다.
이러한 현상을 무엇이라 하는가 `,
      author: "링겔만 효과",
    },
    {
      id: "8",
      text: `2010년대에 출시 이후 삼양을 대표하는 면으로 한류 열풍 및 해외 외국에서도 대 인기를 끌고있는 라면이다.
구성으로는 액상스프 후레이크가 있으며, 대표캐릭터로는 호치라는 캐릭터가 존재하는 이 라면의 이름은 무엇인가`,
      author: "불닭볶음면",
    },
    {
      id: "9",
      text: `이 사건은 19세기 중반 대영제국이 청나라와의 무역에서 우위를 점하기 위해 값싼 인도산 이것을 밀수하였고, 이 결과로 이 사건이 발생한다. 사회 최하층까지 이것으로 고통을 받아 나라의 명이 좌지우지되자 청나라 도광제는 임칙서를 광동성에 파견하여 문제를 해야하려 했으나 이것이 화근이 되어 영국군과 대립이 일어났다.
이 사건은 무엇인가  `,
      author: "아편전쟁",
    },
    {
      id: "10",
      text: `이 프로그램은 2005년부터 2016년 4월까지 방영했으며,
약 11년동안 안전수칙 및 위기상황 대처 생활 건강에 대해 알려주는 프로그램이다 월요일에 방영되었으며, 이를 토대로 만화책등이 출간되기도 하였다. 캐릭터는 인크레더블을 연상시키는 캐릭터로 
사회에서 일어난 작은 사건부터 크나큰 인명피해까지 위기를 대처하는 능력을 알려준 프로그램의 이름은?`,
      author: "위기탈출 넘버원",
    },
    {
      id: "11",
      text: `이 전통은 농촌에서 농사일을 공동으로 하기 위해 향촌 주민들이 마을,부락단위로 둔 공동 노동 조직이다.
조선시대 후기에 이양법이 보편화 되면서 함께 정착되었으며,
일제 강점기에 이르러서는 자영민이 감소해 사라졌다.
마을의 모든 농민들이 경작지에 대해 자타 구별없이 일제히 조직적으로 집단 작업을 도와주는 이 전통은 무엇인가`,
      author: "두레",
    },
    {
      id: "12",
      text: `타이토에서 제작하여 1986년 8월에 출시한 게임이며, 한국에서는 추억의 오락실용 게임으로 유명하다. 드래곤이 거품을 발사하여 스테이지 내의 몬스터들을 가둬 터트리면서 클리어 해 나가는 이 게임은 한국에서는 0000으로 알려져있으며, 알파벳 e,x,t,e,n,d를 모을 경우 추가 효과도 나오는 게임이다,
이 게임의 명칭을 말하시오.`,
      author: "버블보블",
    },
    {
      id: "13",
      text: `넥슨에서 2001년 9월에 런칭한 온라인 게임으로 지금까지도 현존하는 게임이다. 약칭은 비앤비였으나 현재는 이름이 바뀌었다.
2000년대 초반 만해도 아기자기한 캐릭터들로 등장한 이 게임은 물풍선을 이용하여 전투를한다는 시스템으로 인기가 높았으나,
그 후 메이플 스토리, 서든어택 등의 인기에 밀려 유저 층이 급격히 감소했다. 이 게임의 이름은 무엇인가`,
      author: "크레이지 아케이드",
    },
    {
      id: "14",
      text: `롯데제과에서 1972년부터 판매한 50년 이상 장수 아이스크림이며,
겉은 설탕이 들어간 얼음이고 안은 팥 시럽이다. 팥빙수와 비슷한 맛이 난다. 연령층은 주로 나이가 드신 어른들이 좋아하며, 연령이 낮은 아이들에게는 비비빅과 함께 함정으로 양대산맥을 이룬다.
이 아이스크림은 막대 모양으로 출시되어 위에는 둥글고 아래는 네모만 모양이다
이 아이스크림의 이름은? `,
      author: "아맛나",
    },
    {
      id: "15",
      text: `이 사람은 누구일까? 의 세 변의 길이를 각각  a, b, c라 하고 변 a, b 사이 각도가 직각을 이룰 때, 즉 변 c가 빗변일때  a(제곱)+b(제곱)=c(제곱)이/가 성립함을 뜻하는 것으로서 고대 그리스의  이 사람이 처음으로 주장한 정리이다
페르마의 대정리 함수인 FLT를 사용한 이 수학자의 이름은 누구인가 ?`,
      author: "피타고라스",
    },
    {
      id: "16",
      text: `1989년도 영화 죽은 시인의 사회로부터 유명해진 이 말은
“너의 인생을 살아라”라는 표현으로 유명해졌으며,
원래의 본뜻은 퀸투스 호라티우스 플라쿠스의 라틴어의 시에서 처음 유래되었다. “현재를 잡아라” 또는 “현재를 살아라” 라는 말의 뜻을 가진 라틴어의 단어를 말하시오.`,
      author: "카르페디엠",
    },
    {
      id: "17",
      text: `객관식`,
      author: "",
    },
    {
      id: "18",
      text: `스무고개`,
      author: "",
    },
    {
      id: "19",
      text: `스무고개`,
      author: "",
    },
    {
      id: "20",
      text: `스무고개`,
      author: "",
    },
    {
      id: "21",
      text: `이 인물은 누구일까?
이 인물은 아티카 지역의 대표적인 영웅으로 펠로폰네소스의 영웅이라고도 불리는 펠로폰네소스 지역에 도리스족의 영웅 헤라클레스와 쌍벽을 이룬다. 이 인물은 아테네의 있는 크레타를 제압하면서 더욱 더 이름을 날리게 된 인물이며, 저승에 붙잡혀 있다가 돌아왔을 때 아테네의 혼란을 보고 스키로스 섬으로 돌아가 생을 마감한 인물이다`,
      author: "테세우스",
    },
    {
      id: "22",
      text: `그리스 로마신화에 나오는 12 신중에 하나이며,
미와 사랑의 여신으로 불리우는 신이다.
탄생 실화는 크로노스에 의해 잘린 우라노스 성기가 바다에 빠져
뿜어진 거품에서 태어난 것이 이 신이라 칭해진다.
그리스 신화 세계관에서 남신의 난봉꾼이 제우스라면, 여신의 난봉꾼은 이 신으로 불리우게 되는 이 신의 이름은 무엇인가?`,
      author: "아프로디테",
    },
    {
      id: "23",
      text: `이 포켓몬은 누구일까?
굉장히 나른나른하고 느긋한 모습과 성격이다.
이 포켓몬의 유래는 소라게라는 뜻이 담겨있으며, 꼬리로 낚시를 하다
셀레에게 물리면서 둘이 합쳐진 채로 진화하여 불리게 된 이름이다.
하지만 루비 사파이어 에메랄드의 버전의 도감 설명을 보면 불만도 조금 있는듯한 모습으로 꼬리를 물고 있는 셀러가 떨어질 경우 다시 퇴화한다는 설정의 이 포켓몬은 무엇일까?`,
      author: "야도란",
    },
    {
      id: "24",
      text: `이 포켓몬은 2세대에 나온 포켓몬으로서
성도 지방 체육관 관장 호일의 에이스 포켓몬인 스라크의 진화형태이다. 이름의 유래는 가위로 자르다를 뜻이 속해있으며,
사마귀가 모티브인 스라크와는 달리 이 포켓몬은 모티브를 알기 힘들다. 빨간색깔과 집게 때문에 가재라고들 많이 아는 이 포켓몬의 이름은 무엇일까?	`,
      author: "핫삼",
    },
    {
      id: "25",
      text: `이 캐릭은 리그오브레전드의 146번째 챔피언으로
소속은 룬테라의 소속되어있다.
빛의 감시라 들이라는 신성한 조직에 합류하여, 안개에 맹렬히 저항 하였지만 잔혹한 악령 쓰레쉬 손에 쓰러지며, 랜턴에 영혼을 사로잡히게 된다. 시간이 지남에 따라 영혼수집으로 여러 효과를 받는 이 챔피언의 이름은 무엇일까?`,
      author: "세나",
    },
    {
      id: "26",
      text: `1. 볼리베어 q스킬의 이름은? 2. 우디르 E스킬의 이름은?`,
      author: "번개 강타, 불길 쇄도",
    },
    {
      id: "27",
      text: ``,
      author: "",
    },
    {
      id: "28",
      text: ``,
      author: "",
    },
    {
      id: "29",
      text: ``,
      author: "",
    },
    {
      id: "3",
      text: ``,
      author: "",
    },
  ];

  const [currentQuiz, setCurrentQuiz] = useState("");

  const quizState = useSelector((state) => state.quizAuth);

  const quizArr = quizState.arr;

  const dispatch = useDispatch();

  const onSetQuiz = async (productId) => {
    await dispatch(SET_QUIZ(productId));
    // console.log("현재 퀴즈 배열", quizArr);
  };

  useEffect(() => {
    if (params.productId) {
      setQuiz(Number(params.productId));
    }

    return () => {
      console.log("테스트중 :", Arrs[Number(quiz) - 1]?.text);
      console.log("현재 params:", params);
      console.log("현재 quiz 상태:", quiz);
      console.log("Arrs 배열:", Arrs);
    };
  }, [params.productId]);

  return (
    <QuizBaground>
      <span>{params.productId}번 문제</span>

      <QuizTextBox>{Arrs[quiz - 1]?.text || "데이터 삭제"}</QuizTextBox>

      <RouletteButton
        onClick={() => {
          onSetQuiz(params.productId);
          navigate("/roulette");
        }}
      >
        룰렛 페이지로
      </RouletteButton>

      <HomeButton
        onClick={() => {
          navigate("/");
        }}
      >
        {/* <Link to="/">홈으로</Link> */}
        홈으로
      </HomeButton>
      {/* <button
        onClick={() => {
          OnCheckOut();
        }}
      >
        테스트용 버튼
      </button> */}
    </QuizBaground>
  );
};

export default QuizPage;

const QuizBaground = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-left: 25px;
  margin-right: 25px;
  background-color: #1e1f24;
  padding-top: 30px;
  padding-bottom: 30px;

  color: white;

  gap: 10px;
`;

const NumberBox = styled.div``;

const QuizTextBox = styled.div`
  width: 80%;
  height: 500px;
  display: flex;
  flex-direction: column;
  background-color: black;
  align-items: center;

  justify-content: center;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  color: white;
`;

const QuizText = styled.span`
  color: white;
`;

const RouletteButton = styled.button`
  font-size: 1.5rem;

  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;

  border-radius: 50px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  background-image: linear-gradient(
    to right,
    #25aae1,
    #40e495,
    #30dd8a,
    #2bb673
  );
  box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);

  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`;

const HomeButton = styled.button`
  font-size: 1.5rem;

  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;

  border-radius: 50px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  background-image: linear-gradient(
    to right,
    #25aae1,
    #40e495,
    #30dd8a,
    #2bb673
  );
  box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);

  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`;
