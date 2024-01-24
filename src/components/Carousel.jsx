import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialsBox from './HomeComponents/TestimonialsBox';

const responsive = {
  desktop: {
    breakpoint: { max:5000, min: 1050 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1050, min: 760 },
    items: 2
  },
  mobile: {
    breakpoint: { max:760, min: 0 },
    items: 1
  }
};


export default function CarouselDiv() {
  return (
    <div>
      <Carousel responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        className='px-1 py-4 '>
          <TestimonialsBox/>
          <TestimonialsBox/>
          <TestimonialsBox/>
      </Carousel>
    </div>
  );
}
