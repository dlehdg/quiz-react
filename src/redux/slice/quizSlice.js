import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    REMOVE_QUIZ: (state, action) => {},
  },
});

export const { SET_QUIZ, REMOVE_QUIZ } = quizSlice.actions;

export default quizSlice;
