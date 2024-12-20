import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorLayout = () => {
  return (
    <div>
      <Ero>
        <h1>
          <strong>앗! 아직 개발중인 기능이에요</strong>
        </h1>
        <br />
        <span>빠르게 기능을 선보이도록 할게요 </span>
        <span> 조금만 더 기달려주세요 💦</span>
        <Link to="/">메인 페이지로 돌아가기</Link>
      </Ero>
    </div>
  );
};

export default ErrorLayout;

const Ero = styled.div`
  display: flex;
  flex-direction: flex-col;
  color: white;
  background-color: #1e1f24;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
  padding-top: 30px;
  padding-bottom: 50px;
  border-radius: 10px;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 5px;
  height: 1000px;
`;
