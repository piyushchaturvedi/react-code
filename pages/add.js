import Layout from "../components/MyLayout";
import HeaderSecond from "../components/HeaderSecond";
const Add = () => (
  <Layout>
    <div className="c-wrapper c-fixed-components">
  <HeaderSecond/>
  <div className="c-body">
  <main className="c-main">
      <div className="container-fluid">
        <div className="fade-in">
          <div className="row" style={{visibility:'hidden' }}>
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
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <strong>Basic Form</strong> Elements
                </div>
                <div className="card-body">
                  <form
                    className="form-horizontal"
                    action
                    method="post"
                    encType="multipart/form-data"
                  >
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Static</label>
                      <div className="col-md-9">
                        <p className="form-control-static">Username</p>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="text-input">
                        Text Input
                      </label>
                      <div className="col-md-9">
                        <input
                          className="form-control"
                          id="text-input"
                          type="text"
                          name="text-input"
                          placeholder="Text"
                        />
                        <span className="help-block">This is a help text</span>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="email-input">
                        Email Input
                      </label>
                      <div className="col-md-9">
                        <input
                          className="form-control"
                          id="email-input"
                          type="email"
                          name="email-input"
                          placeholder="Enter Email"
                          autoComplete="email"
                        />
                        <span className="help-block">Please enter your email</span>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="password-input">
                        Password
                      </label>
                      <div className="col-md-9">
                        <input
                          className="form-control"
                          id="password-input"
                          type="password"
                          name="password-input"
                          placeholder="Password"
                          autoComplete="new-password"
                        />
                        <span className="help-block">
                          Please enter a complex password
                        </span>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="date-input">
                        Date Input
                      </label>
                      <div className="col-md-9">
                        <input
                          className="form-control"
                          id="date-input"
                          type="date"
                          name="date-input"
                          placeholder="date"
                        />
                        <span className="help-block">Please enter a valid date</span>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="disabled-input">
                        Disabled Input
                      </label>
                      <div className="col-md-9">
                        <input
                          className="form-control"
                          id="disabled-input"
                          type="text"
                          name="disabled-input"
                          placeholder="Disabled"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="textarea-input">
                        Textarea
                      </label>
                      <div className="col-md-9">
                        <textarea
                          className="form-control"
                          id="textarea-input"
                          name="textarea-input"
                          rows={9}
                          placeholder="Content.."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="select1">
                        Select
                      </label>
                      <div className="col-md-9">
                        <select className="form-control" id="select1" name="select1">
                          <option value={0}>Please select</option>
                          <option value={1}>Option #1</option>
                          <option value={2}>Option #2</option>
                          <option value={3}>Option #3</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="select2">
                        Select Large
                      </label>
                      <div className="col-md-9">
                        <select
                          className="form-control form-control-lg"
                          id="select2"
                          name="select2"
                        >
                          <option value={0}>Please select</option>
                          <option value={1}>Option #1</option>
                          <option value={2}>Option #2</option>
                          <option value={3}>Option #3</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="select3">
                        Select Small
                      </label>
                      <div className="col-md-9">
                        <select
                          className="form-control form-control-sm"
                          id="select3"
                          name="select3"
                        >
                          <option value={0}>Please select</option>
                          <option value={1}>Option #1</option>
                          <option value={2}>Option #2</option>
                          <option value={3}>Option #3</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="disabledSelect">
                        Disabled Select
                      </label>
                      <div className="col-md-9">
                        <select className="form-control" id="disabledSelect" disabled>
                          <option value={0}>Please select</option>
                          <option value={1}>Option #1</option>
                          <option value={2}>Option #2</option>
                          <option value={3}>Option #3</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col-md-3 col-form-label"
                        htmlFor="multiple-select"
                      >
                        Multiple select
                      </label>
                      <div className="col-md-9">
                        <select
                          className="form-control"
                          id="multiple-select"
                          name="multiple-select"
                          size={5}
                          multiple
                        >
                          <option value={1}>Option #1</option>
                          <option value={2}>Option #2</option>
                          <option value={3}>Option #3</option>
                          <option value={4}>Option #4</option>
                          <option value={5}>Option #5</option>
                          <option value={6}>Option #6</option>
                          <option value={7}>Option #7</option>
                          <option value={8}>Option #8</option>
                          <option value={9}>Option #9</option>
                          <option value={10}>Option #10</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Radios</label>
                      <div className="col-md-9 col-form-label">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            id="radio1"
                            type="radio"
                            defaultValue="radio1"
                            name="radios"
                          />
                          <label className="form-check-label" htmlFor="radio1">
                            Option 1
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            id="radio2"
                            type="radio"
                            defaultValue="radio2"
                            name="radios"
                          />
                          <label className="form-check-label" htmlFor="radio2">
                            Option 2
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            id="radio3"
                            type="radio"
                            defaultValue="radio2"
                            name="radios"
                          />
                          <label className="form-check-label" htmlFor="radio3">
                            Option 3
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Inline Radios</label>
                      <div className="col-md-9 col-form-label">
                        <div className="form-check form-check-inline mr-1">
                          <input
                            className="form-check-input"
                            id="inline-radio1"
                            type="radio"
                            defaultValue="option1"
                            name="inline-radios"
                          />
                          <label className="form-check-label" htmlFor="inline-radio1">
                            One
                          </label>
                        </div>
                        <div className="form-check form-check-inline mr-1">
                          <input
                            className="form-check-input"
                            id="inline-radio2"
                            type="radio"
                            defaultValue="option2"
                            name="inline-radios"
                          />
                          <label className="form-check-label" htmlFor="inline-radio2">
                            Two
                          </label>
                        </div>
                        <div className="form-check form-check-inline mr-1">
                          <input
                            className="form-check-input"
                            id="inline-radio3"
                            type="radio"
                            defaultValue="option3"
                            name="inline-radios"
                          />
                          <label className="form-check-label" htmlFor="inline-radio3">
                            Three
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Checkboxes</label>
                      <div className="col-md-9 col-form-label">
                        <div className="form-check checkbox">
                          <input
                            className="form-check-input"
                            id="check1"
                            type="checkbox"
                            defaultValue
                          />
                          <label className="form-check-label" htmlFor="check1">
                            Option 1
                          </label>
                        </div>
                        <div className="form-check checkbox">
                          <input
                            className="form-check-input"
                            id="check2"
                            type="checkbox"
                            defaultValue
                          />
                          <label className="form-check-label" htmlFor="check2">
                            Option 2
                          </label>
                        </div>
                        <div className="form-check checkbox">
                          <input
                            className="form-check-input"
                            id="check3"
                            type="checkbox"
                            defaultValue
                          />
                          <label className="form-check-label" htmlFor="check3">
                            Option 3
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Inline Checkboxes</label>
                      <div className="col-md-9 col-form-label">
                        <div className="form-check form-check-inline mr-1">
                          <input
                            className="form-check-input"
                            id="inline-checkbox1"
                            type="checkbox"
                            defaultValue="check1"
                          />
                          <label className="form-check-label" htmlFor="inline-checkbox1">
                            One
                          </label>
                        </div>
                        <div className="form-check form-check-inline mr-1">
                          <input
                            className="form-check-input"
                            id="inline-checkbox2"
                            type="checkbox"
                            defaultValue="check2"
                          />
                          <label className="form-check-label" htmlFor="inline-checkbox2">
                            Two
                          </label>
                        </div>
                        <div className="form-check form-check-inline mr-1">
                          <input
                            className="form-check-input"
                            id="inline-checkbox3"
                            type="checkbox"
                            defaultValue="check3"
                          />
                          <label className="form-check-label" htmlFor="inline-checkbox3">
                            Three
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="file-input">
                        File input
                      </label>
                      <div className="col-md-9">
                        <input id="file-input" type="file" name="file-input" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col-md-3 col-form-label"
                        htmlFor="file-multiple-input"
                      >
                        Multiple File input
                      </label>
                      <div className="col-md-9">
                        <input
                          id="file-multiple-input"
                          type="file"
                          name="file-multiple-input"
                          multiple
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="card-footer">
                  <button className="btn btn-sm btn-primary" type="submit">
                    {" "}
                    Submit
                  </button>
                  <button className="btn btn-sm btn-danger" type="reset">
                    {" "}
                    Reset
                  </button>
                </div>
              </div>
            
            </div>
          
</div>;

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

export default Add;
