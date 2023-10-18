import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './NDEAR.css'
import { useHistory } from "react-router-dom";
import {loginactionforadmin} from '../../action/action';
import {useSelector , useDispatch} from "react-redux";
import Navbar from '../Navbar/Navbar';
axios.defaults.withCredentials = true;

export default function Ndear_login() {

  
  const [check, setcheck] = useState(false)
  const [form, setform] = useState({'adminid' : '', 'adminpassword' : ''})

  const history = useHistory();

  const mystate = useSelector((state) => state.loginreducerforadmin);
  const dispatch = useDispatch(); 

  console.log(mystate)

  useEffect(() => {
    async function fun(){

      await axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/checkloginforNdear`).then(async (result)=>{

        console.log(result)

        if(result.data.user==false)
        {
          await axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/checkloginforschool`).then((result)=>{

            console.log(result)

            if(result.data.user == true)
            {
              history.push('/');
            }
          }).catch((err)=>{
            console.log(err)
          })
        }
        else{
          history.push('/')
        }

      }).catch((err)=> {

        console.log(err)

      });
    }
    fun();
  
   
  }, [])
  

    const handleinput = (e)=>{
        console.log(e.target.value, e.target.id)
        form[e.target.id] = e.target.value
    }
    const submitted =  (e)=>{

        e.preventDefault();
        
        console.log(form)
        axios.post(`http://localhost:${process.env.REACT_APP_SERVER}/loginadmin`,  form, {headers : {"Content-Type" : "application/json"}}).then(async (result)=>{

            console.log(result)
            await dispatch(loginactionforadmin(result.data))
            history.push('/ndear/schools')
          }).catch((err)=> {
      
            console.log(err)
      
          });

    }
  return (
  <>
  <Navbar/>
    <div className='login_wrapper'>
        <div className='login_ndear_container'>
        <h3>NDEAR Login</h3>
            <form method='POST'>
                <h3>Admin ID</h3>
                <input type="text" onChange={handleinput} className="form-control" id="adminid" placeholder="Enter your ID"/><br/>
                <h3>Password</h3>
                <input type="password" onChange={handleinput} className="form-control" id="adminpassword" placeholder="********"/><br/>
                <button type='submit' onClick={submitted}>LOGIN</button><br/>
                <a href='/adminregistration'>Create new account</a>
            </form>
        </div>
    </div>
  </>

  )
}
