import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css-js/css/main.css";
import "../css-js/css/home-standard.css";
import "../css-js/css/home-standard.css";
import "../css-js/fonts/flaticon/flaticon.css";
import Logo from "../css-js/images/logo.png";

const header = () => {
  return (
    <div className="header">
      <header className="header-part">
        <div className="container">
          <div className="header-content">
            <div className="header-media-group">
              <button className="header-user">
                <img src="images/user.png" alt="user" />
              </button>
              <a href="index.html">
                <img src="images/logo.png" alt="logo" />
              </a>
              <button className="header-src">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <a href="index.html" className="header-logo">
              <img src={Logo} alt="logo" />
            </a>
            <a href="login.html" className="header-widget" title="My Account">
              <img src="images/user.png" alt="user" />
              <span>join</span>
            </a>
            <form className="header-form">
              <input type="text" placeholder="Search anything..." />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>
            <div className="header-widget-group">
              <a
                href="compare.html"
                className="header-widget"
                title="Compare List"
              >
                <i className="fas fa-random"></i>
                <sup>0</sup>
              </a>
              <a
                href="wishlist.html"
                className="header-widget"
                title="Wishlist"
              >
                <i className="fas fa-heart"></i>
                <sup>0</sup>
              </a>
              <button className="header-widget header-cart" title="Cartlist">
                <i className="fas fa-shopping-basket"></i>
                <sup>9+</sup>
                <span>
                  total price<small>$345.00</small>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="row">
        <div className="col-lg-3">
          <div className="banner-category">
            <ul className="banner-category-list vh-100 pt-4">
              <li className="banner-category-item">
                <a href="#">
                  <i className="flaticon-vegetable"></i>
                  <span>vegetables</span>
                </a>
                <div className="banner-category-dropdown">
                  <h5>vegetables item</h5>
                  <div className="banner-sub-category">
                    <ul>
                      <li>
                        <a href="#">carrot</a>
                      </li>
                      <li>
                        <a href="#">broccoli</a>
                      </li>
                      <li>
                        <a href="#">asparagus</a>
                      </li>
                      <li>
                        <a href="#">cauliflower</a>
                      </li>
                      <li>
                        <a href="#">cucumber</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">eggplant</a>
                      </li>
                      <li>
                        <a href="#">green pepper</a>
                      </li>
                      <li>
                        <a href="#">lettuce</a>
                      </li>
                      <li>
                        <a href="#">mushrooms</a>
                      </li>
                      <li>
                        <a href="#">onion</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">potato</a>
                      </li>
                      <li>
                        <a href="#">pumpkin</a>
                      </li>
                      <li>
                        <a href="#">tomato</a>
                      </li>
                      <li>
                        <a href="#">beetroot</a>
                      </li>
                      <li>
                        <a href="#">zucchini</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">radish</a>
                      </li>
                      <li>
                        <a href="#">artichoke</a>
                      </li>
                      <li>
                        <a href="#">cabbage</a>
                      </li>
                      <li>
                        <a href="#">celery</a>
                      </li>
                      <li>
                        <a href="#">parsley</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="banner-category-item">
                <a href="#">
                  <i className="flaticon-groceries"></i>
                  <span>groceries</span>
                </a>
                <div className="banner-category-dropdown">
                  <h5>groceries item</h5>
                  <div className="banner-sub-category">
                    <ul>
                      <li>
                        <a href="#">Butter</a>
                      </li>
                      <li>
                        <a href="#">Rice</a>
                      </li>
                      <li>
                        <a href="#">Bread</a>
                      </li>
                      <li>
                        <a href="#">Pasta</a>
                      </li>
                      <li>
                        <a href="#">Cooking oil</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">Cheese</a>
                      </li>
                      <li>
                        <a href="#">Yogurt</a>
                      </li>
                      <li>
                        <a href="#">Onions</a>
                      </li>
                      <li>
                        <a href="#">Garlic</a>
                      </li>
                      <li>
                        <a href="#">Pulses</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">Soup</a>
                      </li>
                      <li>
                        <a href="#">Salt</a>
                      </li>
                      <li>
                        <a href="#">Pepper</a>
                      </li>
                      <li>
                        <a href="#">Herbs</a>
                      </li>
                      <li>
                        <a href="#">Sugar</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="banner-category-item">
                <a href="#">
                  <i className="flaticon-fruit"></i>
                  <span>fruits</span>
                </a>
                <div className="banner-category-dropdown">
                  <h5>fruits item</h5>
                  <div className="banner-sub-category">
                    <ul>
                      <li>
                        <a href="#">Apple</a>
                      </li>
                      <li>
                        <a href="#">Orange</a>
                      </li>
                      <li>
                        <a href="#">Watermelon</a>
                      </li>
                      <li>
                        <a href="#">Pear</a>
                      </li>
                      <li>
                        <a href="#">Cherry</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">Strawberry</a>
                      </li>
                      <li>
                        <a href="#">Nectarine</a>
                      </li>
                      <li>
                        <a href="#">Grape</a>
                      </li>
                      <li>
                        <a href="#">Mango</a>
                      </li>
                      <li>
                        <a href="#">Blueberry</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="banner-category-item">
                <a href="#">
                  <i className="flaticon-dairy-products"></i>
                  <span>dairy farms</span>
                </a>
                <div className="banner-category-dropdown">
                  <h5>dairy items</h5>
                  <div className="banner-sub-category">
                    <ul>
                      <li>
                        <a href="#">Eggs</a>
                      </li>
                      <li>
                        <a href="#">milk</a>
                      </li>
                      <li>
                        <a href="#">Cheese</a>
                      </li>
                      <li>
                        <a href="#">Butter</a>
                      </li>
                      <li>
                        <a href="#">Shore</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="banner-category-item">
                <a href="#">
                  <i className="flaticon-crab"></i>
                  <span>sea foods</span>
                </a>
                <div className="banner-category-dropdown">
                  <h5>sea food items</h5>
                  <div className="banner-sub-category">
                    <ul>
                      <li>
                        <a href="#">Lobster</a>
                      </li>
                      <li>
                        <a href="#">Octopus</a>
                      </li>
                      <li>
                        <a href="#">Shrimp</a>
                      </li>
                      <li>
                        <a href="#">Oyster</a>
                      </li>
                      <li>
                        <a href="#">Squid</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="banner-category-item">
                <a href="#">
                  <i className="flaticon-salad"></i>
                  <span>diet foods</span>
                </a>
                <div className="banner-category-dropdown">
                  <h5>diet food items</h5>
                  <div className="banner-sub-category">
                    <ul>
                      <li>
                        <a href="#">Peanuts</a>
                      </li>
                      <li>
                        <a href="#">Yogurt</a>
                      </li>
                      <li>
                        <a href="#">vinegar</a>
                      </li>
                      <li>
                        <a href="#">seeds</a>
                      </li>
                      <li>
                        <a href="#">Coconuts</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="banner-category-item">
                <a href="#">
                  <i className="flaticon-dried-fruit"></i>
                  <span>dry foods</span>
                </a>
                <div className="banner-category-dropdown">
                  <h5>dry food items</h5>
                  <div className="banner-sub-category">
                    <ul>
                      <li>
                        <a href="#">Almond</a>
                      </li>
                      <li>
                        <a href="#">Peanut</a>
                      </li>
                      <li>
                        <a href="#">Raisin</a>
                      </li>
                      <li>
                        <a href="#">Walnut</a>
                      </li>
                      <li>
                        <a href="#">Pistachio</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="banner-category-item">
                <a href="#">
                  <i className="flaticon-fast-food"></i>
                  <span>fast foods</span>
                </a>
                <div className="banner-category-dropdown">
                  <h5>fast food items</h5>
                  <div className="banner-sub-category">
                    <ul>
                      <li>
                        <a href="#">burgar</a>
                      </li>
                      <li>
                        <a href="#">pizza</a>
                      </li>
                      <li>
                        <a href="#">Fries</a>
                      </li>
                      <li>
                        <a href="#">chiken</a>
                      </li>
                      <li>
                        <a href="#">dessert</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="banner-category-item">
                <a href="#">
                  <i className="flaticon-cheers"></i>
                  <span>drinks</span>
                </a>
                <div className="banner-category-dropdown">
                  <h5>drinks item</h5>
                  <div className="banner-sub-category">
                    <ul>
                      <li>
                        <a href="#">Wine</a>
                      </li>
                      <li>
                        <a href="#">Coffee</a>
                      </li>
                      <li>
                        <a href="#">Lemonade</a>
                      </li>
                      <li>
                        <a href="#">chocolate</a>
                      </li>
                      <li>
                        <a href="#">Milkshake</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="banner-category-item">
                <a href="#">
                  <i className="flaticon-barbecue"></i>
                  <span>meats</span>
                </a>
                <div className="banner-category-dropdown">
                  <h5>meats item</h5>
                  <div className="banner-sub-category">
                    <ul>
                      <li>
                        <a href="#">Pork</a>
                      </li>
                      <li>
                        <a href="#">Beef</a>
                      </li>
                      <li>
                        <a href="#">Mutton</a>
                      </li>
                      <li>
                        <a href="#">Chicken</a>
                      </li>
                      <li>
                        <a href="#">Turkey</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="banner-category-item">
                <a href="#">
                  <i className="flaticon-fish"></i>
                  <span>fishes</span>
                </a>
                <div className="banner-category-dropdown">
                  <h5>fishes item</h5>
                  <div className="banner-sub-category">
                    <ul>
                      <li>
                        <a href="#">Blue Marlin</a>
                      </li>
                      <li>
                        <a href="#">Flounder</a>
                      </li>
                      <li>
                        <a href="#">Hogfish</a>
                      </li>
                      <li>
                        <a href="#">Mako Shark</a>
                      </li>
                      <li>
                        <a href="#">pompano</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="main_page pt-4">
            <h4>Product List</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
