import React from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Carmoceroa.css";
import { jsonCafe } from "../json.jsx";
import { Nav } from "../Nav/Nav.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";
import bebidas from "../assets/bebidas.webp";
import pepsi from "../assets/papsi.jpg"

export const Pastas = (id) => {



  const mesa = id.match.url.slice(1,3)


  
  const sAlcohol = jsonCafe.filter((e) => e.section === "PASTAS FRESCAS");
  const cerveza = jsonCafe.filter((e) => e.section === "PASTAS ITALIANAS");
  const cocteleriaC = jsonCafe.filter((e) => e.section === "PASTAS TRADICIONALES");

  

  return (
    <div className="containerL">
    <Nav id={mesa} />
    <div className="sectioner">
    <a href="#3">Pastas Tradicionales</a>
    <a href="#2">Pastas Italianas</a>
      <a href="#1">Pastas Frescas</a>

    </div>
    <div className="conteinerLC">
      <div className="conteinerLB2 animate__animated  animate__zoomIn animate__faster">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTDEO7ZM8HsJwKzp0TUOJWNTrkS91BQ3-8BQ&usqp=CAU"
          alt="promo"
          id="1"
          width="100%"
        />
        <Cards products={sAlcohol} />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6fkBGb2Vf5daDuK6qnNLqVPSEoGa9CGKAsQ&usqp=CAU"
          alt="promo"
          id="2"
          width="100%"
        />
        <Cards products={cerveza} />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bj2PCYupU9WqAC_LfUHBVQHkr7q8PbM8rg&usqp=CAU"
          alt="promo"
          id="3"
          width="100%"
        />
        <Cards products={cocteleriaC} />
    
      </div>
    </div>
<VerPedido id={mesa} />
  </div>
  );
};
