import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginCliente, MainScreen} from "../screens/pages";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<MainScreen />} />
          <Route path="/MinhaConta" element={<LoginCliente />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;