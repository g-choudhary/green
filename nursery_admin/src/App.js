import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Router } from "react-router-dom";
import Product_list from "./component/admin/product_list";
import Header from "./component/common/header";
import Sidebar from "./component/common/sidebar";
import Product_add from "./component/admin/product_add";
import Index from "./component/user";
import Checkout from "./component/user/chackout";
import Nav from "./component/common/nav";
import Product_detail from "./component/user/product_detail";
import Profile from "./component/admin/profile";
import Wishlist from "./component/user/wishlist";
import Shop from "./component/user/shop";
import Footer from "./component/common/footer";
import Login from "./component/user/login";
import Register from "./component/user/register";
import Reset_password from "./component/user/reset_password";
import Change_password from "./component/user/change_password";
import Order_list from "./component/user/order_list";
import Wallet from "./component/user/wallet";

function App() {
  let path = window.location.pathname;
  console.log("path  " + path);
  return (
    <div className="container-fluid p-0">
      <Router>
        <Routes>
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/reset_password" element={<Reset_password />} />
          <Route path="/user/change_password" element={<Change_password />} />
        </Routes>

        <Header />
        {path === "/user" ? (
          <div className="row">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9">
              <div className="main_content_div">
                <Routes>
                  <Route path="/" element={<Product_list />} />
                  <Route path="/Product_add" element={<Product_add />} />
                </Routes>
              </div>
            </div>
          </div>
        ) : (
          <div className="userpage">
            <Nav></Nav>
            <div className="col-lg-12">
              <div className="main_content_div">
                <Routes>
                  <Route path="/user/index" element={<Index />} />
                  <Route path="/user/checkout" element={<Checkout />} />
                  <Route path="/user/profile" element={<Profile />} />
                  <Route path="/user/wishlist" element={<Wishlist />} />
                  <Route path="/user/shop" element={<Shop />} />
                  <Route path="/user/order_list" element={<Order_list />} />
                  <Route path="/user/wallet" element={<Wallet />} />
                  <Route
                    path="/user/product_detail"
                    element={<Product_detail />}
                  />
                </Routes>
              </div>
            </div>
            <Footer />
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
