import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

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
    <div>
      <span>QuizPage 테스트</span>
      <br />
      <span>{params.productId}번 문제</span>
      <br></br>
      <span>{Arrs[Number(quiz) - 1]?.text}</span>

    <br />
    <br />

      <button>

      <Link to="/roulette">룰렛 페이지로</Link>
      </button>


      <br />
      <br/>

      <button>
        <Link to="/">홈으로</Link>
      </button>
      {/* <button
        onClick={() => {
          OnCheckOut();
        }}
      >
        테스트용 버튼
      </button> */}
    </div>
  );
};

export default QuizPage;
