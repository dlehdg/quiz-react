import React from "react";
import QuizList from "../../components/QuizList/QuizList";
import styled from "styled-components";

const MainPage = () => {
  return (
    <MainBg>
      <div>메인 페이지 테스트 중</div>
      <QuizList size={8} />
      <QuizList size={16} />
      <QuizList size={24} />
      <QuizList size={32} />
      <QuizList size={40} />
      <QuizList size={48} />
    </MainBg>
  );
};

export default MainPage;

const MainBg = styled.div`
  width: 100%;
`;
