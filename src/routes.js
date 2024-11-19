import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Components/Menu";
import Footer from "Components/Footer";
import DefaultPage from "Components/DefaultPage";
import Post from "Pages/Post";
import NotFound from "Pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        
        <Route path="/" element={<DefaultPage/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
        </Route>

        <Route path="posts/:id" element={<Post/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
