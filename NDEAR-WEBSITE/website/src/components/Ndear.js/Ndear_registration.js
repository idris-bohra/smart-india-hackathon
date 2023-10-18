import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {signupactionforadmin} from '../../action/action';
import {useSelector , useDispatch} from "react-redux";
import './Signup.css'
import Navbar from '../Navbar/Navbar';

export default function Ndear_registration() {

    const [form, setform] = useState({'adminid' : '', 'adminpassword' : ''})

    const history = useHistory();

    const mystate = useSelector((state) => state.signupreducerforadmin);
    const dispatch = useDispatch();

    const handleinput = (e)=>{
        console.log(e.target.value, e.target.id)
        form[e.target.id] = e.target.value
    }

    const submitted = (e)=>{

      e.preventDefault();
      
      console.log('submitted = ', form)
      axios.post(`http://localhost:${process.env.REACT_APP_SERVER}/registeradmin`,  form, {headers : {"Content-Type" : "application/json" }}).then((result)=>{

          console.log(result)
          dispatch(signupactionforadmin(result.data))
          history.push('/adminlogin')
    
        }).catch((err)=> {
    
          console.log(err)
    
        });
    }
  return (<>

<Navbar/>
    <div className='login_wrapper'>
        <div className='ndear_signup_container'>
        <h3>NDEAR SignUp</h3>
            <form method="POST">
            <h3>Admin ID</h3>
            <input type="text" onChange={handleinput} className="form-control" id="adminid" required placeholder="Enter your ID"/><br/>
                <h3>Password</h3>
                <input type="password" onChange={handleinput} className="form-control" id="adminpassword" required placeholder="*******"/><br/>
                <button type='submit' onClick={submitted}>SignUp</button><br/>
            </form>
        </div>
    </div>
    </>
    // <div className='p-5'>
    //     <h1>NDEAR SignUp</h1>
    //     <br/>
    //    <div className='p-5'>
            
    //         <div className="mb-3">
    //             <label for="adminid"  class="form-label">Enter Admin ID</label>
    //             <input type="text" onChange={handleinput} class="form-control" id="adminid" placeholder="Enter your ID"/>
    //          </div>
    //         <div class="mb-3">
    //             <label for="adminpassword"   class="form-label">Enter Password</label>
    //             <input type="password" onChange={handleinput} class="form-control" id="adminpassword" placeholder="Enter your password"/>
    //         </div>
    //         <button type="button" onClick={submitted} class="btn btn-info">Create-Admin-Account</button>
    //    </div>
    // </div>
  )
}
