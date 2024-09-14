import React, { useState } from "react";
import { Link } from "react-router-dom";
import doctorImg from "../assets/img/doctor.jpg";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const [flag, setFlag] = useState(true);
  const { dispatch } = useContextGlobal();
  const addFav = () => {
    dispatch({ type: "ADD_FAVS", playload: { name, username, id } });
  };
  const rmFav = () => {
    dispatch({ type: "DELETE_FAVS", playload: id });
  };

  const addRemoveFav = () => {
    setFlag(!flag);
    console.log(flag);
    flag ? addFav() : rmFav();
  };

  return (
    <div className="card">
      <img src={doctorImg} alt="foto doctor" width="200px" />
      <Link to={"/detail/" + id}>
        <h3>{name}</h3>
      </Link>
      <p>{username}</p>

      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </div>
  );
};

export default Card;
