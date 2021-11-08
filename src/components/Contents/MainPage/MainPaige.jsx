import React from "react";
import Button from "../../Button/Button";

const btnMain = {
  background: "#ffeb00",
  color: "black",
  with:"300px",
  height:"50px",
  fontSize:"18px",
  border: "none",
};

function MainPaige() {
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
          <Button>ДИПЛОМНАЯ РАБОТА</Button>
          <Button>КУРСОВАЯ РАБОТА</Button>
          <Button>ОТЧЕТ</Button>
          <Button>ОНЛАЙН ТЕСТ</Button>
        </div>
        <div className="desc-main-cont">
          <p className="desc-main">
            Мы работаем со студентами 1-5 курсов заочной, очной и дистанционной
            форм обучения. Наша цель – облегчить учебу и оказать помощь по
            написанию работ, сдачей контрольных работ и сессий.
          </p>
        </div>
        <Button propsStyle={btnMain}>Заказать работу</Button>
      </main>
    </>
  );
}

export default MainPaige;
