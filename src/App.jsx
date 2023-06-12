import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Exchanges from "./components/Exchanges";
import Coins from "./components/Coins";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CoinsDetail from "./components/CoinsDetail";

import "./components/Header.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/coin/:id" element={<CoinsDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
