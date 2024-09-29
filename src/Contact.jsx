// import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto; 

        .contact-inputs {
        
          display: flex;
          flex-direction: column;
          gap: 3rem;

          .input-btn{
          background-color: #ced4da;
          color:black;
            text-transform: none;
          }
          input::placeholder {
            color: black;
          }

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            margin-bottom: 3rem;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: black;
              // color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact us</h2>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xpwaelzn"
            method="POST"
            className="contact-inputs">
            <input
              className="input-btn"
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              className="input-btn"
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              className="input-btn"
              placeholder="Messages😇😇😇"
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.425896877785!2d77.3710350753578!3d28.616994975673286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55e6c23b983%3A0x742cc2661a6d7a87!2sSector%2062%20Noida!5e0!3m2!1sen!2sin!4v1726398620862!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>


    </Wrapper>
  );
};

export default Contact;
