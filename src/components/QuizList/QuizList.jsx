import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Products = [
  { id: "1", title: "Quiz1" },
  { id: "2", title: "Quiz2" },
  { id: "3", title: "Quiz3" },
  { id: "4", title: "Quiz4" },
  { id: "5", title: "Quiz5" },
];

const QuizList = () => {
  return (
    <QuizBg>
      {/* <QuizSpan>
        <Link to="/quiz">Quiz 맵 이동</Link>
      </QuizSpan>
      <QuizSpan>Quiz 탭</QuizSpan>
      <QuizSpan>Quiz 탭</QuizSpan>
      <QuizSpan>Quiz 탭</QuizSpan>
      <QuizSpan>Quiz 탭</QuizSpan>
      <QuizSpan>Quiz 탭</QuizSpan>
      <QuizSpan>Quiz 탭</QuizSpan> */}

      {Products.map((props) => (
        <QuizSpan key={props.id}>
          <Link to={`/quiz/${props.id}`}>
            <span>{props.id}번 퀴즈</span>
          </Link>
        </QuizSpan>
      ))}
    </QuizBg>
  );
};

export default QuizList;

const QuizBg = styled.div`
  width: auto;
  height: 100px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const QuizSpan = styled.div`
  width: 80px;
  height: 80px;
  background-color: white;
  text-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
