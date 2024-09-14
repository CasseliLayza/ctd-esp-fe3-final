import { useContextGlobal } from "./utils/global.context";

function InputData() {
  const { customerData } = useContextGlobal();
  console.log(customerData);

  return (
    <>
      {customerData.map((obj, idx) => {
        let k = Object.keys(obj)[0];
        return (
          <h3 key={idx}>
            {k == "nameComplete"
              ? `Nombre completo: ${obj.nameComplete}`
              : k == "email"
              ? `Correo electronico: ${obj.email}`
              : k == "phoneNumber"
              ? `Telefono: ${obj.phoneNumber}`
              : ""}
          </h3>
        );
      })}
    </>
  );
}

export default InputData;
