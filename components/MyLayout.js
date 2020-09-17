import Head from "next/head";

import Header from "./Header";
import Sidebar from "./Sidebar";
import HeaderSecond from "./HeaderSecond";

const Layout = props => (
  <html lang="en">
      <Head>
        <title>Next.js App with Redux</title>
      </Head>
      <Header/>
    <body className="c-app">
    <Sidebar/>
    {/* <div className="c-wrapper c-fixed-components"> */}
    {/* <HeaderSecond/>  */}
    
      {props.children} 
    {/* </div> */}
      {/* <!-- CoreUI and necessary plugins--> */}
    <script src="vendors/@coreui/coreui/js/coreui.bundle.min.js"></script>
    {/* <!--[if IE]><!--> */}
    <script src="vendors/@coreui/icons/js/svgxuse.min.js"></script>
    {/* <!--<![endif]--> */}
    {/* <!-- Plugins and scripts required by this view--> */}
    <script src="vendors/@coreui/chartjs/js/coreui-chartjs.bundle.js"></script>
    <script src="vendors/@coreui/utils/js/coreui-utils.js"></script>
    <script src="js/main.js"></script>

  </body>
</html>
);

export default Layout;
