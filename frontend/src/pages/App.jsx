import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookService from "./BookService";
import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./AboutUs";
import Services from "./Services";
import SignUp from "./SignUp";
import Cart from "./Cart";
import TrackOrder from "./TrackOrder";
import Account from "./Account";
import Login from "./Login";
import Payment from "./Payment";
import QualityCleaning from "./QualityCleaning";
import FastDelivery from "./FastDelivery"; // Import FastDelivery


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/book-service" element={<BookService />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/quality-cleaning" element={<QualityCleaning />} />
        
        {/* Add the route for Fast Delivery */}
        <Route path="/fast-delivery" element={<FastDelivery />} />
      </Routes>
    </Router>
  );
}

export default App;
