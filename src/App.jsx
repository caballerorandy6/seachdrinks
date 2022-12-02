import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import ListadoBebidas from "./components/ListadoBebidas";
import { CategoriasProvider } from "./context/CategoriasProvider";
import { BebidasProvider } from "./context/BebidasProvider";
import axios from "axios";

function App() {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Search Drinks</h1>
        </header>

        <Container className="mt-5">
          <Formulario />
          <ListadoBebidas />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  );
}

export default App;
