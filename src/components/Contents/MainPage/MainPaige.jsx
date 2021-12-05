import React from "react";
import Button from "../../Button/Button";

import { Link } from "react-router-dom";
import Popup from "../../Popup/Popup";
import FormPopup from "../../Form/FormPopup/FormPopup";

const btnMain = {
  background: "#ffeb00",
  color: "black",
  with:"300px",
  height:"50px",
  fontSize:"18px",
  border: "none",
};

function MainPaige() {
  const [modalActive, setModalActive] = React.useState(false);

 
  return (
    <>
      <main className="main-cont main-cont_wrap">
        <div className="sub-title-main-cont">
          <p className="sub-title">Академическая помощь студентам</p>
        </div>
        <div className="title-main-cont">
          <h1 className="title-main title-main-font">
            КРУПНЕЙШИЙ EDUCATION-HELPER СЕРВИС В БЕЛАРУСИ
          </h1>
        </div>
        <div className="cont-with-button">
        <Link to="/graduate" style={{ textDecoration: "none" }}>
          <Button>Узнать больше</Button>
          </Link>
          <Link to="/course" style={{ textDecoration: "none" }}>
          <Button>Отзывы</Button>
          </Link>
          <Link to="/report" style={{ textDecoration: "none" }}>
          <Button>Отчет</Button>
          </Link>
          <Link to="/test" style={{ textDecoration: "none" }}>
          <Button>Узнать стоимость</Button>
          </Link>
        </div>
        <div className="desc-main-cont">
          <p className="desc-main">
            Мы работаем со студентами 1-5 курсов заочной, очной и дистанционной
            форм обучения. Наша цель – облегчить учебу и оказать помощь по
            написанию работ, сдачей контрольных работ и сессий.
          </p>
        </div>
        <Button propsStyle={btnMain} onClickProps={() => setModalActive(true)}>Заказать работу</Button>
        <Popup active={modalActive} setActive={setModalActive}>
        <FormPopup/>
      </Popup>
      </main>
    </>
  );
}

export default MainPaige;
