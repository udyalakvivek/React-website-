/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import logo1 from "../assets/download.png";


const Header = () => {
  
  return (
    <MainHeader className="MainHeader">
      <NavLink to="/">
        <img src={logo1} alt="vivek pandey " className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  // margin-top:2.5rem;
  padding: 0 4.5rem;
  height: 6.5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  // background-color:#a3b18a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  transition: background-color 0.3s ease, top 0.3s ease;
  z-index: 10000;
    

  .logo {
    // height: auto;
    // max-width: 30%;
    // height: 6.5rem;
    // mix-blend-mode: multiply;
    // transform: scale(2);
    // height: 6.5rem; 
    // max-width: 12rem;
    // object-fit:contain;
    background-color: transparent;
      height:38px;
      mix-blend-mode: multiply;
      transform: scale(3);
    
      
  }
     
  
`;

export default Header;
