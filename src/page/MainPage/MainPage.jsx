import React, { useEffect, useState } from "react";
import QuizList from "../../components/QuizList/QuizList";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MainPage = () => {
  const [check, setCheck] = useState(false);

  const navigate = useNavigate();

  const quizArr = useSelector((state) => state.quizAuth.arr);

  const quizArrLength = quizArr.length;

  const CheckQuizArrLength = () => {
    const number = Number(quizArrLength);
    if (number % 8 === 0) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  // useEffect(() => {
  //   CheckQuizArrLength();
  // }, [quizArr]);

  useEffect(() => {
    // quizArr이 변경될 때만 실행
    if (quizArr.length > 0) {
      const number = Number(quizArrLength);
      if (number % 8 === 0) {
        setCheck(true);
      } else {
        setCheck(false);
      }
    }
  }, [quizArr]);

  return (
    <MainBg>
      <MainHeader>
        <div>메인 페이지 테스트 중</div>
        <div햐>{quizArrLength} 개 클리어</div햐>
      </MainHeader>
      <QuizList size={8} />
      <QuizList size={16} />
      <QuizList size={24} />
      <QuizList size={32} />
      <QuizList size={40} />
      <QuizList size={48} />
      <QuizList size={56} />
      {check && (
        <QuizRouletteButton
          onClick={() => {
            navigate("/random");
          }}
        >
          <span>랜덤 뽑기</span>
        </QuizRouletteButton>
      )}
    </MainBg>
  );
};

export default MainPage;

const MainBg = styled.div`
  width: 100%;
`;

const QuizRouletteButton = styled.button`
  font-size: 1.5rem;

  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin-top: 30px;
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

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  div:first-child {
    margin-right: 80px; // 두 번째 div와의 간격 조절
  }

  div:last-child {
    text-align: right; // 두 번째 div를 오른쪽 정렬
  }
`;
