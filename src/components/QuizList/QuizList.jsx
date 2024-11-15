import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SET_QUIZ } from "../../redux/slice/quizSlice";

const Products = [
  { id: "1", title: "수도" },
  { id: "2", title: "동화" },
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
  { id: "27", title: "Quiz7" },
  { id: "28", title: "Quiz7" },
  { id: "29", title: "Quiz7" },
  { id: "30", title: "Quiz7" },
  { id: "31", title: "Quiz7" },
  { id: "32", title: "Quiz7" },
  { id: "34", title: "Quiz7" },
  { id: "35", title: "Quiz7" },
  { id: "36", title: "Quiz7" },
  { id: "37", title: "Quiz7" },
  { id: "38", title: "Quiz7" },
  { id: "39", title: "Quiz7" },
  { id: "40", title: "Quiz7" },
  { id: "41", title: "Quiz7" },
  { id: "42", title: "Quiz7" },
  { id: "43", title: "Quiz7" },
  { id: "44", title: "Quiz7" },
  { id: "45", title: "Quiz7" },
  { id: "46", title: "Quiz7" },
  { id: "47", title: "Quiz7" },
  { id: "48", title: "Quiz7" },
  { id: "49", title: "Quiz7" },
];

const QuizList = ({ size }) => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const quizState = useSelector((state) => state.quizAuth);

  const quizArr = quizState.arr;

  const quizTest = quizArr.length;

  const onSetQuiz = (productId) => {
    dispatch(SET_QUIZ(productId));
    console.log("현재 퀴즈 배열", quizArr);
  };

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
      {Products.slice(size - 8, size).map((props) => {
        // const isQuizArr = quizArr.includes(Number(props.id));
        const isQuizArr = quizArr.some((id) => id === Number(props.id));

        const isQuizTest = () => {
          console.log(
            "test : ",
            isQuizArr,
            "과",
            quizArr,
            " 현재 배열 개수 :",
            quizTest
          );
        };
        // const isQuizArr = quizArr.some((id) => id === Number(props.id)); // some 메서드와 === 연산자 사용

        isQuizTest();

        return (
          <QuizSpan
            key={props.id}
            style={{ backgroundColor: isQuizArr ? "red" : "white" }}
          >
            <Link
              to={`/quiz/${props.id}`}
              onClick={() => {
                // onSetQuiz(props.id);
              }}
            >
              <span>{props.title}</span>
            </Link>
          </QuizSpan>
        );
      })}
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
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
  margin-bottom: 5px;
  margin-left: 20px;
  margin-right: 20px;
`;

const QuizSpan = styled.div`
  width: 80px;
  height: 80px;
  // background-color: white;
  text-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 5px solid #000;
`;
