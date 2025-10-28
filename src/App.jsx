import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const hideNavbar = ["/login", "/signup"];
  const showNavbar = !hideNavbar.includes(location.pathname);
  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/shop' element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      {showNavbar && <Footer />}
    </>
  );
}

export default App;
