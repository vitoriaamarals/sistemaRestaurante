import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cardapio_ADM, Cardapio, Estoque, MinhaContaDados, MinhaConta, LoginCliente, MainScreen } from "../screens/pages";
import { EditarCarnes, EditarAcomp, EditarSaladas } from "../screens/pages";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<MainScreen />} />
          <Route path="/Login" element={<LoginCliente />} />
          <Route path="/MinhaConta" element={<MinhaConta />} />
          <Route path="/MinhaConta-Dados" element={<MinhaContaDados />} />
          <Route path="/Estoque" element={<Estoque />} />
          <Route path="/Cardapio" element={<Cardapio />} />
          <Route path="/Cardapio_ADM" element={<Cardapio_ADM />} />
          <Route path="/editar-carnes" element={<EditarCarnes />} />
          <Route path="/editar-acompanhamentos" element={<EditarAcomp />} />
          <Route path="/editar-saladas" element={<EditarSaladas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;