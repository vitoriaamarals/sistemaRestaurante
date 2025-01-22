import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainScreen } from "../screens/pages";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<MainScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;