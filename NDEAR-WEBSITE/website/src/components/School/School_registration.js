import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {signupactionforschool} from '../../action/action';
import {useSelector , useDispatch} from "react-redux";
import './SignUp.css'
import Navbar from '../Navbar/Navbar';

// {'schoolname' : '', 'disecode' : '' , 'address' : '', 'city' : '', 'state' : '',  'pincode' : '', 'Principalname' : '', 'Principalaadhar' : '', 'Principalpancard' : '', 'schoolemail' : '', 'schoolpassword' : '' }
export default function Ndear_registration() {

    const [form, setform] = useState({})

    const history = useHistory();

    const mystate = useSelector((state) => state.signupreducerforschool);
    const dispatch = useDispatch();

    const handleinput = (e)=>{
        console.log(e.target.value, e.target.id)
        form[e.target.id] = e.target.value
    }

    const submitted = (e)=>{
      
      e.preventDefault();
        
        console.log('submitted = ', form)
        axios.post(`http://localhost:${process.env.REACT_APP_SERVER}/registerschool`,  form, {headers : {"Content-Type" : "application/json" }}).then((result)=>{

            console.log(result)
            dispatch(signupactionforschool(result.data))
            console.log(mystate)
            history.push('/schoollogin')
            console.log('Working, must be redirected')
          }).catch((err)=> {
      
            console.log(err)
      
          });
    }
  return (

    <>
    <Navbar/>
    <div className='login_wrapper'>
        <div className='ndear_signup_container school_signup'>
            <form method='POST'>
            <h3>School Name</h3>
            <input type="text" onChange={handleinput} className="form-control" required id="schoolname" placeholder="IIST"/><br/>

            <h3>Dise Code</h3>
            <input type="text" onChange={handleinput} className="form-control" required id="disecode" placeholder="021021021"/><br/>


            <h3>Address</h3>
            <input type="text" onChange={handleinput} className="form-control" required id="address" placeholder="Address"/><br/>

            <h3>City</h3>
            <input type="text" onChange={handleinput} className="form-control" required id="city" placeholder="Indore"/><br/>


            <h3>State</h3>
            <input type="text" onChange={handleinput} className="form-control" required id="state" placeholder="Madhya Pradesh"/><br/>


            <h3>Pincode</h3>
            <input type="text" onChange={handleinput} className="form-control" required id="pincode" placeholder="454351"/><br/>


            <h3>Principal Name</h3>
            <input type="text" onChange={handleinput} className="form-control" required id="Principalname" placeholder="Principal name "/><br/>


            <h3>Aadhar Number</h3>
            <input type="number" onChange={handleinput} className="form-control" required id="Principalaadhar" placeholder="6548 4568 2354"/><br/>


            <h3>Pancard</h3>
            <input type="text" onChange={handleinput} className="form-control" required  id="Principalpancard" placeholder="843254SA"/><br/>


            <h3>Starting Class</h3>
            <input type="number" onChange={handleinput} min='1' max='12' className="form-control" required id="startclass" /><br/>


            <h3 className='white'>End Class</h3>
            <input type="number" min='1' max='12'  onChange={handleinput} className="form-control" required id="endclass" /><br/>

            <h3 className='white'>School Mail</h3>
            <input type="text" onChange={handleinput} className="form-control" required id="schoolemail" placeholder="school@institute.com"/><br/>


            <h3 className='white'>Password</h3>
            <input type="password" onChange={handleinput} className="form-control" required id="schoolpassword" placeholder="*******"/><br/>

            <br/>
                <button type='submit' onClick={submitted}>SignUp</button><br/>
            </form>
        </div>
    </div>
    </>



    // <div className='p-5'>
    //     <h1>School Registration</h1>
    //     <br/>
    //    <div className='p-5'>
            
    //         <div className="mb-3">
    //             <label for="schoolname"  class="form-label">Enter School Name</label>
    //             <input type="text" onChange={handleinput} class="form-control" id="schoolname" placeholder="Enter your ID"/>
    //          </div>
    //         <div className="mb-3">
    //             <label for="disecode"  class="form-label">Dise Code</label>
    //             <input type="text" onChange={handleinput} class="form-control" id="disecode" placeholder="Enter your code"/>
    //          </div>
    //         <div className="mb-3">
    //             <label for="address"  class="form-label"> Address</label>
    //             <input type="text" onChange={handleinput} class="form-control" id="address" placeholder="Enter your address"/>
    //          </div>
    //         <div className="mb-3">
    //             <label for="city"  class="form-label"> City</label>
    //             <input type="text" onChange={handleinput} class="form-control" id="city" placeholder="Enter city"/>
    //          </div>
    //         <div className="mb-3">
    //             <label for="state"  class="form-label">State</label>
    //             <input type="text" onChange={handleinput} class="form-control" id="state" placeholder="Enter state"/>
    //          </div>
    //         <div className="mb-3">
    //             <label for="pincode"  class="form-label">Pincode</label>
    //             <input type="text" onChange={handleinput} class="form-control" id="pincode" placeholder="Enter pincode"/>
    //          </div>
    //         <div className="mb-3">
    //             <label for="Principalname"  class="form-label">Principal Name</label>
    //             <input type="text" onChange={handleinput} class="form-control" id="Principalname" placeholder="Principal name "/>
    //          </div>
    //         <div className="mb-3">
    //             <label for="Principalaadhar"  class="form-label">Aadhar Number</label>
    //             <input type="text" onChange={handleinput} class="form-control" id="Principalaadhar" placeholder="Principal aadhar "/>
    //          </div>
    //          <div className="mb-3">
    //             <label for="Principalpancard"  class="form-label">Pancard</label>
    //             <input type="text" onChange={handleinput} class="form-control" id="Principalpancard" placeholder="Principal pancard"/>
    //          </div>
    //         <div className="mb-3">
    //             <label for="startclass"  class="form-label">Starting Class</label>
    //             <input type="number" onChange={handleinput} class="form-control" id="startclass" />
    //          </div>
    //         <div className="mb-3">
    //             <label for="endclass"  class="form-label">End Class</label>
    //             <input type="number" onChange={handleinput} class="form-control" id="endclass" />
    //          </div>
            
    //         <div className="mb-3">
    //             <label for="schoolemail"  class="form-label">Enter Institute mail</label>
    //             <input type="text" onChange={handleinput} class="form-control" id="schoolemail" placeholder="school@institute.com"/>
    //          </div>
    //         <div class="mb-3">
    //             <label for="schoolpassword"   class="form-label">Password</label>
    //             <input type="password" onChange={handleinput} class="form-control" id="schoolpassword" placeholder="Enter password"/>
    //         </div>
    //         <button type="button" onClick={submitted} class="btn btn-info">Create School Account</button>
    //    </div>
    // </div>
  )
}
