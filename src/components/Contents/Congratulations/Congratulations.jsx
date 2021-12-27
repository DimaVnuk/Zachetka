import React from "react";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";
function Congratulations() {
  return (
    <>
      <Confetti />
      <div className="font-congratulations">
        <p>Спасибо. Заявка принята. В ближайшее время с Вами свяжется наш специалист.</p>
      </div>
      <Link to="/" style={{ color: "black", textDecoration: "none" }}>
        <div className="font-button-congratulations">На главную</div>
      </Link>
    </>
  );
}

export default Congratulations;
