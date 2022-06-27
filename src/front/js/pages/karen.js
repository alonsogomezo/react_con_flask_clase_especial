import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Karen = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    const res = actions.getPeople(params.id);
    console.log(res);
  }, []);
  return (
    <div>
      {store.personaje && (
        <div>
          <h1>{store.personaje.properties.name}</h1>
        </div>
      )}
    </div>
  );
};

export default Karen;
