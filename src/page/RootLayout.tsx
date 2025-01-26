import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const RootLayout = () => {
  return (
    <Divs>
      <Outlet />
    </Divs>
  );
};

export default RootLayout;

const Divs = styled.div`
  width: auto;
  height: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  flex-direction: column;
  padding-bottom: 100px;
  // border: 3px solid black;
  // background-image: url("/images/mika.webp");
`;
