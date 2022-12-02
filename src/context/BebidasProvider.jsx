import axios from "axios";
import { createContext, useEffect, useState } from "react";

//Context
const BebidasContext = createContext();

//Provider
const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);

  const consultarBebida = async (datos) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;

      const { data } = await axios(url);
      setBebidas(data.drinks);
      //console.log(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BebidasContext.Provider value={{ consultarBebida, bebidas }}>
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };

export default BebidasContext;
