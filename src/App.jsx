import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Servicos from "./components/Servivos";
import MenuPizzaria from "./components/MenuPizzaria";
import Pizza from "./pages/Pizza";
import Pizza1 from "./pages/Pizza1";
import Pizza2 from "./pages/Pizza2";
import Pizza3 from "./pages/Pizza3";
import Pizza4 from "./pages/Pizza4";
import Pizza5 from "./pages/Pizza5";
import Pizza6 from "./pages/Pizza6";
import Finalizar from "./pages/Finalizar";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/MenuPizzaria" element={<MenuPizzaria />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/pizza1" element={<Pizza1 />} />
          <Route path="/pizza2" element={<Pizza2 />} />
          <Route path="/pizza3" element={<Pizza3 />} />
          <Route path="/pizza4" element={<Pizza4 />} />
          <Route path="/pizza5" element={<Pizza5 />} />
          <Route path="/pizza6" element={<Pizza6 />} />
          <Route path="/final" element={<Finalizar/>} />
      
        {/** 
          <Route path="/contact" element={<ContactPage />} />*/} 
        </Routes>  
      </BrowserRouter>

     

     
    </>
  );
}

export default App;
