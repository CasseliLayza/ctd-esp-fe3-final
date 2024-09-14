import React from "react";
import Style from "../styles/StylesGn.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const navigate = useNavigate();

  const { theme, handleTheme } = useContextGlobal();
  return (
    <nav className={theme ? "" : Style.navDark}>
      <button onClick={() => navigate(-1)}>Atras 🔙</button>
      <Link to="/">
        <h4>Home 🏠</h4>
      </Link>
      <Link to="/contact">
        <h4>Contact 👨‍⚕️</h4>
      </Link>
      <Link to="/favs">
        <h4>Favs 🌟</h4>
      </Link>

      <button onClick={handleTheme}>
        Change theme {`${theme ? "🌙" : "🌞"}`}
      </button>
    </nav>
  );
};

export default Navbar;
