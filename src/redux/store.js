import { combineReducers, configureStore } from "@reduxjs/toolkit";
import quizReducer from "./slice/quizSlice";
import quizSlice from "./slice/quizSlice";

const rootReducer = combineReducers({
  quizAuth: quizSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
