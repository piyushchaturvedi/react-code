import Link from "next/link";
import Layout from "../components/MyLayout";
import HeaderSecond from "../components/HeaderSecond";

const Index = props => (
  <Layout>
    <div className="c-wrapper c-fixed-components">
  <HeaderSecond/>
  <div className="c-body">
    <main className="c-main">
      <div className="container-fluid">
        <div className="fade-in">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="card text-white bg-gradient-primary">
                <div className="card-body card-body pb-0 d-flex justify-content-between align-items-start">
                  <div>
                    <div className="text-value-lg">9.823</div>
                    <div>Members online</div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-transparent dropdown-toggle p-0"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg className="c-icon">
                        <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-settings" />
                      </svg>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="c-chart-wrapper mt-3 mx-3"
                  style={{ height: 70 }}
                >
                  <canvas className="chart" id="card-chart1" height={70} />
                </div>
              </div>
            </div>
            {/* /.col*/}
            <div className="col-sm-6 col-lg-3">
              <div className="card text-white bg-gradient-info">
                <div className="card-body card-body pb-0 d-flex justify-content-between align-items-start">
                  <div>
                    <div className="text-value-lg">9.823</div>
                    <div>Members online</div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-transparent dropdown-toggle p-0"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg className="c-icon">
                        <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-settings" />
                      </svg>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="c-chart-wrapper mt-3 mx-3"
                  style={{ height: 70 }}
                >
                  <canvas className="chart" id="card-chart2" height={70} />
                </div>
              </div>
            </div>
            {/* /.col*/}
            <div className="col-sm-6 col-lg-3">
              <div className="card text-white bg-gradient-warning">
                <div className="card-body card-body pb-0 d-flex justify-content-between align-items-start">
                  <div>
                    <div className="text-value-lg">9.823</div>
                    <div>Members online</div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-transparent dropdown-toggle p-0"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg className="c-icon">
                        <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-settings" />
                      </svg>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
                <div className="c-chart-wrapper mt-3" style={{ height: 70 }}>
                  <canvas className="chart" id="card-chart3" height={70} />
                </div>
              </div>
            </div>
            {/* /.col*/}
            <div className="col-sm-6 col-lg-3">
              <div className="card text-white bg-gradient-danger">
                <div className="card-body card-body pb-0 d-flex justify-content-between align-items-start">
                  <div>
                    <div className="text-value-lg">9.823</div>
                    <div>Members online</div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn btn-transparent dropdown-toggle p-0"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg className="c-icon">
                        <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-settings" />
                      </svg>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="c-chart-wrapper mt-3 mx-3"
                  style={{ height: 70 }}
                >
                  <canvas className="chart" id="card-chart4" height={70} />
                </div>
              </div>
            </div>
            {/* /.col*/}
          </div>
          {/* /.row*/}
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="card-title mb-0">Traffic</h4>
                  <div className="small text-muted">September 2019</div>
                </div>
                <div
                  className="btn-toolbar d-none d-md-block"
                  role="toolbar"
                  aria-label="Toolbar with buttons"
                >
                  <div
                    className="btn-group btn-group-toggle mx-3"
                    data-toggle="buttons"
                  >
                    <label className="btn btn-outline-secondary">
                      <input
                        id="option1"
                        type="radio"
                        name="options"
                        autoComplete="off"
                      />{" "}
                      Day
                    </label>
                    <label className="btn btn-outline-secondary active">
                      <input
                        id="option2"
                        type="radio"
                        name="options"
                        autoComplete="off"
                        defaultChecked
                      />{" "}
                      Month
                    </label>
                    <label className="btn btn-outline-secondary">
                      <input
                        id="option3"
                        type="radio"
                        name="options"
                        autoComplete="off"
                      />{" "}
                      Year
                    </label>
                  </div>
                  <button className="btn btn-primary" type="button">
                    <svg className="c-icon">
                      <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-cloud-download" />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="c-chart-wrapper"
                style={{ height: 300, marginTop: 40 }}
              >
                <canvas className="chart" id="main-chart" height={300} />
              </div>
            </div>
            <div className="card-footer">
              <div className="row text-center">
                <div className="col-sm-12 col-md mb-sm-2 mb-0">
                  <div className="text-muted">Visits</div>
                  <strong>29.703 Users (40%)</strong>
                  <div className="progress progress-xs mt-2">
                    <div
                      className="progress-bar bg-gradient-success"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md mb-sm-2 mb-0">
                  <div className="text-muted">Unique</div>
                  <strong>24.093 Users (20%)</strong>
                  <div className="progress progress-xs mt-2">
                    <div
                      className="progress-bar bg-gradient-info"
                      role="progressbar"
                      style={{ width: "20%" }}
                      aria-valuenow={20}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md mb-sm-2 mb-0">
                  <div className="text-muted">Pageviews</div>
                  <strong>78.706 Views (60%)</strong>
                  <div className="progress progress-xs mt-2">
                    <div
                      className="progress-bar bg-gradient-warning"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md mb-sm-2 mb-0">
                  <div className="text-muted">New Users</div>
                  <strong>22.123 Users (80%)</strong>
                  <div className="progress progress-xs mt-2">
                    <div
                      className="progress-bar bg-gradient-danger"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md mb-sm-2 mb-0">
                  <div className="text-muted">Bounce Rate</div>
                  <strong>40.15%</strong>
                  <div className="progress progress-xs mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.card*/}
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="card">
                <div className="card-header bg-facebook content-center">
                  <svg className="c-icon c-icon-3xl text-white my-4">
                    <use xlinkHref="vendors/@coreui/icons/svg/brand.svg#cib-facebook-f" />
                  </svg>
                </div>
                <div className="card-body row text-center">
                  <div className="col">
                    <div className="text-value-xl">89k</div>
                    <div className="text-uppercase text-muted small">
                      friends
                    </div>
                  </div>
                  <div className="c-vr" />
                  <div className="col">
                    <div className="text-value-xl">459</div>
                    <div className="text-uppercase text-muted small">feeds</div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.col*/}
            <div className="col-sm-6 col-lg-4">
              <div className="card">
                <div className="card-header bg-twitter content-center">
                  <svg className="c-icon c-icon-3xl text-white my-4">
                    <use xlinkHref="vendors/@coreui/icons/svg/brand.svg#cib-twitter" />
                  </svg>
                </div>
                <div className="card-body row text-center">
                  <div className="col">
                    <div className="text-value-xl">973k</div>
                    <div className="text-uppercase text-muted small">
                      followers
                    </div>
                  </div>
                  <div className="c-vr" />
                  <div className="col">
                    <div className="text-value-xl">1.792</div>
                    <div className="text-uppercase text-muted small">
                      tweets
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.col*/}
            <div className="col-sm-6 col-lg-4">
              <div className="card">
                <div className="card-header bg-linkedin content-center">
                  <svg className="c-icon c-icon-3xl text-white my-4">
                    <use xlinkHref="vendors/@coreui/icons/svg/brand.svg#cib-linkedin" />
                  </svg>
                </div>
                <div className="card-body row text-center">
                  <div className="col">
                    <div className="text-value-xl">500+</div>
                    <div className="text-uppercase text-muted small">
                      contacts
                    </div>
                  </div>
                  <div className="c-vr" />
                  <div className="col">
                    <div className="text-value-xl">292</div>
                    <div className="text-uppercase text-muted small">feeds</div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.col*/}
          </div>
          {/* /.row*/}
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">Traffic &amp; Sales</div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="row">
                        <div className="col-6">
                          <div className="c-callout c-callout-info">
                            <small className="text-muted">New Clients</small>
                            <div className="text-value-lg">9,123</div>
                          </div>
                        </div>
                        {/* /.col*/}
                        <div className="col-6">
                          <div className="c-callout c-callout-danger">
                            <small className="text-muted">
                              Recuring Clients
                            </small>
                            <div className="text-value-lg">22,643</div>
                          </div>
                        </div>
                        {/* /.col*/}
                      </div>
                      {/* /.row*/}
                      <hr className="mt-0" />
                      <div className="progress-group mb-4">
                        <div className="progress-group-prepend">
                          <span className="progress-group-text">Monday</span>
                        </div>
                        <div className="progress-group-bars">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-info"
                              role="progressbar"
                              style={{ width: "34%" }}
                              aria-valuenow={34}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-danger"
                              role="progressbar"
                              style={{ width: "78%" }}
                              aria-valuenow={78}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="progress-group mb-4">
                        <div className="progress-group-prepend">
                          <span className="progress-group-text">Tuesday</span>
                        </div>
                        <div className="progress-group-bars">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-info"
                              role="progressbar"
                              style={{ width: "56%" }}
                              aria-valuenow={56}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-danger"
                              role="progressbar"
                              style={{ width: "94%" }}
                              aria-valuenow={94}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="progress-group mb-4">
                        <div className="progress-group-prepend">
                          <span className="progress-group-text">Wednesday</span>
                        </div>
                        <div className="progress-group-bars">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-info"
                              role="progressbar"
                              style={{ width: "12%" }}
                              aria-valuenow={12}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-danger"
                              role="progressbar"
                              style={{ width: "67%" }}
                              aria-valuenow={67}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="progress-group mb-4">
                        <div className="progress-group-prepend">
                          <span className="progress-group-text">Thursday</span>
                        </div>
                        <div className="progress-group-bars">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-info"
                              role="progressbar"
                              style={{ width: "43%" }}
                              aria-valuenow={43}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-danger"
                              role="progressbar"
                              style={{ width: "91%" }}
                              aria-valuenow={91}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="progress-group mb-4">
                        <div className="progress-group-prepend">
                          <span className="progress-group-text">Friday</span>
                        </div>
                        <div className="progress-group-bars">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-info"
                              role="progressbar"
                              style={{ width: "22%" }}
                              aria-valuenow={22}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-danger"
                              role="progressbar"
                              style={{ width: "73%" }}
                              aria-valuenow={73}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="progress-group mb-4">
                        <div className="progress-group-prepend">
                          <span className="progress-group-text">Saturday</span>
                        </div>
                        <div className="progress-group-bars">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-info"
                              role="progressbar"
                              style={{ width: "53%" }}
                              aria-valuenow={53}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-danger"
                              role="progressbar"
                              style={{ width: "82%" }}
                              aria-valuenow={82}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="progress-group mb-4">
                        <div className="progress-group-prepend">
                          <span className="progress-group-text">Sunday</span>
                        </div>
                        <div className="progress-group-bars">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-info"
                              role="progressbar"
                              style={{ width: "9%" }}
                              aria-valuenow={9}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-danger"
                              role="progressbar"
                              style={{ width: "69%" }}
                              aria-valuenow={69}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.col*/}
                    <div className="col-sm-6">
                      <div className="row">
                        <div className="col-6">
                          <div className="c-callout c-callout-warning">
                            <small className="text-muted">Pageviews</small>
                            <div className="text-value-lg">78,623</div>
                          </div>
                        </div>
                        {/* /.col*/}
                        <div className="col-6">
                          <div className="c-callout c-callout-success">
                            <small className="text-muted">Organic</small>
                            <div className="text-value-lg">49,123</div>
                          </div>
                        </div>
                        {/* /.col*/}
                      </div>
                      {/* /.row*/}
                      <hr className="mt-0" />
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <svg className="c-icon progress-group-icon">
                            <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-user" />
                          </svg>
                          <div>Male</div>
                          <div className="mfs-auto font-weight-bold">43%</div>
                        </div>
                        <div className="progress-group-bars">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-warning"
                              role="progressbar"
                              style={{ width: "43%" }}
                              aria-valuenow={43}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="progress-group mb-5">
                        <div className="progress-group-header">
                          <svg className="c-icon progress-group-icon">
                            <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-user-female" />
                          </svg>
                          <div>Female</div>
                          <div className="mfs-auto font-weight-bold">37%</div>
                        </div>
                        <div className="progress-group-bars">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-warning"
                              role="progressbar"
                              style={{ width: "43%" }}
                              aria-valuenow={43}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header align-items-end">
                          <svg className="c-icon progress-group-icon">
                            <use xlinkHref="vendors/@coreui/icons/svg/brand.svg#cib-google" />
                          </svg>
                          <div>Organic Search</div>
                          <div className="mfs-auto font-weight-bold mfe-2">
                            191.235
                          </div>
                          <div className="text-muted small">(56%)</div>
                        </div>
                        <div className="progress-group-bars">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-success"
                              role="progressbar"
                              style={{ width: "56%" }}
                              aria-valuenow={56}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header align-items-end">
                          <svg className="c-icon progress-group-icon">
                            <use xlinkHref="vendors/@coreui/icons/svg/brand.svg#cib-facebook-f" />
                          </svg>
                          <div>Facebook</div>
                          <div className="mfs-auto font-weight-bold mfe-2">
                            51.223
                          </div>
                          <div className="text-muted small">(15%)</div>
                        </div>
                        <div className="progress-group-bars">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-success"
                              role="progressbar"
                              style={{ width: "15%" }}
                              aria-valuenow={15}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header align-items-end">
                          <svg className="c-icon progress-group-icon">
                            <use xlinkHref="vendors/@coreui/icons/svg/brand.svg#cib-twitter" />
                          </svg>
                          <div>Twitter</div>
                          <div className="mfs-auto font-weight-bold mfe-2">
                            37.564
                          </div>
                          <div className="text-muted small">(11%)</div>
                        </div>
                        <div className="progress-group-bars">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-success"
                              role="progressbar"
                              style={{ width: "11%" }}
                              aria-valuenow={11}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header align-items-end">
                          <svg className="c-icon progress-group-icon">
                            <use xlinkHref="vendors/@coreui/icons/svg/brand.svg#cib-linkedin" />
                          </svg>
                          <div>LinkedIn</div>
                          <div className="mfs-auto font-weight-bold mfe-2">
                            27.319
                          </div>
                          <div className="text-muted small">(8%)</div>
                        </div>
                        <div className="progress-group-bars">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-success"
                              role="progressbar"
                              style={{ width: "8%" }}
                              aria-valuenow={8}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.col*/}
                  </div>
                  {/* /.row*/}
                  <br />
                  <table className="table table-responsive-sm table-hover table-outline mb-0">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">
                          <svg className="c-icon">
                            <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-people" />
                          </svg>
                        </th>
                        <th>User</th>
                        <th className="text-center">Country</th>
                        <th>Usage</th>
                        <th className="text-center">Payment Method</th>
                        <th>Activity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">
                          <div className="c-avatar">
                            <img
                              className="c-avatar-img"
                              src="assets/img/avatars/1.jpg"
                              alt="user@email.com"
                            />
                            <span className="c-avatar-status bg-success" />
                          </div>
                        </td>
                        <td>
                          <div>Yiorgos Avraamu</div>
                          <div className="small text-muted">
                            <span>New</span> | Registered: Jan 1, 2015
                          </div>
                        </td>
                        <td className="text-center">
                          <svg className="c-icon c-icon-xl">
                            <use xlinkHref="vendors/@coreui/icons/svg/flag.svg#cif-us" />
                          </svg>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>50%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">
                                Jun 11, 2015 - Jul 10, 2015
                              </small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-success"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td className="text-center">
                          <svg className="c-icon c-icon-xl">
                            <use xlinkHref="vendors/@coreui/icons/svg/brand.svg#cib-cc-mastercard" />
                          </svg>
                        </td>
                        <td>
                          <div className="small text-muted">Last login</div>
                          <strong>10 sec ago</strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="c-avatar">
                            <img
                              className="c-avatar-img"
                              src="assets/img/avatars/2.jpg"
                              alt="user@email.com"
                            />
                            <span className="c-avatar-status bg-danger" />
                          </div>
                        </td>
                        <td>
                          <div>Avram Tarasios</div>
                          <div className="small text-muted">
                            <span>Recurring</span> | Registered: Jan 1, 2015
                          </div>
                        </td>
                        <td className="text-center">
                          <svg className="c-icon c-icon-xl">
                            <use xlinkHref="vendors/@coreui/icons/svg/flag.svg#cif-br" />
                          </svg>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>10%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">
                                Jun 11, 2015 - Jul 10, 2015
                              </small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-info"
                              role="progressbar"
                              style={{ width: "10%" }}
                              aria-valuenow={10}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td className="text-center">
                          <svg className="c-icon c-icon-xl">
                            <use xlinkHref="vendors/@coreui/icons/svg/brand.svg#cib-cc-visa" />
                          </svg>
                        </td>
                        <td>
                          <div className="small text-muted">Last login</div>
                          <strong>5 minutes ago</strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="c-avatar">
                            <img
                              className="c-avatar-img"
                              src="assets/img/avatars/3.jpg"
                              alt="user@email.com"
                            />
                            <span className="c-avatar-status bg-warning" />
                          </div>
                        </td>
                        <td>
                          <div>Quintin Ed</div>
                          <div className="small text-muted">
                            <span>New</span> | Registered: Jan 1, 2015
                          </div>
                        </td>
                        <td className="text-center">
                          <svg className="c-icon c-icon-xl">
                            <use xlinkHref="vendors/@coreui/icons/svg/flag.svg#cif-in" />
                          </svg>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>74%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">
                                Jun 11, 2015 - Jul 10, 2015
                              </small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-warning"
                              role="progressbar"
                              style={{ width: "74%" }}
                              aria-valuenow={74}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td className="text-center">
                          <svg className="c-icon c-icon-xl">
                            <use xlinkHref="vendors/@coreui/icons/svg/brand.svg#cib-cc-stripe" />
                          </svg>
                        </td>
                        <td>
                          <div className="small text-muted">Last login</div>
                          <strong>1 hour ago</strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="c-avatar">
                            <img
                              className="c-avatar-img"
                              src="assets/img/avatars/4.jpg"
                              alt="user@email.com"
                            />
                            <span className="c-avatar-status bg-secondary" />
                          </div>
                        </td>
                        <td>
                          <div>Enéas Kwadwo</div>
                          <div className="small text-muted">
                            <span>New</span> | Registered: Jan 1, 2015
                          </div>
                        </td>
                        <td className="text-center">
                          <svg className="c-icon c-icon-xl">
                            <use xlinkHref="vendors/@coreui/icons/svg/flag.svg#cif-fr" />
                          </svg>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>98%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">
                                Jun 11, 2015 - Jul 10, 2015
                              </small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-danger"
                              role="progressbar"
                              style={{ width: "98%" }}
                              aria-valuenow={98}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td className="text-center">
                          <svg className="c-icon c-icon-xl">
                            <use xlinkHref="vendors/@coreui/icons/svg/brand.svg#cib-cc-paypal" />
                          </svg>
                        </td>
                        <td>
                          <div className="small text-muted">Last login</div>
                          <strong>Last month</strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="c-avatar">
                            <img
                              className="c-avatar-img"
                              src="assets/img/avatars/5.jpg"
                              alt="user@email.com"
                            />
                            <span className="c-avatar-status bg-success" />
                          </div>
                        </td>
                        <td>
                          <div>Agapetus Tadeáš</div>
                          <div className="small text-muted">
                            <span>New</span> | Registered: Jan 1, 2015
                          </div>
                        </td>
                        <td className="text-center">
                          <svg className="c-icon c-icon-xl">
                            <use xlinkHref="vendors/@coreui/icons/svg/flag.svg#cif-es" />
                          </svg>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>22%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">
                                Jun 11, 2015 - Jul 10, 2015
                              </small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-info"
                              role="progressbar"
                              style={{ width: "22%" }}
                              aria-valuenow={22}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td className="text-center">
                          <svg className="c-icon c-icon-xl">
                            <use xlinkHref="vendors/@coreui/icons/svg/brand.svg#cib-cc-apple-pay" />
                          </svg>
                        </td>
                        <td>
                          <div className="small text-muted">Last login</div>
                          <strong>Last week</strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="c-avatar">
                            <img
                              className="c-avatar-img"
                              src="assets/img/avatars/6.jpg"
                              alt="user@email.com"
                            />
                            <span className="c-avatar-status bg-danger" />
                          </div>
                        </td>
                        <td>
                          <div>Friderik Dávid</div>
                          <div className="small text-muted">
                            <span>New</span> | Registered: Jan 1, 2015
                          </div>
                        </td>
                        <td className="text-center">
                          <svg className="c-icon c-icon-xl">
                            <use xlinkHref="vendors/@coreui/icons/svg/flag.svg#cif-pl" />
                          </svg>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>43%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">
                                Jun 11, 2015 - Jul 10, 2015
                              </small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-gradient-success"
                              role="progressbar"
                              style={{ width: "43%" }}
                              aria-valuenow={43}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td className="text-center">
                          <svg className="c-icon c-icon-xl">
                            <use xlinkHref="vendors/@coreui/icons/svg/brand.svg#cib-cc-amex" />
                          </svg>
                        </td>
                        <td>
                          <div className="small text-muted">Last login</div>
                          <strong>Yesterday</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* /.col*/}
          </div>
          {/* /.row*/}
        </div>
      </div>
    </main>
    <footer className="c-footer">
      <div>
        <a href="https://coreui.io">CoreUI</a> © 2020 creativeLabs.
      </div>
      <div className="ml-auto">
        Powered by&nbsp;<a href="https://coreui.io/">CoreUI</a>
      </div>
    </footer>
  </div>
</div>

  </Layout>
);



// Index.getInitialProps = async ctx => {
//  // const { users } = await ctx.store.dispatch(getUsers());
//   //return { users };
// };



export default Index;
