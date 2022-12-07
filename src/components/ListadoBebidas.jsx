import { Row } from "react-bootstrap";
import Bebida from "./Bebida";
import useBebidas from "../hooks/useBebidas";

const ListadoBebidas = () => {
  const { bebidas } = useBebidas();

  return (
    <Row className="mt-5">
      {bebidas.map((bebida) => (
        <Bebida key={bebida.idDrink} bebida={bebida} />
      ))}
    </Row>
  );
};

export default ListadoBebidas;
