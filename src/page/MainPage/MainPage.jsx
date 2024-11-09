import React from "react";
import QuizList from "../../components/QuizList/QuizList";

const MainPage = () => {
  return (
    <div>
      <div>메인 페이지 테스트 중</div>
      <QuizList size={8} />
      <QuizList size={16} />
      <QuizList size={24} />
      <QuizList size={32} />
    </div>
  );
};

export default MainPage;
