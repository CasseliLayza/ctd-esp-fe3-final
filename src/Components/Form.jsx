import React from "react";
import GnsysStyles from "../styles/StylesGn.module.css";
import CardSuccess from "./CardSuccess.jsx";
import Error from "./Error.jsx";
import expresiones from "../utility/expressions.js";
import { useContextGlobal } from "./utils/global.context.jsx";

const Form = () => {
  const { show, error, customer, setShow, setError, setCstuomer } =
    useContextGlobal();

  const handleNameComplete = (e) => {
    setCstuomer({ ...customer, nameComplete: e.target.value });
  };

  const handleEmail = (e) => {
    setCstuomer({ ...customer, email: e.target.value });
  };

  const handlePhoneNumber = (e) => {
    setCstuomer({ ...customer, phoneNumber: e.target.value });
  };

  const resetForm = () => {
    setCstuomer({
      nameComplete: "",
      email: "",
      phoneNumber: 0,
    });
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      customer.nameComplete.trim().length > 5 &&
      customer.nameComplete[0] !== " " &&
      expresiones.name.test(customer.nameComplete) &&
      expresiones.email.test(customer.email) &&
      expresiones.telephon.test(customer.phoneNumber)
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {show ? (
        <CardSuccess />
      ) : (
        <>
          <form onSubmit={handleSubmit} className={GnsysStyles.form}>
            <label>Nombre Completo:</label>
            <input
              type="text"
              placeholder="Ingrese su nombre"
              value={customer.nameComplete}
              onChange={handleNameComplete}
            />

            <label>Correo Electronico:</label>
            <input
              type="email"
              placeholder="Ingrese su correo"
              value={customer.email}
              onChange={handleEmail}
            />

            <label>Ingrese su telefono:</label>
            <input
              type="tel"
              placeholder="Ingrese su telefono"
              value={customer.phoneNumber}
              onChange={handlePhoneNumber}
            />

            <button className={GnsysStyles.buttonsForm}>Enviar</button>
          </form>

          <button className={GnsysStyles.buttonsFormClear} onClick={resetForm}>
            Clear Form
          </button>
        </>
      )}

      {error ? <Error /> : null}
    </>
  );
};

export default Form;
