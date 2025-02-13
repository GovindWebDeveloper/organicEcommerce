import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../src/Layout/Main/MainLayout"
import Home from "./Pages/HomePage/Home";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ProductDetails from "../src/Pages/HomePage/Sections/ProductDetails"; // Example Product Details Page
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import ProductCart from "./Pages/Cart/ProductCart";
// import NotFound from "./Pages/NotFound/NotFound"; // 404 Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="ProductCart" element={<ProductCart />} />


          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
