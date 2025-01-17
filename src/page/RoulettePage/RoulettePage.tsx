import React from "react";
import Roulette from "../../components/Roulette/Roulette";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const RoulettePage = () => {
  const navigate = useNavigate();

  const onBackHome = () => {
    navigate("/");
  };

  return (
    <Div>
      <span>가챠</span>
      <Roulette />

      <BackHome onClick={onBackHome}>
        <span>처음으로</span>
      </BackHome>
    </Div>
  );
};

export default RoulettePage;

const Div = styled.div`
  gap: 5px;
  width: 100%;
  height: auto;
  // background-image: url("/images/casino.webp");
  background-color: #1e1f24;
  background-size: cover;
  display: flex;
  flex-direction: column;
  item-align: center;
  justify-content: center;
  margin-left: 50px;
  margin-right: 50px;
  padding-top: 30px;
  padding-bottom: 50px;

  color: #fff;
  gap: 20px;
  border-radius: 10px;
`;

const BackHome = styled.button`
  border: none;
  display: block;

  border-radius: 25px;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  background-color: #222;
  padding: 14px 110px;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  span {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 490%;
    width: 140%;
    background: #78c7d2;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
    transform: translateX(-98%) translateY(-25%) rotate(45deg);
  }

  &:hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }
`;
