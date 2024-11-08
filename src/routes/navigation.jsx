import React from "react";
import MainPage from "../page/MainPage/MainPage";
import QuizPage from "./../page/QuizPage/QuizPage";

const navigationItems = [
  {
    id: "main",
    path: "/",
    text: "메인페이지",
    element: <MainPage />,
  },
  {
    id: "quiz",
    path: "/quiz",
    text: "퀴즈페이지",
    element: <QuizPage />,
  },
];

export default navigationItems;
