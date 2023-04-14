import React from "react";

const wallet = () => {
  return (
    <div>
      <section
        className="inner-section single-banner"
        //   style="background: url(images/single-banner.jpg) n<imgo-repeat center"
      >
        <div className="container">
          <h2>my wallet</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              wallet
            </li>
          </ol>
        </div>
      </section>
      <section className="inner-section wallet-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="account-card">
                <h3 className="account-title">My Wallet</h3>
                <div className="my-wallet">
                  <p>current balance</p>
                  <h3>$575.00</h3>
                </div>
                <div className="wallet-card-group">
                  <div className="wallet-card">
                    <p>total credit</p>
                    <h3>$2347.76</h3>
                  </div>
                  <div className="wallet-card">
                    <p>total debit</p>
                    <h3>$2174.89</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="account-card">
                <h3 className="account-title">Add Wallet</h3>
                <form className="wallet-form">
                  <input type="text" placeholder="$00.00" />
                  <div className="wallet-suggest">
                    <h6>suggested:</h6>
                    <ul>
                      <li>
                        <a href="#">$50</a>
                      </li>
                      <li>
                        <a href="#">$100</a>
                      </li>
                      <li>
                        <a href="#">$300</a>
                      </li>
                      <li>
                        <a href="#">$500</a>
                      </li>
                      <li>
                        <a href="#">$800</a>
                      </li>
                      <li>
                        <a href="#">$1000</a>
                      </li>
                      <li>
                        <a href="#">$3000</a>
                      </li>
                      <li>
                        <a href="#">$5000</a>
                      </li>
                    </ul>
                  </div>
                  <button type="submit">add to wallet</button>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="account-card">
                <h3 className="account-title">Wallet Transaction</h3>
                <div className="top-filter">
                  <div className="filter-show">
                    <label className="filter-label">Show :</label>
                    <select className="form-select filter-select">
                      <option value="1">12</option>
                      <option value="2">24</option>
                      <option value="3">36</option>
                    </select>
                  </div>
                  <div className="filter-short">
                    <label className="filter-label">Short by :</label>
                    <select className="form-select filter-select">
                      <option selected>default</option>
                      <option value="1">paid</option>
                      <option value="2">due</option>
                      <option value="3">cancel</option>
                      <option value="4">return</option>
                    </select>
                  </div>
                </div>
                <div className="table-scroll">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th scope="col">SL.</th>
                        <th scope="col">transaction date</th>
                        <th scope="col">payment method</th>
                        <th scope="col">document type</th>
                        <th scope="col">recieved amount</th>
                        <th scope="col">order amount</th>
                        <th scope="col">status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>02 February 2021</td>
                        <td>Order Altered</td>
                        <td>
                          Order <a href="#">(26881)</a>
                        </td>
                        <td>$345.89</td>
                        <td>$345.89</td>
                        <td className="fw-bold text-success">paid</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>02 march 2021</td>
                        <td>Order Altered</td>
                        <td>
                          Order <a href="#">(26881)</a>
                        </td>
                        <td>$345.89</td>
                        <td>$345.89</td>
                        <td className="fw-bold text-warning">due</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>02 april 2021</td>
                        <td>Order Altered</td>
                        <td>
                          Order <a href="#">(26881)</a>
                        </td>
                        <td>$345.89</td>
                        <td>$345.89</td>
                        <td className="fw-bold text-danger">cancel</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>02 may 2021</td>
                        <td>Order Altered</td>
                        <td>
                          Order <a href="#">(26881)</a>
                        </td>
                        <td>$345.89</td>
                        <td>$345.89</td>
                        <td className="fw-bold text-dark">return</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>02 june 2021</td>
                        <td>Order Altered</td>
                        <td>
                          Order <a href="#">(26881)</a>
                        </td>
                        <td>$345.89</td>
                        <td>$345.89</td>
                        <td className="fw-bold text-info">process</td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>02 February 2021</td>
                        <td>Order Altered</td>
                        <td>
                          Order <a href="#">(26881)</a>
                        </td>
                        <td>$345.89</td>
                        <td>$345.89</td>
                        <td className="fw-bold text-success">paid</td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>02 march 2021</td>
                        <td>Order Altered</td>
                        <td>
                          Order <a href="#">(26881)</a>
                        </td>
                        <td>$345.89</td>
                        <td>$345.89</td>
                        <td className="fw-bold text-warning">due</td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td>02 april 2021</td>
                        <td>Order Altered</td>
                        <td>
                          Order <a href="#">(26881)</a>
                        </td>
                        <td>$345.89</td>
                        <td>$345.89</td>
                        <td className="fw-bold text-danger">cancel</td>
                      </tr>
                      <tr>
                        <th scope="row">9</th>
                        <td>02 may 2021</td>
                        <td>Order Altered</td>
                        <td>
                          Order <a href="#">(26881)</a>
                        </td>
                        <td>$345.89</td>
                        <td>$345.89</td>
                        <td className="fw-bold text-dark">return</td>
                      </tr>
                      <tr>
                        <th scope="row">10</th>
                        <td>02 june 2021</td>
                        <td>Order Altered</td>
                        <td>
                          Order <a href="#">(26881)</a>
                        </td>
                        <td>$345.89</td>
                        <td>$345.89</td>
                        <td className="fw-bold text-info">process</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bottom-paginate">
                  <p className="page-info">Showing 12 of 60 Results</p>
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fas fa-long-arrow-alt-left"></i>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link active" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">...</li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        60
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default wallet;
