import React from "react";
import Roulette from "../../components/Roulette/Roulette";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RoulettePage = () => {
  return (
    <Div>
      <span>RoulettePage 테스트</span>
      <Roulette />

      <button>
        <Link to="/">처음으로</Link>
      </button>
    </Div>
  );
};

export default RoulettePage;

const Div = styled.div`
  gap: 5px;
`;
