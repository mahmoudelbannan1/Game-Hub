import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Games from "./pages/Games";
import AboutUs from "./pages/AboutUs";
import GameDetails from "./pages/GameDetails";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/game-details/:id" element={<GameDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// Component function name => Start capital letter
// Return => one element => one wrapper ( div , span , ... ) or <></>
