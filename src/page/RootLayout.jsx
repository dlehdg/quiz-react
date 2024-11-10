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
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 50px;
  margin-right: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
  border: 3px solid black;
`;
