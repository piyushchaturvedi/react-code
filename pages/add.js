import Layout from "../components/MyLayout";
import HeaderSecond from "../components/HeaderSecond";
import { useForm } from "react-hook-form";
import { Alert } from 'react-bootstrap';
const Add = () => {
  const { register, handleSubmit, errors } = useForm();

    // function to output form data
    // we need to pass it to onSubmit of form element
  const onSubmit = formData => {
    alert(JSON.stringify(formData))
  }
  return (
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
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="text-input">
                        Text Input
                      </label>
                      <div className="col-md-9">
                        <input
                          ref={register}
                          className="form-control"
                          id="text-input"
                          type="text"
                          name="name"
                          placeholder="Text"
                        />
                        <span className="help-block">This is a help text</span>
                      </div>
                    </div>
                    
                    
                   
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="textarea-input">
                        Textarea
                      </label>
                      <div className="col-md-9">
                        <textarea
                        ref={register}
                          className="form-control"
                          id="textarea-input"
                          name="address"
                          rows={9}
                          placeholder="Content.."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="select1">
                        Country
                      </label>
                      <div className="col-md-9">
                        <select className="form-control"  ref={register} id="select1" name="country">
                          <option >Please select</option>
                          <option value={'india'}>India</option>
                          <option value={'usa'}>USA</option>
                          <option value={'singapore'}>Singapore</option>
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
                            ref={register}
                            type="radio"
                            defaultValue="radio1"
                            name="radios"
                          />
                          <label className="form-check-label" htmlFor="radio1">
                            Male
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            id="radio2"
                            ref={register}
                            type="radio"
                            defaultValue="radio2"
                            name="radios"
                          />
                          <label className="form-check-label" htmlFor="radio2">
                           Female
                          </label>
                        </div>
                        
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Hobbies</label>
                      <div className="col-md-9 col-form-label">
                        <div className="form-check checkbox">
                          <input
                            className="form-check-input"
                            id="check1"
                            ref={register}
                            type="checkbox"
                            name="cricket"
                          />
                          <label className="form-check-label" htmlFor="check1">
                            Cricket
                          </label>
                        </div>
                        <div className="form-check checkbox">
                          <input
                            className="form-check-input"
                            id="check2"
                            ref={register}
                            type="checkbox"
                            name="football"
                          />
                          <label className="form-check-label" htmlFor="check2">
                            Football
                          </label>
                        </div>
                        <div class="card-footer">
                      <button class="btn btn-sm btn-primary" type="submit"> Submit</button>
                      
                    </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>

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
  )
}
export default Add;
