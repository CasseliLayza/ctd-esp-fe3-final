import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContextGlobal();
  console.log(state);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
