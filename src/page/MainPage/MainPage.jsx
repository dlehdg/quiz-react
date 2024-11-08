import React from "react";
import QuizList from "../../components/QuizList/QuizList";

const MainPage = () => {
  return (
    <div>
      <div>메인 페이지 테스트 중</div>
      <QuizList size={7} />
      <QuizList size={14} />
      <QuizList size={21} />
    </div>
  );
};

export default MainPage;
