import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {loginactionforschool} from '../../action/action';
import {useSelector , useDispatch} from "react-redux";
import Navbar from '../Navbar/Navbar';

export default function School_login() {

  const [form, setform] = useState({})

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
  

  const history = useHistory();

  const mystate = useSelector((state) => state.loginreducerforschool);
  const dispatch = useDispatch(); 

  console.log(mystate)

  const handleinput = (e)=>{
      console.log(e.target.value, e.target.id)
      form[e.target.id] = e.target.value
  }
  const submitted =  (e)=>{

    e.preventDefault();
      
    console.log('submitted = ', form)
    
    axios.post(`http://localhost:${process.env.REACT_APP_SERVER}/loginschool`,  form, {headers : {"Content-Type" : "application/json" }}).then(async (result)=>{

        console.log(result)
        await dispatch(loginactionforschool(result.data))
        // history.push('/createaccountforschooluser')

        history.push('/schoolhome')
      }).catch((err)=> {
  
        console.log(err)
  
      });

  }
  return (

    <>
    <Navbar/>
    <div className='login_wrapper'>
        <div className='login_ndear_container'>
        <h2>School Login</h2>
        <br/>
            <form method='POST' >
                <h3>Dise Code</h3>
                <input type="text" onChange={handleinput} required className="form-control" id="disecode" placeholder="Enter dise code" /><br/>
                <h3>Password</h3>
                <input type="password" onChange={handleinput} required className="form-control" id="schoolpassword"  placeholder="********"/><br/>
                <button type='submit' onClick={submitted}>LOGIN</button><br/>
                <a href='/schoolregistration'>Create new account</a>
            </form>
        </div>
    </div>
    </>
  )
}
