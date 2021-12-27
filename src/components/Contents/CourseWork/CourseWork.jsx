import React, { useState } from "react";
import FeedBack from "./FeedBack/FeedBack";

import { Rating } from "react-simple-star-rating";

function CourseWork() {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <>
      <div className="feedback-cont">
        <FeedBack>
          <div className="title-name">Дима В.</div>
          <div>Огонь, сделали все быстро и качественно</div>

          <Rating
            onClick={handleRating}
            ratingValue={rating}
            readonly={true}
            initialValue={4}
          />
        </FeedBack>

        <FeedBack>
          <div className="title-name">Саня К.</div>
          <div>Остался доволен, да и еще за такие маленькие деньги</div>

          <Rating
            onClick={handleRating}
            ratingValue={rating}
            readonly={true}
            initialValue={4}
          />
        </FeedBack>

        <FeedBack>
          <div className="title-name">Богдан</div>
          <div>Вы лучшие, хорошие ребята, очень помогли!!!</div>

          <Rating
            onClick={handleRating}
            ratingValue={rating}
            readonly={true}
            initialValue={5}
          />
        </FeedBack>
        <FeedBack>
          <div className="title-name">Вероника</div>
          <div>Заказала курсовую, сделали даже раньше</div>

          <Rating
            onClick={handleRating}
            ratingValue={rating}
            readonly={true}
            initialValue={5}
          />
        </FeedBack>
        <FeedBack>
          <div className="title-name">Дима К.</div>
          <div>Сделали диплом на отлично, класс</div>

          <Rating
            onClick={handleRating}
            ratingValue={rating}
            readonly={true}
            initialValue={4}
          />
        </FeedBack>
        <FeedBack>
          <div className="title-name">Костян</div>
          <div>Спасли от армии, спасибо вам за помощь</div>

          <Rating
            onClick={handleRating}
            ratingValue={rating}
            readonly={true}
            initialValue={5}
          />
        </FeedBack>
      </div>
    </>
  );
}

export default CourseWork;
