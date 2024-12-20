import { style } from "framer-motion/client";
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Roulette = () => {
  const data = [
    {
      option: "10점",
      style: { backgroundColor: "red", textColor: "white" },
      percentage: 10,
    },
    {
      option: "20점",
      style: { backgroundColor: "orange", textColor: "red" },
      percentage: 10,
    },
    {
      option: "30점",
      style: { backgroundColor: "yellow", textColor: "white" },
      percentage: 10,
    },
    {
      option: "40점",
      style: { backgroundColor: "green", textColor: "white" },
      percentage: 10,
    },
    {
      option: "50점",
      style: { backgroundColor: "blue", textColor: "white" },
      percentage: 10,
    },
    {
      option: "60점",
      style: { backgroundColor: "navy", textColor: "white" },
      percentage: 10,
    },
    {
      option: "70점",
      style: { backgroundColor: "purple", textColor: "white" },
      percentage: 10,
    },
    {
      option: "80점",
      style: { backgroundColor: "black", textColor: "white" },
      percentage: 10,
    },
    {
      option: "90점",
      style: { backgroundColor: "white", textColor: "red" },
      percentage: 10,
    },
    {
      option: "100점",
      style: { backgroundColor: "gray", textColor: "white" },
      percentage: 10,
    },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const navigate = useNavigate();

  // 룰렛 애니메이션을 실행시킬 함수
  const handleSpinClick = () => {
    if (!mustSpin) {
      // 가중치 랜덤 알고리즘(Weighted Random Picker) 적용
      // 1. 랜덤 기준점 설정
      const pivot = Math.floor(Math.random() * 99) + 1;
      let stack = 0; // 가중치

      let percentage = data.map((row, idx) => {
        {
          return row.percentage;
        }
      });

      let newPrizeNumber = -1; //당첨 인덱스

      percentage.some((row, idx) => {
        //2. 가중치 누적
        stack += row;

        // 3. 누적 가중치 값이 기준점 이상이면 종료
        if (pivot <= stack) {
          newPrizeNumber = idx;
          return true;
        }
      });
      // 당첨 인덱스를 가리킴

      if (newPrizeNumber >= 0 && newPrizeNumber < data.length) {
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
      } else {
        // 에러 처리 (예: alert 메시지 출력)
        alert("오류 발생: 당첨 번호를 찾을 수 없습니다.");
      }

      //   setPrizeNumber(newPrizeNumber);
      //   setMustSpin(true);
    }
  };

  // 룰렛 애니메이션이 멈출 때 실행되는 함수

  const StopSpinning = () => {
    setMustSpin(false);
    alert(data[prizeNumber].option + "이 당첨되셨습니다");

    navigate("/");
  };

  return (
    <Div>
      {/* <Wheel 
            spinDuration={0.2}
            startingOptionIndex={Math.floor(Math.random() * data.length)}
            mustStartSpinning={mustSpin}
            data={data}
            onStopSpinning={StopSpinning}
        /> */}

      <Wheel
        mustStartSpinning={mustSpin}
        spinDuration={0.5}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={["#3e3e3e", "#df3428"]}
        textColors={["#ffffff"]}
        onStopSpinning={StopSpinning}
      />
      <RouletteStartBtn onClick={handleSpinClick}>
        <span>가챠</span>
      </RouletteStartBtn>
      {/* <div>{prizeNumber}</div> */}
    </Div>
  );
};

export default Roulette;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  // item-align: center;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const RouletteStartBtn = styled.button`
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
  padding: 15px 120px;
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
