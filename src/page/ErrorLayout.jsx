import React from "react";
import styled from "styled-components";

const ErrorLayout = () => {
  return (
    <div>
      <Ero>
        <h1>
          <strong>앗! 아직 개발중인 기능이에요</strong>
        </h1>
        <br />
        <span>빠르게 기능을 선보이도록 할게요</span>
        <span>조금만 더 기달려주세요 💦</span>
      </Ero>
    </div>
  );
};

export default ErrorLayout;

const Ero = styled.div`
  display: flex;
  flex-direction: flex-col;
  align-items: items-center;
  color: white;
`;
