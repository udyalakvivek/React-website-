// import React from "react";
import styled from "styled-components";

// import { NavLink } from "react-router-dom";
import { FaInstagram, FaLinkedin, } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div>
          <div style={{ textAlign: "center" }}>
            <h3>Ready to get started?
              Talk to us today</h3>
          </div>

         
        </div>
      </section>

    

      <footer>
        <div className="container grid grid-three-column">
          <div className="footer-about">
            <h3>Vivek website</h3>
            <p>I am a web Developer😇😇</p>
          </div>

          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div className="footer-social-link">
                <a
                  href="https://x.com/"
                  target="_blank"
                >
                  <FaX className="icons" />
                  </a>
              </div>
              <div className="footer-social-link">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                 <FaInstagram className="icons" />
                </a>
              </div>
              <div className="footer-social-link">
                <a
                  href="https://www.linkedin.com/in/vivekpandey07/"
                  target="_blank">
                  <FaLinkedin className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 12345678978</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Vivek Pandey. All Rights Reserved
            </p>
            <div>
              
              <p>Vivek Pandey✌️✌️</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    text-align:center;
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      justify-content:center;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;/
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
     
    }
      .footer-social-link:hover .icons {
       color: #00f5d4; 
     }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
