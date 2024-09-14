import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const { dentists } = useContextGlobal();

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
