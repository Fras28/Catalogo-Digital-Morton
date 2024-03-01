import React from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Carmoceroa.css";
import { jsonCafe } from "../json.jsx";
import { Nav } from "../Nav/Nav.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";
import bebidas from "../assets/bebidas.webp";
import pepsi from "../assets/papsi.jpg"

export const Cerdo = (id) => {



  const mesa = id.match.url.slice(1,3)


  
  const sAlcohol = jsonCafe.filter((e) => e.section === "CARNE DE CERDO");


  return (
    <div className="containerL">
    <Nav id={mesa} />
    <div className="sectioner">
    
      <a href="#1">CARNE DE CERDO</a>

    </div>
    <div className="conteinerLC">
      <div className="conteinerLB2 animate__animated  animate__zoomIn animate__faster">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksvqUT2HhkcI2M_hL1IDXU4ZzbHihYn5w1BKXB9PDYQag_xGXAW6Z6Xp9U1l5m8FQ840&usqp=CAU"
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
