import React from "react";
import MainPage from "../page/MainPage/MainPage";
import QuizPage from "./../page/QuizPage/QuizPage";
import RoulettePage from "../page/RoulettePage/RoulettePage";
import RandomDraw from "../components/RandomDraw/RandomDraw";

const navigationItems = [
  {
    id: "main",
    path: "/",
    text: "메인페이지",
    element: <MainPage />,
  },
  // {
  //   id: "quiz",
  //   path: "/quiz",
  //   text: "퀴즈페이지",
  //   element: <QuizPage />,
  // },
  {
    id: "quiz",
    path: "/quiz/:productId",
    text: "퀴즈페이지",
    element: <QuizPage />,
  },

  {
    id: "roulette",
    path: "/roulette",
    text: "룰렛 페이지",
    element: <RoulettePage />,
  },
  {
    id: "randomroulette",
    path: "/random",
    text: "랜덤 룰렛 페이지",
    element: <RandomDraw />,
  }
];

export default navigationItems;
