import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/shop/contact";
import { Cart } from "./pages/cart/cart";
import SignIn from "./pages/singin/Singin";
import { ShopContextProvider } from "./context/shop-context";
import { Favorite } from "./pages/shop/Favorite";
import Login from "./pages/Login/login";
import Singin from "./pages/singin/Singin";
import { FavoriteProvider } from "./context/favorite-context";
import Home from "./pages/Home";
import ProduitDetaile from "./pages/produitDetaile";
import { PRODUCTS } from "./products1";

function App() {
  return (
    <FavoriteProvider>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singin" element={<Singin />} />
            <Route path="/product/:id" element={<ProduitDetaile products={PRODUCTS} />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </FavoriteProvider>
  );
}

export default App;
