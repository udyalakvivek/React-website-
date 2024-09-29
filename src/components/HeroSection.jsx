/* eslint-disable react/no-unescaped-entities */
// import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";
// import heroImg from "../assets/hero.svg"

const HeroSection = () => {
  const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          {/* <p className="hero-top-data">THIS IS ME</p> */}
          <h1 className="hero-heading">{name}</h1>
          <pre className="hero-para">
            I'm <span className="span_name">{name}</span>. A Full stack Developer; <br />
            | BCA student |
          </pre>
          <div className="resume_btn">
            <Button className="btn hireme-btn">
              <NavLink to="/contact"> Hire me </NavLink>
            </Button>
            <Button className="btn hireme-btn">
              <NavLink to="https://drive.google.com/file/d/1tdHZGKPof_53mijayKxPQ5WEOLIfbxMQ/view?usp=sharing"> Resume </NavLink>
            </Button>
          </div>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 7rem 0;
  margin-top: 7rem;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  
  }
    .span_name{
    font-weight:bold;
    color:#ffba08;
    }
  

  .btn {
    max-width: 12rem;
  }
    .resume_btn{
      display:flex;
      gap:1rem;
    }


  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: #14213d;
    // color: ${({ theme }) => theme.colors.helper};
  }
    .container{
      //  background-color: #f0ead2;
    }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    font-size: 1.5rem
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
  // border:1px solid rgba(98, 84, 243, 0.5);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    // filter: grayscale(1);
    opacity: 0.8; 
    max-width: 80%;

    cursor: pointer;
  }
    .hero-img:hover{
    opacity: 1
    }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
