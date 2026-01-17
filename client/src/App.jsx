// frontend/src/App.jsx

import "./App.css";
import Navbar from "./layout/navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./layout/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
