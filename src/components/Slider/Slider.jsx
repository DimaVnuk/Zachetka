import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import Footer from "../Footer/Footer";
function Slider() {
  return (
    <>
    <Carousel>
      <Carousel.Item className="slider-height">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="First slide"
        />
        <Carousel.Caption className="font-slider">
          <h3>Качественно</h3>
          <p>Выполняем работы любой сложности и в любые сроки.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider-height">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
          alt="Second slide"
        />

        <Carousel.Caption className="font-slider">
          <h3>Быстро</h3>
          <p>Вы отдыхаете, мы выполняем</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider-height">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
          alt="Third slide"
        />

        <Carousel.Caption className="font-slider">
          <h3>Дёшево</h3>
          <p>
            Самы низкие цены и самые лучшие специалисты.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    <div className="cont-black">
    <div className="cont-with-button">
        <Link to="/graduate" style={{ textDecoration: "none" }}>
          <Button>О нас</Button>
          </Link>
          <Link to="/course" style={{ textDecoration: "none" }}>
          <Button>Отзывы</Button>
          </Link>
          <Link to="/report" style={{ textDecoration: "none" }}>
          <Button>Карта</Button>
          </Link>
          <Link to="/test" style={{ textDecoration: "none" }}>
          <Button>Готовые работы</Button>
          </Link>
        </div>
    </div>
    <Footer/>
    </>
  );
}

export default Slider;
