import React from "react";
import Carousel from "react-bootstrap/Carousel";

import banner1 from "./Images/banner1.png";
import banner2 from "./Images/banner2.png";
import sale from "./Images/sale.png";

const Banner = () => {
  return (
    <React.Fragment>
      <Carousel interval={2000} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sale} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
};
export default Banner;
