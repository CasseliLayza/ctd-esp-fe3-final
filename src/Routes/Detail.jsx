import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import doctorImg from "../assets/img/doctor.jpg";
import Style from "../styles/StylesGn.module.css";

const Detail = () => {
  const [dentist, setDentist] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  let url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  console.log(params);

  const getDentist = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setDentist(data);
      setTimeout(() => {
        setLoading(false);
      }, 250);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDentist();
  }, []);

  return (
    <>
      <h1>Detail Dentist id </h1>
      {!loading ? (
        <div className={Style.justCard}>
          <h2>{`Dentist con id...${params.id}`}</h2>
          <div className="card">
            <img src={doctorImg} alt="foto doctor" width="200px" />
            <h3>{dentist.name}</h3>
            <p>{dentist.username}</p>
            <p>{dentist.email}</p>
            <p>{dentist.phone}</p>
            <h5>{dentist.website} </h5>
          </div>
          <Link to="/">
            <button>Go back</button>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default Detail;
