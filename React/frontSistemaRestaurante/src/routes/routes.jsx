import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MinhaConta, LoginCliente, MainScreen} from "../screens/pages";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<MainScreen />} />
          <Route path="/Login" element={<LoginCliente />} />
          <Route path="/MinhaConta" element={<MinhaConta />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;