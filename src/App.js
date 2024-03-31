import style from "./Style/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Slider from "./components/Slider";
import "../node_modules/alk-sanet/css/alk-sanet.min.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Slider />} />
   
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
