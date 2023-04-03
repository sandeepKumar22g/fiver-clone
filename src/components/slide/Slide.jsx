import React from "react";
import "./slide.scss";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slide = ({ children}) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="slide">
      <div className="container">
        <Carousel responsive={responsive} swipeable={true}
          draggable={true}
          showDots={false} infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000} >
          {children}
        </Carousel>
      </div>
    </div>
  );
};

export default Slide;