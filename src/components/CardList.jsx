
// // import styled from "styled-components";
// // import { useGlobalContext } from "./context";
// // import { NavLink } from "react-router-dom";
// // import { Button } from "./styles/Button";

// // const Services = () => {
// //   const { services } = useGlobalContext();
// //   console.log(services);

// //   return (
// //     <Wrapper className="section">
// //       <h2 className="common-heading">Our Services</h2>
// //       <div className="container grid grid-three-column">
// //         {services.map((curElem) => {
// //           const { id, name, image, description } = curElem;
// //           return (
// //             <div key={id} className="card">
// //               <figure>
// //                 <img src={image} alt={name} />
// //               </figure>
// //               <div className="card-data">
// //                 <h3>{name}</h3>
// //                 <p>{description}</p>
// //                 <NavLink to="/service">
// //                   <Button className="btn">Read More</Button>
// //                 </NavLink>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </Wrapper>
// //   );
// // };

// // const Wrapper = styled.section`
// //   padding: 9rem 0;
// //   // background-color: ${({ theme }) => theme.colors.bg};
// //   // background-color:#f4f1de;
// //   background-color:rgb(249 249 255)


// //   .container {
// //     max-width: 120rem;
// //   }

// //   .card {
// //     border: 0.1rem solid rgb(170 170 170 / 40%);
// //     .card-data {
// //       padding: 0 2rem;
// //     }

// //     h3 {
// //       margin: 2rem 0;
// //       font-weight: 300;
// //       font-size: 2.4rem;
// //     }
// //     .btn {
// //       margin: 2rem auto;
// //       background-color: rgb(0 0 0 / 0%);
// //       border: 0.1rem solid rgb(98 84 243);
// //       display: flex;
// //       justify-content: center;
// //       align-items: center;
// //       color: rgb(98 84 243);
// //       font-size: 1.4rem;

// //       &:hover {
// //         background-color: rgb(98 84 243);
// //         color: #fff;
// //       }
// //     }
// //   }

// //   figure {
// //     width: auto;
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //     position: relative;
// //     overflow: hidden;
// //     transition: all 0.5s linear;
// //     &::after {
// //       content: "";
// //       position: absolute;
// //       top: 0;
// //       left: 0;
// //       width: 0%;
// //       height: 100%;
// //       background-color: rgba(0, 0, 0, 0.5);
// //       transition: all 0.2s linear;
// //       cursor: pointer;
// //     }
// //     &:hover::after {
// //       width: 100%;
// //     }
// //     &:hover img {
// //       transform: scale(1.2);
// //     }
// //     img {
// //       max-width: 90%;
// //       margin-top: 1.5rem;
// //       height: 20rem;
// //       transition: all 0.2s linear;
// //     }
// //   }

// //   @media (max-width: ${({ theme }) => theme.media.tab}) {
// //     .grid-three-column {
// //       grid-template-columns: 1fr 1fr;
// //     }
// //   }

// //   @media (max-width: ${({ theme }) => theme.media.mobile}) {
// //     .grid-two-column,
// //     .grid-three-column {
// //       grid-template-columns: 1fr;
// //     }
// //   }
// // `;

// // export default Services;










// import styled from "styled-components";
// import { NavLink } from "react-router-dom";
// import { Button } from "../styles/Button";
// import PropTypes from 'prop-types';




// const CardList = ({data, isproject }) => {
//     return (
//         <Wrapper className="section">
//             <h2 className="common-heading">Our Projects</h2>
//             <div className="container grid grid-three-column">

//                 {data.map((curElem) => {
//                     const { id, name, image, description } = curElem;
//                     return (
//                         <div key={id} className="card">
//                             <figure>
//                                 <img src={image} alt={name} />
//                             </figure>
//                             <div className="card-data">
//                                 <h3>{name}</h3>
//                                 {isproject && (<>
//                                     <p>{description}</p>
//                                     <NavLink to="/projects">
//                                         <Button className="btn">Read More</Button>
//                                     </NavLink>
//                                 </>)}
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </Wrapper>
//     );
// };

// CardList.propTypes = {
//     data: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired,
//         description: PropTypes.string,
//     })).isRequired,
//     isproject: PropTypes.bool, // Validate isProject as a boolean
// };

// CardList.defaultProps = {
//     isProject: true, // Default value for isProject if not provided
// };

// // css
// const Wrapper = styled.section`
//   padding: 9rem 0;

//   .container {
//     max-width: 120rem;
//   }

//   .grid {
//     display: grid;
//     gap: 9rem;
//   }

//   figure {
//     width: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     overflow: hidden;
//     transition: all 0.7s linear;
//     &::after {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 0%;
//       height: 100%;
//       background-color: rgba(0, 0, 0, 0.5);
//       transition: all 0.4s linear;
//       cursor: pointer;
//     }
//     &:hover::after {
//       width: 100%;
//     }
//     img {
//     max-width: ${props => props.isProject ? "90%" : "60px"}; 
//       object-fit: cover;
//       height: ${props => props.isProject ? "20rem" : "auto"};
//     }
//     //   max-width: 90%;
//     //   object-fit: cover;
//     //   height: 20rem;
//       margin-top: 1.5rem;
//       transition: all 0.4s linear;
//     }
//     &:hover img {
//       transform: scale(1.2);
//     }
//   }

//   .card {
//     border: 0.1rem solid rgb(170 170 170 / 40%);
//     box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
//     .card-data {
//       padding: 0 2rem;
//     }
//       .card-data{
//         text-align:center;
//       }
//         .card-data h3{
//         font-weight:700;
//         }

//     h3 {
//       margin: 2rem 0;
//       font-weight: 300;
//     //   font-size: 2.4rem;
//     font-size: ${props => props.isProject ? "2.4rem" : "1.8rem"};
//     }

//     .btn {
//       margin: 2rem auto;
//       background-color: rgb(0 0 0 / 0%);
//       border: 0.1rem solid rgb(98 84 243);
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       color: rgb(98 84 243);
//       font-size: 1.4rem;
//       &:hover {
//         background-color: rgb(98 84 243);
//         color: #fff;
//       }
//     }
//   }
// `;
// export default CardList;

