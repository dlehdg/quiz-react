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
    },
    { id: "2", text: "대한민국 광역시는?" },
    {
      id: "3",
      text: "소설 <어린 왕자> 속 어린 왕자가 살고 있던 소행성의 이름은?",
    },
    {
      id: "4",
      text: "이순신 장군이 육전에서 사용되던 학익진 전술을 최초로 해전에 도입했던 전투는?",
    },
    {
      id: "5",
      text: "이순신 장군이 육전에서 사용되던 학익진 전술을 최초로 해전에 도입했던 전투는?",
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

  const OnCheckOut = () => {
    setQuiz(params.productId);

    console.log(quizArr);
  };

  return (
    <QuizBaground>
      <span>{params.productId}번 문제</span>

      <QuizTextBox>
        <QuizText>{Arrs[Number(quiz) - 1]?.text}</QuizText>
      </QuizTextBox>

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
  margin-bottom: 30px;
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
    #f5ce62,
    #e43603,
    #fa7199,
    #e85a19
  );
  box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);
  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`;
