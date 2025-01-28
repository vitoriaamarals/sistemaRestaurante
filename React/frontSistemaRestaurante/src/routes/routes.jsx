import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cardapio, Estoque, MinhaContaDados, MinhaConta, LoginCliente, MainScreen} from "../screens/pages";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;