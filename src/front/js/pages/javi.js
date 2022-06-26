import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Javier = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.changeName(params.id, params.name);
  }, []);

  return (
    <div>
      <h1>
        EL JAVI XD {params.id} {params.name}
      </h1>
      {store.teamColombia.map((item, index) => (
        <h3 key={index}>{item.name}</h3>
      ))}
    </div>
  );
};

export default Javier;
