import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <AllRoutes />

      <Footer />
    </div>
  );
}

export default App;
