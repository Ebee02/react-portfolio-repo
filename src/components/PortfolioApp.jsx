import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import "./style.css";

function PortfolioApp() {
  return (
    <div className="antialiased">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default PortfolioApp;
