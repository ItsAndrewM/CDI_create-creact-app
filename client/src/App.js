import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import MeetTheTeam from "./components/MeetTheTeam";
import Contact from "./components/Contact";
import ProductInfo from "./components/ProductInfo";
import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Post from "./components/Post";
import Order from "./components/Order";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import Payment from "./components/Payment";
import PageNotFound from "./components/PageNotFound";
import BoatFinder from "./components/BoatFinder";
import DesignedForSailors from "./pages/DesignedForSailors";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/s" element={<Products />} />
        <Route path="/products/product-category/" element={<Products />} />
        <Route
          path="/products/product-category/:category"
          element={<Products />}
        />
        <Route
          path="/products/product-category/:category/:subCategory"
          element={<Products />}
        />
        <Route
          path="/products/:category/:subCategory/:product"
          element={<Product />}
        />
        <Route path="/products/:category/:product" element={<Product />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/product-information" element={<ProductInfo />} />
        <Route
          path="/product-information/:category"
          element={<ProductInfo />}
        />
        <Route path="/product-information/:category/:post" element={<Post />} />
        <Route
          path="/product-information/:category/:subCategory/:post"
          element={<Post />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/checkout/payment" element={<Payment />} />
        <Route path="/designed-for-sailors" element={<DesignedForSailors />} />
        <Route path="/thispageisandrews" element={<BoatFinder />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
