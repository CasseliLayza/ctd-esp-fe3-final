import React from "react";
import Form from "../Components/Form";
import GnsysStyles from "../styles/StylesGn.module.css";
import { useContextGlobal } from "../Components/utils/global.context";

const Contact = () => {
  const { theme } = useContextGlobal();
  return (
    <>
      <div
        className={
          theme
            ? GnsysStyles.contactContainer
            : GnsysStyles.contactContainerDark
        }
      >
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you!!</p>
      </div>
      <Form />
    </>
  );
};

export default Contact;
