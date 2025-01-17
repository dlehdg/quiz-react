import { createSlice } from "@reduxjs/toolkit";
import { IQuiz } from './../../types/index';
import { RootState } from "../store";

interface IQuizState {
  isCheckedIn: boolean;
  quizId: null | string;
  arr: number[];
  number: number;
}


const initialState : IQuizState = {
  isCheckedIn: false,
  quizId: null,
  arr: [],
  number: 0,
};

const quizSlice = createSlice({
  name: "quizauth",
  initialState,
  reducers: {
    SET_QUIZ: (state, action) => {
      const newIndexId = Number(action.payload);

      // arr 배열에 새로운 인덱스 ID 추가
      // state.arr.push(newIndexId);

      if (!state.arr.includes(newIndexId)) {
        state.arr.push(newIndexId);
      }
    },

    CHECK_RANDONBOX: (state, action) => {
      state.number = action.payload;
    },
    CHECK_QUIZ: (state, action) => {
      state.number = action.payload;
    },
  },
});


export const selectQuiz = (state: RootState) => state.quizAuth.arr;

export const { SET_QUIZ, CHECK_RANDONBOX } = quizSlice.actions;

export default quizSlice;
