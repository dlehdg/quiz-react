import React from "react";
import { useParams } from "react-router-dom";

const QuizPage = () => {
  const params = useParams();

  return (
    <div>
      <span>QuizPage 테스트</span>
      <br />
      <span>{params.productId}번 문제</span>
    </div>
  );
};

export default QuizPage;
