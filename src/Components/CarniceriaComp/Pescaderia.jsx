import React from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Carmoceroa.css";
import { jsonCafe } from "../json.jsx";
import { Nav } from "../Nav/Nav.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";
import bebidas from "../assets/bebidas.webp";
import pepsi from "../assets/papsi.jpg"

export const Pescaderia = (id) => {



  const mesa = id.match.url.slice(1,3)


  
  const sAlcohol = jsonCafe.filter((e) => e.section === "PESCADERIA");
  const cerveza = jsonCafe.filter((e) => e.section === "CERVEZA");
  const cocteleriaC = jsonCafe.filter((e) => e.section === "COCTELERIA CLASSICA");
  const cocteleriaE = jsonCafe.filter((e) => e.section === "COCTELERIA ESPECIAL");
  const VINOS = jsonCafe.filter((e) => e.section === "VINOS & CHAMPAGNE");
  

  return (
    <div className="containerL">
    <Nav id={mesa} />
    <div className="sectioner">
      <a href="#1">PESCADERIA</a>

    </div>
    <div className="conteinerLC">
      <div className="conteinerLB2 animate__animated  animate__zoomIn animate__faster">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/pescado-1585563959.jpg?resize=2048:*"
          alt="promo"
          id="1"
          width="100%"
        />
        <Cards products={sAlcohol} />
     
      </div>
    </div>
<VerPedido id={mesa} />
  </div>
  );
};
