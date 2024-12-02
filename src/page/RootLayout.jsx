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
  height: 1100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;

  padding-top: 50px;
  padding-bottom: 50px;
  // border: 3px solid black;
`;
