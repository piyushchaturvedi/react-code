import Layout from "../components/MyLayout";
import HeaderSecond from "../components/HeaderSecond";
import { useForm } from "react-hook-form";
import {API_URL} from "../config/const";
import {alertMessage} from "../config/alert";
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
const Add = () => {
  const { register, handleSubmit, errors,reset } = useForm();
  const router = useRouter()
  const { id } = router.query;
  const initialValue = [];
  const [getdata, setdata] = useState(initialValue);

  const userDataById=()=>{
    axios.post(API_URL+'view',{id:id}, {headers: {'Content-Type': 'application/json'}}).then(response => {
      if(response){
        setdata(response.data)
      }else{
        setdata([])
      }
    }).catch(error => {
      alertMessage(error,false);
    });
  }

  useEffect(() => {
    userDataById();
    
  }, [setdata])
 

  const onSubmit = formData => {
    Object.assign(formData,{id:id});
    axios.post(API_URL+'edit', formData, {headers: {'Content-Type': 'application/json'}}).then(response => {
      if(response.data.status){
        userDataById();
        //reset({})
        alertMessage(response.data.msg,response.data.status);
      }else{
        //reset({})
        alertMessage(response.data.msg,response.data.status);
      }
    }).catch(error => {
      reset({})
      alertMessage(error,false);
    });
  }
  return (
  <Layout>
    
  <div className="c-wrapper c-fixed-components">
  <HeaderSecond/>
  {console.log(getdata)}
  <div className="c-body">
  <main className="c-main">
      <div className="container-fluid">
        <div className="fade-in">
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
                       Name
                      </label>
                      <div className="col-md-9">
                        <input
                          ref={register({ required: 'Name is required',maxLength: 80 })}
                          className="form-control"
                          id="text-input"
                          value={getdata.name}
                          onChange={e => setdata({...setdata,[setdata.name]:e.target.value})}
                          type="text"
                          name="name"
                          placeholder="Text"
                        />
                        {errors.name && <span className="help-block">{errors.name.message}</span>}
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="textarea-input">
                        Textarea
                      </label>
                      <div className="col-md-9">
                        <textarea
                        ref={register({ required: 'Address is required' })}
                          className="form-control"
                          id="textarea-input"
                          name="address"
                          value={getdata.address}
                          onChange={e => setdata({...setdata,[setdata.address]:e.target.value})}
                          rows={9}
                          placeholder="Content.."  
                        />
                        {errors.address && <span className="help-block">{errors.address.message}</span>}
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label" htmlFor="select1">
                        Country
                      </label>
                      <div className="col-md-9">
                        <select className="form-control" onChange={e => setdata({...setdata,[setdata.country]:e.target.value})} value={getdata.country} ref={register({ required: 'Country is required' })} id="select1" name="country">
                          <option value="" >Please select</option>
                          <option value={'india'}>India</option>
                          <option value={'usa'}>USA</option>
                          <option value={'singapore'}>Singapore</option>
                        </select>
                        {errors.country && <span className="help-block">{errors.country.message?errors.country.message:''}</span>}
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Gender</label>
                      <div className="col-md-9 col-form-label">
                        <div className="form-check">
                          {getdata.radios =='male'?<input
                            className="form-check-input"
                            id="radio1"         
                            type="radio"
                             
                            checked={getdata.radios}
                             
                            onChange={e => setdata({...setdata,[setdata.radios]:e.target.value})}
                            name="radios"
                            value='male'
                            ref={register({ required: "Please choose gender" })}
                          />:<input
                          className="form-check-input"
                          id="radio1"         
                          type="radio"
                          
                          defaultChecked=""
                          
                          onChange={e => setdata({...setdata,[setdata.radios]:e.target.value})}
                          name="radios"
                          value='male'
                          ref={register({ required: "Please choose gender" })}
                        />}
                          <label className="form-check-label" htmlFor="radio1">
                            Male
                          </label>
                        </div>
                        <div className="form-check">
                        {getdata.radios == 'female'?<input
                            className="form-check-input"
                            id="radio2"         
                            type="radio"
                            checked={getdata.radios}
                            onChange={e => setdata({...setdata,[setdata.radios]:e.target.value})}
                            name="radios"
                            value='female'
                            ref={register({ required: "Please choose gender" })}
                          />:<input
                          className="form-check-input"
                          id="radio2"         
                          type="radio"
                          defaultChecked=""
                          onChange={e => setdata({...setdata,[setdata.radios]:e.target.value})}
                          name="radios"
                          value='female'
                          ref={register({ required: "Please choose gender" })}
                        />}
                          <label className="form-check-label" htmlFor="radio2">
                           Female
                          </label>
                        </div>
                        
                        {errors.radios && <span className="help-block">{errors.radios.message?errors.radios.message:''}</span>}
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">Hobbies</label>
                      <div className="col-md-9 col-form-label">
                        <div className="form-check checkbox">
                          <input
                            className="form-check-input"
                            id="check1"
                            ref={register({ required: "Please choose hobby" })}
                            type="checkbox"
                            name="cricket"
                            value={getdata.cricket}
                            //checked={getdata.cricket}
                            defaultChecked={getdata.cricket}
                            onChange={e => setdata({...setdata,[setdata.cricket]:e.target.checked})}
                          />
                          <label className="form-check-label" htmlFor="check1">
                            Cricket
                          </label>
                        </div>
                        {errors.cricket && <span className="help-block">{errors.cricket.message}</span>}
                        <div className="form-check checkbox">
                          <input
                            className="form-check-input"
                            id="check2"
                            ref={register({ required: "Please choose hobby" })}
                            type="checkbox"
                            onChange={e => setdata({...setdata,[setdata.football]:e.target.checked})}
                            value={getdata.football}
                            defaultChecked={getdata.football}
                            //checked={getdata.football}
                            name="football"
                          />
                          <label className="form-check-label" htmlFor="check2">
                            Football
                          </label>
                        </div>
                        {errors.football && <span className="help-block">{errors.football.message}</span>}
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
