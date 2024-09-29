import styled from "styled-components";




const servicesData = [
  
    {
        id: 1,
        name: "HTML",
        image: "/images2/html.avif", 
       
    },
    {
        id: 2,
        name: "CSS",
        image: "images2/css.avif", 
       
    },
    {
        id: 3,
        name: "javaScript",
        image: "images2/js.avif", 
        
    },
    {
        id: 4,
        name: "React.js",
        image: "images2/react.avif", 
       
    },
    {
        id: 5,
        name: "Bootstrap",
        image: "images2/bootstrap.avif", 
      
    },
    {
        id: 6,
        name: "jQuery",
        image: "/images2/jq.png", 
       
    },
    {
        id: 7,
        name: "Python",
        image: "images2/python.avif", 
       
    },
    {
        id: 8,
        name: "Django",
        image: "images2/django.avif", 
       
    },
    {
        id:9,
        name: "Mongodb",
        image: "images2/mongodb.avif",
    
    },
];

const Services = () => {
    
    const services = servicesData;

    return (
        <Wrapper className="section">
            <h2 className="common-heading">My Skills</h2>
            <div className="container grid grid-three-column">
              
                {services.map((curElem) => {
                    const { id, name, image } = curElem;
                    return (
                        <div key={id} className="card">
                            <figure>
                                <img src={image} alt={name} />
                            </figure>
                            <div className="card-data">
                                <h3>{name}</h3>
                                
                                {/* <NavLink to="/service">
                                    <Button className="btn">Read More</Button>
                                </NavLink> */}
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
    max-width: 110rem;
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
    border-radius: 0.5rem;
    cursor: pointer;
    .card-data {
      padding: 1rem 2rem;
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

    
  }
`;
export default Services;


