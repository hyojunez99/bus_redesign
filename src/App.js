import "./assets/scss/global.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage";
import SchedulePage from "./pages/SchedulePage";

function App() {
  return (
    <BrowserRouter basename="/bus_redesign">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
