import React from "react";
import { Table } from "react-bootstrap";
function OnlineTest() {
  return (
    <>
      <div className="cont-calc">
        <div className="desc-price">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Вид работы</th>
                <th>Стоимость</th>
                <th>Дисциплина</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Теоретический анализ исследования проблемы идентичности в психологической литературе</td>
                <td>50 BYN</td>
                <td>Психологическое консультирование</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Развитие исследовательских способностей младших школьников в образовательном процессе</td>
                <td>45 BYN</td>
                <td>Педагогика</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Развитие исследовательских способностей младших школьников в образовательном процессе</td>
                <td>50 BYN</td>
                <td>Педагогика</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Третейские суды</td>
                <td>129 BYN</td>
                <td>Правоведение</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Разработка мер нейтрализации хозяйственных рисков предприятий целлюлозно-бумажной отрасли</td>
                <td>64 BYN</td>
                <td>ЭМММ</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Гештальт-консультирование как средство развития идентичности у женщин в возрасте ранней зрелости</td>
                <td>50 BYN</td>
                <td>Магистерская диссертация по специализации Психологическое консультирование</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Современное состояние и перспективы развития судебно-экономических экспертных исследований в Республике Беларусь</td>
                <td>45 BYN</td>
                <td>Криминалистика</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Основы работы Школы сахарного диабета</td>
                <td>130 BYN</td>
                <td>Эндокринология</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Адвокатура как орган защиты гражданских прав</td>
                <td>60 BYN</td>
                <td>Гражданское право</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default OnlineTest;
