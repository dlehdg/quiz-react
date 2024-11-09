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
  margin-top: 100px
`