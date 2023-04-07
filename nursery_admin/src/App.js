import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Router } from "react-router-dom";
import Product_list from "./component/pages/product_list";
import Header from "./component/common/header";
import Sidebar from "./component/common/sidebar";
import Product_add from "./component/pages/product_add";

function App() {
  return (
    <div className="container-fluid p-0">
      <Router>
        <div className="row m-0 page_main_row">
          <Header />
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
      </Router>
    </div>
  );
}

export default App;
