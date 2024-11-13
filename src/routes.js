import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Components/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
