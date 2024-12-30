import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SET_QUIZ } from "../../redux/slice/quizSlice";
import { RootState } from "../../redux/store";

const Products = [
  { id: "1", title: "수도" },
  { id: "2", title: "군대" },
  { id: "3", title: "명언" },
  { id: "4", title: "한국사1" },
  { id: "5", title: "한국사2" },
  { id: "6", title: "심리학1" },
  { id: "7", title: "심리학2" },
  { id: "8", title: "라면" },
  { id: "9", title: "세계사" },
  { id: "10", title: "tv프로그램" },
  { id: "11", title: "전통" },
  { id: "12", title: "게임1" },
  { id: "13", title: "게임2" },
  { id: "14", title: "아이스크림" },
  { id: "15", title: "수학" },
  { id: "16", title: "영화1" },
  { id: "17", title: "국어" },
  { id: "18", title: "다섯고개1" },
  { id: "19", title: "다섯고개2" },
  { id: "20", title: "다섯고개3" },
  { id: "21", title: "그리스로마신화1" },
  { id: "22", title: "그리스로마신화2" },
  { id: "23", title: "포켓몬1" },
  { id: "24", title: "포켓몬2" },
  { id: "25", title: "롤1" },
  { id: "26", title: "롤2" },
  { id: "27", title: "역사1" },
  { id: "28", title: "역사2" },
  { id: "29", title: "인물1" },
  { id: "30", title: "인물2" },
  { id: "31", title: "시1" },
  { id: "32", title: "시2" },
  { id: "33", title: "신체1" },
  { id: "34", title: "신체2" },
  { id: "35", title: "과학1" },
  { id: "36", title: "과학2" },
  { id: "37", title: "미술1" },
  { id: "38", title: "미술2" },
  { id: "39", title: "태극기" },
  { id: "40", title: "계절" },
  { id: "41", title: "경제" },
  { id: "42", title: "인물3" },
  { id: "43", title: "자연재해" },
  { id: "44", title: "의학" },
  { id: "45", title: "동화" },
  { id: "46", title: "문화재" },
  { id: "47", title: "법" },
  { id: "48", title: "스포츠" },
  { id: "49", title: "그리스로마신화3" },
  { id: "50", title: "음식" },
  { id: "51", title: "삼국지" },
  { id: "52", title: "군대2" },
  { id: "53", title: "국가" },
  { id: "54", title: "보석" },
  { id: "55", title: "심리학3" },
  { id: "56", title: "영화2" },
  { id: "57", title: "역사3" },
  { id: "58", title: "게임3" },
  { id: "59", title: "IT" },
  { id: "60", title: "언어" },
  { id: "61", title: "유래" },
  { id: "62", title: "전통2" },
  { id: "63", title: "지리" },
  { id: "64", title: "영화2" },
  { id: "65", title: "영화2" },
  { id: "66", title: "영화2" },
  { id: "67", title: "영화2" },
  { id: "68", title: "영화2" },
  { id: "69", title: "일심동체" },
  { id: "70", title: "기억력" },
  { id: "71", title: "로보77" },
  { id: "72", title: "마피아게임" },
];

const QuizList = ({ size }: {size: number}) => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const quizState = useSelector((state : RootState) => state.quizAuth);

  const quizArr = quizState.arr;

  const quizTest = quizArr.length;

  const onSetQuiz = (productId : string) => {
    dispatch(SET_QUIZ(productId));
    // console.log("현재 퀴즈 배열", quizArr);
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

        // const isQuizTest = () => {
        //   console.log(
        //     "test : ",
        //     isQuizArr,
        //     "과",
        //     quizArr,
        //     " 현재 배열 개수 :",
        //     quizTest
        //   );
        // };

        // isQuizTest();
        // const isQuizArr = quizArr.some((id) => id === Number(props.id)); // some 메서드와 === 연산자 사용

        return (
          <QuizSpan
            key={props.id}
            style={{ backgroundColor: isQuizArr ? "black" : "red" }}
          >
            <Link
              to={`/quiz/${props.id}`}
              style={{ textDecoration: "none" }}
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
  // background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 10px 20px;
  margin-top: 20px;
  margin-bottom: 5px;
  margin-left: 20px;
  margin-right: 20px;
`;

const QuizSpan = styled.div`
  width: 80px;
  height: 80px;
  font-size: 1.5rem;
  text-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  span {
    color: #fff;
  }

  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 8px;
  text-align: center;
  border: none;
  background-size: 300% 100%;

  border-radius: 10px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  // background-image:
  //   ({ isQuizArr }) =>
  //     isQuizArr
  //       ? "linear-gradient(to right, #fff, #ff0)" // isQuizArr이 true일 때 적용
  //       : "linear-gradient(to right, #29323c, #485563, #2b5876 , #4e4376)" // isQuizArr이 false일 때 적용
  // };

  // background-image: linear-gradient(
  //   to right,
  //   #29323c,
  //   #485563,
  //   #2b5876,
  //   #4e4376
  // );
  box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`;

// const QuizSpan = styled.div`
//   width: 80px;
//   height: 80px;
//   // background-color: white;
//   text-color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   border: 5px solid #000;
// `;
