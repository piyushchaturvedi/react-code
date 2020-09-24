import { useState, useEffect } from 'react'
import Layout from "../components/MyLayout";
import HeaderSecond from "../components/HeaderSecond";
import {API_URL} from "../config/const";
import {alertMessage} from "../config/alert";
import axios from 'axios';
import Link from 'next/link'

const List = (props) => {
   
  const initialValue = [];
  const [getdata, setdata] = useState(initialValue);
  const userlist = ()=>{
    axios.post(API_URL+'list',{}, {headers: {'Content-Type': 'application/json'}}).then(response => {
      if(response.data.status){
        setdata(response.data.data)
        //alertMessage(response.data.msg,response.data.status);
      }else{
        setdata(response.data.data)
        alertMessage(response.data.msg,response.data.status);
      }
    }).catch(error => {
      alertMessage(error,false);
    });
  }
  useEffect(() => {
    userlist()
  }, [setdata])
  const onClick = id => {
    axios.post(API_URL+'delete',{_id:id}, {headers: {'Content-Type': 'application/json'}}).then(response => {
      if(response.data.status){
        userlist()
        alertMessage(response.data.msg,response.data.status);
      }else{
        userlist()
        alertMessage(response.data.msg,response.data.status);
      }
    }).catch(error => {
      alertMessage(error,false);
    });
  }
  return (
  <Layout>
    <div className="c-wrapper c-fixed-components">
  <HeaderSecond/>
  
  <div className="c-body">
  <main className="c-main">
      <div className="container-fluid">
        <div className="fade-in">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify" /> User list
              </div>
              <div className="card-body">
                <table className="table table-responsive-sm table-bordered table-striped table-sm">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Country</th>
                      <th>Gender</th>
                      <th>Cricket</th>
                      <th>football</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                  {getdata.length>0&&getdata.map((value, key) => (
                    <tr>
                      <td>{value.name}</td>
                      <td>{value.address}</td>
                      <td>{value.country}</td>
                      <td>{value.radios}</td>
                      <td>{value.cricket?'cricket':''}</td>
                      <td>{value.football?'football':''}</td>
                      <td>
                      <a href="JavaScript:Void(0);">
                        <Link href={"/edit?id=" + value._id} as={'/edit/' + [value._id]} >
                          <span className="badge badge-success">Edit</span>
                        </Link>
                      </a>
                      <a href="JavaScript:Void(0);" onClick={e=>confirm("Are you sure?")?onClick(value._id):''}>
                        <span className="badge badge-danger">Delete</span>
                      </a>
                      </td>
                      
                    </tr>
                    ))
                    }
                    {!getdata.length>0&&
                    <tr>
                    <td colspan="7"><center>Record is not found!!</center></td>
                    </tr>
                    }
                   </tbody>
                </table>
                {/* <nav>
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
               */}
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