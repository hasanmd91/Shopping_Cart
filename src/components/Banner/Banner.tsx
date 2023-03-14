import React from "react";
import Carousel from "react-bootstrap/Carousel";

import banner1 from "./Images/banner1.png";
import banner2 from "./Images/banner2.png";
import sale from "./Images/sale.png";

interface BannerProps {
  slideInterval: number;
  pauseOnHover?: 'hover' | false;
}

const Banner: React.FC<BannerProps> = ({slideInterval, pauseOnHover=false}) => {
  return (
    <React.Fragment>
      <Carousel interval={slideInterval} pause={pauseOnHover} variant="dark">
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
