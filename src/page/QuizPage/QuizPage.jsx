import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SET_QUIZ } from "../../redux/slice/quizSlice";
import styled from "styled-components";

const QuizPage = () => {
  const params = useParams();

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
      id: "6",
      text: ``,
      author: "",
    },
  ];

  const [quiz, setQuiz] = useState("");
  const navigate = useNavigate();

  const quizState = useSelector((state) => state.quizAuth);

  const quizArr = quizState.arr;

  const dispatch = useDispatch();

  const onSetQuiz = (productId) => {
    dispatch(SET_QUIZ(productId));
    console.log("현재 퀴즈 배열", quizArr);
  };

  useEffect(() => {
    return () => {
      OnCheckOut();
    };
  }, [params.productId]);

  useEffect(() => {
    console.log("테스트중 :", Arrs[Number(quiz) - 1]?.text);
  }, []);

  const OnCheckOut = () => {
    setQuiz(params.productId);

    console.log(Arrs[Number(quiz) - 1]?.text);
  };

  return (
    <QuizBaground>
      <span>{params.productId}번 문제</span>

      <QuizTextBox>{Arrs[Number(quiz) - 1]?.text || "데이터 삭제"}</QuizTextBox>

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
  color: #fff;
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
