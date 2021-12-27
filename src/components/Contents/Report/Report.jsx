import React from "react";
import { YMaps, Map, Placemark, FullscreenControl } from "react-yandex-maps";

const sizeMap = {
  width: "90%",
  height: "78vh",
  margin: "auto",
};
function Report() {
  return (
    <div className="map-cont">
      <YMaps>
        <div className="title-map">
          <p>Наш адрес: г.Могилев, Карла Маркса 33</p>
          <p>Справки по телефону: +375(29) 614-09-75</p>
        </div>
        <Map
          style={sizeMap}
          defaultState={{ center: [53.8985, 30.3247], zoom: 14, controls: [] }}
        >
          <Placemark geometry={[53.90204, 30.345683]} />
          <FullscreenControl />
        </Map>
      </YMaps>
    </div>
  );
}

export default Report;
