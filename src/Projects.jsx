
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";



const servicesData = [
  {
    id: 1,
    name: "Portfolio-1",
    image: "/images/personal1.avif",
    description: "I am develop my first Portfolio website using of HTML , CSS , JAVASCRIPT and  BOOTSTRAP.",
    live_link: "https://udyalakvivek.github.io/Portfolio-2.0/",

  },
  {
    id: 2,
    name: "General Calculator",
    image: "/images/calculater.avif",
    description: "Interactive calculator with modern design, powered by HTML, CSS, and JavaScript, highlighting frontend proficiency in my portfolio.",
    live_link: "https://vivekcalc.netlify.app/",
  },
  {
    id: 3,
    name: "Quete Generator",
    image: "/images/qoute.avif",
    description: "Engage with a dynamic quote generator utilizing APIs, HTML, CSS, and JavaScript, illustrating frontend and API integration skills in my portfolio.",
    live_link: "https://admirable-dusk-61d8c3.netlify.app/",
  },
  {
    id: 4,
    name: "Currency Convertor",
    image: "/images/cuurency2.webp",
    description: "A simple and user- friendly currency converter built with HTML, CSS, and JavaScript, providing accurate conversions with real - time exchange rates",
    live_link: "https://preeminent-crisp-b39b46.netlify.app/",
  },
  {
    id: 5,
    name: "Tic Toc Toe game ",
    image: "/images/tictoctoi.webp",
    description: "A classic Tic Tac Toe game built with HTML, CSS, and JavaScript. Enjoy quick, engaging matches with a sleek design and intuitive two-player interface",
    live_link: "https://sage-gingersnap-d0b204.netlify.app/",
  },
  {
    id: 6,
    name: "Weather App",
    image: "/images/personal3.avif",
    description: "A normal wearther app  built with HTML, CSS, and JavaScript. for  ",
    live_link: "https://udyalakvivek.github.io/weather-app/",
  },
];

const Services = () => {

  const services = servicesData;

  return (
    <Wrapper className="section">
      <h2 className="common-heading">My Projects</h2>
      <div className="container grid grid-three-column">
        
        {services.map((curElem) => {
          const { id, name, image, description ,live_link} = curElem;
          return (
            <div key={id} className="card">
              <figure>
                <img src={image} alt={name} />
              </figure>
              <div className="card-data">
                <h3>{name}</h3>
                <p>{description}</p>
                <NavLink to={live_link}>
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    display: grid;
    gap: 9rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.7s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.4s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      object-fit: cover;
      height: 20rem;
      transition: all 0.4s linear;
    }
    &:hover img {
      transform: scale(1.2);
    }
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    .card-data {
      padding: 0 2rem;
    }
      .card-data{
        text-align:center;
      }
        .card-data h3{
        font-weight:700;
        }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;
      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }
`;
export default Services;








