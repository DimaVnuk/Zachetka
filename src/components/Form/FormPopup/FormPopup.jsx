import React from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

function FormPopup() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1ed73vr",
        "template_v6ztvn5",
        e.target,
        "user_W5xsz4Kf21BrSrw6N8aDz"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Form onSubmit={sendEmail}>
        <div className="form-wrap">
          <div>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Имя</Form.Label>
              <Form.Control type="text" name="name" placeholder="Имя" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSurname">
              <Form.Label>Фамилия</Form.Label>
              <Form.Control
                type="text"
                placeholder="Фамилия"
                name="second_name"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 form-width"
              controlId="formBasicPassword"
            >
              <Form.Label>Телефон</Form.Label>
              <Form.Control type="tel" name="tel" placeholder="+375" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Почта</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Сообщение</Form.Label>
              <Form.Control as="textarea" rows={3} name="message" />
            </Form.Group>
          </div>
          <div>
            <Form.Group
              className="mb-3 form-width"
              controlId="formBasicPassword"
            >
              <Form.Label>Вид работы</Form.Label>
              <Form.Control
                type="text"
                name="view_work"
                placeholder="Вид работы"
                name="view_work"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 form-width"
              controlId="formBasicPassword"
            >
              <Form.Label>Тема работы</Form.Label>
              <Form.Control
                type="text"
                name="title_work"
                placeholder="Тема работы"
                name="title_work"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 form-width"
              controlId="formBasicPassword"
            >
              <Form.Label>Срок выполнения</Form.Label>
              <Form.Control
                type="text"
                name="deadline"
                placeholder="Срок выполнения"
                name="deadline"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 form-width"
              controlId="formBasicPassword"
            >
              <Form.Label>Комментарий</Form.Label>
              <Form.Control
                type="text"
                name="coment"
                placeholder="Комментарий"
                name="coment"
              />
            </Form.Group>
          </div>
        </div>
        <Link to="/congratulations" style={{ color: "black", textDecoration: "none" }}>
          <div className="btn-flex">
            <Button className="btn-submit" variant="light" type="submit">
              Submit
            </Button>
          </div>
        </Link>
      </Form>
    </>
  );
}

export default FormPopup;
