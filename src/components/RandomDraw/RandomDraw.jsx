import { Rating } from "@mui/material";
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { useNavigate } from "react-router-dom";

const RandomDraw = () => {
  const data = [
    {
      option: "Apple Vision Pro",
      style: { backgroundColor: "#8C5E58", textColor: "white" },
      percentage: 20,
    },
    {
      option: "LG TV",
      style: { backgroundColor: "#F3F7F0", textColor: "red" },
      percentage: 20,
    },
    {
      option: "SAMSUNG 에어컨",
      style: { backgroundColor: "#19323C", textColor: "white" },
      percentage: 20,
    },
    {
      option: "꽝",
      style: { backgroundColor: "#F2545B", textColor: "white" },
      percentage: 20,
    },
    {
      option: "샌드위치",
      style: { backgroundColor: "#A93F55", textColor: "white" },
      percentage: 20,
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
    <div>
      <span>Roulette</span>
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
      <button onClick={handleSpinClick}>가챠</button>
      {/* <div>{prizeNumber}</div> */}

      {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
    </div>
  );
};

export default RandomDraw;
