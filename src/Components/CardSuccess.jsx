import StylesGn from "../styles/StylesGn.module.css";
import InputData from "./InputData";
import { useContextGlobal } from "./utils/global.context";

function Card() {
  const { customerData, theme } = useContextGlobal();
  return (
    <>
      <div className={StylesGn.mensajeConfirmacion}>
        <h2>
          Muchas Gracias! por contactarnos {customerData[0].nameComplete} a
          continuacion los datos ingresados, nos pondremos en contacto cuanto
          antes vía telefonica o mail, revisá tu casilla.!
        </h2>
      </div>
      <div className={StylesGn.datosIngresados}>
        <InputData />
      </div>
    </>
  );
}

export default Card;
