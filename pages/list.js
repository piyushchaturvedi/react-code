import Layout from "../components/MyLayout";
import HeaderSecond from "../components/HeaderSecond";
import { useForm } from "react-hook-form";
import { Alert } from 'react-bootstrap';
const List = () => {
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
  <div className="col-lg-12">
    <div className="card">
      <div className="card-header">
        <i className="fa fa-align-justify" /> Combined All Table
      </div>
      <div className="card-body">
        <table className="table table-responsive-sm table-bordered table-striped table-sm">
          <thead>
            <tr>
              <th>Username</th>
              <th>Date registered</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vishnu Serghei</td>
              <td>2012/01/01</td>
              <td>Member</td>
              <td>
                <span className="badge badge-success">Edit</span>
                <span className="badge badge-danger">Delete</span>
              </td>
            </tr>
            <tr>
              <td>Zbyněk Phoibos</td>
              <td>2012/02/01</td>
              <td>Staff</td>
              <td>
              <span className="badge badge-success">Edit</span>
                <span className="badge badge-danger">Delete</span>
              </td>
            </tr>
            <tr>
              <td>Einar Randall</td>
              <td>2012/02/01</td>
              <td>Admin</td>
              <td>
              <span className="badge badge-success">Edit</span>
                <span className="badge badge-danger">Delete</span>
              </td>
            </tr>
            </tbody>
        </table>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Prev
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
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
            <li className="page-item">
              <a className="page-link" href="#">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  {/* /.col*/}
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
  )
}
export default List;
