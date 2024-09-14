import React from "react";
import dhImg from "../assets/img/DH.png";
import { images } from "../assets/img/imagenes.js";
import Style from "../styles/StylesGn.module.css";
import { useContextGlobal } from "./utils/global.context.jsx";

const Footer = () => {
  const { theme } = useContextGlobal();
  return (
    <footer className={theme ? "" : Style.footerDark}>
      <p className={theme ? Style.footerCredit : Style.footerCreditDark}>
        Powered by the best team ❤
      </p>
      <img
        className={theme ? Style.dhLogo : Style.dhLogoDark}
        src={dhImg}
        alt="DH-logo"
      />
      <div className={Style.imgsContainer}>
        {images.map((ico, i) => (
          <img
            key={i}
            className={theme ? Style.contactMedia : Style.contactMediaDark}
            src={ico.image}
            alt={`${ico.description}-logo}`}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
