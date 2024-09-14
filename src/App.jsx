import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { useContextGlobal } from "./Components/utils/global.context";

function App() {
  const {theme} =useContextGlobal()
  // let theme= false
  return (
    <div className={`${theme ? "App" : "dark"}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<h1>Error 404 - Page not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
