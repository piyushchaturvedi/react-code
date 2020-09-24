import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Sidebar = () => (
    <div
    className="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show"
    id="sidebar"
  >
    <div className="c-sidebar-brand d-lg-down-none">
      <svg
        className="c-sidebar-brand-full"
        width={118}
        height={46}
        alt="CoreUI Logo"
      >
        <use xlinkHref="assets/brand/coreui.svg#full" />
      </svg>
      <svg
        className="c-sidebar-brand-minimized"
        width={46}
        height={46}
        alt="CoreUI Logo"
      >
        <use xlinkHref="assets/brand/coreui.svg#signet" />
      </svg>
    </div>
    <ul className="c-sidebar-nav">
      <li className="c-sidebar-nav-item">
        <a className="c-sidebar-nav-link" href="index.html">
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-speedometer" />
          </svg>{" "}
          Dashboard<span className="badge badge-info">NEW</span>
        </a>
      </li>
      <li className="c-sidebar-nav-title">Theme</li>
      <li className="c-sidebar-nav-item">
        <a className="c-sidebar-nav-link" href="/add">
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-drop1" />
          </svg>{" "}
          Add
        </a>
         
      </li>
      <li className="c-sidebar-nav-item">
        <a className="c-sidebar-nav-link" href="/list">
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-pencil" />
          </svg>{" "}
          List
        </a>
      </li>
      <li className="c-sidebar-nav-title">Components</li>
      <li className="c-sidebar-nav-item c-sidebar-nav-dropdown">
        <a className="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-puzzle" />
          </svg>{" "}
          Base
        </a>
        <ul className="c-sidebar-nav-dropdown-items">
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="base/breadcrumb.html">
              <span className="c-sidebar-nav-icon" /> Breadcrumb
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="base/cards.html">
              <span className="c-sidebar-nav-icon" /> Cards
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="base/carousel.html">
              <span className="c-sidebar-nav-icon" /> Carousel
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="base/collapse.html">
              <span className="c-sidebar-nav-icon" /> Collapse
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="base/forms.html">
              <span className="c-sidebar-nav-icon" /> Forms
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="base/jumbotron.html">
              <span className="c-sidebar-nav-icon" /> Jumbotron
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="base/list-group.html">
              <span className="c-sidebar-nav-icon" /> List group
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="base/navs.html">
              <span className="c-sidebar-nav-icon" /> Navs
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="base/pagination.html">
              <span className="c-sidebar-nav-icon" /> Pagination
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="base/popovers.html">
              <span className="c-sidebar-nav-icon" /> Popovers
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="base/progress.html">
              <span className="c-sidebar-nav-icon" /> Progress
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="base/scrollspy.html">
              <span className="c-sidebar-nav-icon" /> Scrollspy
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="base/switches.html">
              <span className="c-sidebar-nav-icon" /> Switches
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="base/tables.html">
              <span className="c-sidebar-nav-icon" /> Tables
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="base/tabs.html">
              <span className="c-sidebar-nav-icon" /> Tabs
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="base/tooltips.html">
              <span className="c-sidebar-nav-icon" /> Tooltips
            </a>
          </li>
        </ul>
      </li>
      <li className="c-sidebar-nav-item c-sidebar-nav-dropdown">
        <a className="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-cursor" />
          </svg>{" "}
          Buttons
        </a>
        <ul className="c-sidebar-nav-dropdown-items">
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="buttons/buttons.html">
              <span className="c-sidebar-nav-icon" /> Buttons
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="buttons/button-group.html">
              <span className="c-sidebar-nav-icon" /> Buttons Group
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="buttons/dropdowns.html">
              <span className="c-sidebar-nav-icon" /> Dropdowns
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="buttons/brand-buttons.html">
              <span className="c-sidebar-nav-icon" /> Brand Buttons
            </a>
          </li>
        </ul>
      </li>
      <li className="c-sidebar-nav-item">
        <a className="c-sidebar-nav-link" href="charts.html">
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-chart-pie" />
          </svg>{" "}
          Charts
        </a>
      </li>
      <li className="c-sidebar-nav-dropdown">
        <a className="c-sidebar-nav-dropdown-toggle" href="#">
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-star" />
          </svg>{" "}
          Icons
        </a>
        <ul className="c-sidebar-nav-dropdown-items">
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="icons/coreui-icons-free.html">
              {" "}
              CoreUI Icons<span className="badge badge-success">Free</span>
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a
              className="c-sidebar-nav-link"
              href="icons/coreui-icons-brand.html"
            >
              {" "}
              CoreUI Icons - Brand
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="icons/coreui-icons-flag.html">
              {" "}
              CoreUI Icons - Flag
            </a>
          </li>
        </ul>
      </li>
      <li className="c-sidebar-nav-item c-sidebar-nav-dropdown">
        <a className="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-bell" />
          </svg>{" "}
          Notifications
        </a>
        <ul className="c-sidebar-nav-dropdown-items">
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="notifications/alerts.html">
              <span className="c-sidebar-nav-icon" /> Alerts
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="notifications/badge.html">
              <span className="c-sidebar-nav-icon" /> Badge
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="notifications/modals.html">
              <span className="c-sidebar-nav-icon" /> Modals
            </a>
          </li>
        </ul>
      </li>
      <li className="c-sidebar-nav-item">
        <a className="c-sidebar-nav-link" href="widgets.html">
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-calculator" />
          </svg>{" "}
          Widgets<span className="badge badge-info">NEW</span>
        </a>
      </li>
      <li className="c-sidebar-nav-divider" />
      <li className="c-sidebar-nav-title">Extras</li>
      <li className="c-sidebar-nav-item c-sidebar-nav-dropdown">
        <a className="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-star" />
          </svg>{" "}
          Pages
        </a>
        <ul className="c-sidebar-nav-dropdown-items">
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="login.html" target="_top">
              <svg className="c-sidebar-nav-icon">
                <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-account-logout" />
              </svg>{" "}
              Login
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="register.html" target="_top">
              <svg className="c-sidebar-nav-icon">
                <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-account-logout" />
              </svg>{" "}
              Register
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="404.html" target="_top">
              <svg className="c-sidebar-nav-icon">
                <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-bug" />
              </svg>{" "}
              Error 404
            </a>
          </li>
          <li className="c-sidebar-nav-item">
            <a className="c-sidebar-nav-link" href="500.html" target="_top">
              <svg className="c-sidebar-nav-icon">
                <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-bug" />
              </svg>{" "}
              Error 500
            </a>
          </li>
        </ul>
      </li>
      <li className="c-sidebar-nav-item mt-auto">
        <a
          className="c-sidebar-nav-link c-sidebar-nav-link-success"
          href="https://coreui.io"
          target="_top"
        >
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-cloud-download" />
          </svg>{" "}
          Download CoreUI
        </a>
      </li>
      <li className="c-sidebar-nav-item">
        <a
          className="c-sidebar-nav-link c-sidebar-nav-link-danger"
          href="https://coreui.io/pro/"
          target="_top"
        >
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-layers" />
          </svg>{" "}
          Try CoreUI<strong>PRO</strong>
        </a>
      </li>
    </ul>
    <button
      className="c-sidebar-minimizer c-class-toggler"
      type="button"
      data-target="_parent"
      data-class="c-sidebar-minimized"
    />
  </div>
  
);

export default Sidebar;
