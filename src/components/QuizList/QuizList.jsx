import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Products = [
  { id: "1", title: "Quiz1" },
  { id: "2", title: "Quiz2" },
  { id: "3", title: "Quiz3" },
  { id: "4", title: "Quiz4" },
  { id: "5", title: "Quiz5" },
  { id: "6", title: "Quiz6" },
  { id: "7", title: "Quiz7" },
  { id: "8", title: "Quiz7" },
  { id: "9", title: "Quiz7" },
  { id: "10", title: "Quiz7" },
  { id: "11", title: "Quiz7" },
  { id: "12", title: "Quiz7" },
  { id: "13", title: "Quiz7" },
  { id: "14", title: "Quiz7" },
  { id: "15", title: "Quiz7" },
  { id: "16", title: "Quiz7" },
  { id: "18", title: "Quiz7" },
  { id: "19", title: "Quiz7" },
  { id: "20", title: "Quiz7" },
  { id: "21", title: "Quiz7" },
  { id: "22", title: "Quiz7" },
  { id: "23", title: "Quiz7" },
  { id: "24", title: "Quiz7" },
  { id: "25", title: "Quiz7" },
  { id: "26", title: "Quiz7" },
];

const QuizList = ({ size }) => {
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
      <QuizSpan>Quiz 탭</QuizSpan>  */}

      {/* <QuizSpan>
        <Link to="/quiz">Quiz 맵 이동</Link>
      </QuizSpan> */}
      {Products.slice(size - 8, size).map((props) => (
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
