import React from "react";
import Carousel from "react-bootstrap/Carousel";
function Slider() {
  return (
    <Carousel>
      <Carousel.Item className="slider-height">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Качественно</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider-height">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Быстро</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider-height">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Дёшево</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
