import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {loginactionforschool} from '../../action/action';
import {useSelector , useDispatch} from "react-redux";
import './Teachers_registration.css'
import School_Nav from '../School NavBar/School_Nav';

export default function Teachers_registration() {

    const [form, setform] = useState({forclass : undefined,section:'A'})
    const [mode, setmode] = useState('')
    const [arr, setarr] = useState([])
    const [school, setschool] = useState()
    const [loading, setloading] = useState(true)



    const history = useHistory();

    const mystate = useSelector((state) => state.loginreducerforschool.detail);
    console.log('mystate for teacher = ',mystate)
    const dispatch = useDispatch();
    

    const handleinput = (e)=>{
        console.log(e.target.value, e.target.id)
        form[e.target.id] = e.target.value
    }
    
    const role =(e)=>{
        console.log(e.target.value, e.target.id)
        form[e.target.id] = e.target.value
        modding()
    }

    const modding = ()=>{
        if(form.role === 'attendence')
        {
            setmode('attendence')
        }
        else
        {
            setmode('')
            form.forclass = undefined;
        }
    }


    const submitted = (e)=>{

        e.preventDefault();
        console.log('submitted = ', form)
        const {disecode , _id, schoolname, city, state} = mystate
        form['disecode'] = disecode;
        form['schoolid'] = _id
        form['schoolname'] = schoolname
        form['city'] = city
        form['state'] = state
        console.log('newone = ',form)
        axios.post(`http://localhost:${process.env.REACT_APP_SERVER}/registerteacher`,  form, {headers : {"Content-Type" : "application/json" }}).then((result)=>{

            console.log(result)
            // dispatch(signupactionforschool(result.data))
            history.push('/loggedInTeachers')
          }).catch((err)=> {
      
            console.log(err)
      
          });
    }

    useEffect(() => {
        async function fun(){
            await axios.post(`http://localhost:${process.env.REACT_APP_SERVER}/getschooldetails`).then((result)=>{
            console.log(result)
            if(result.data.user == false)
            {
              history.push('/schoollogin')
            }
            else
            {
              setschool(result.data.details)
              setloading(false)
            }
        })
        }

        fun();
    
   
    }, [])
    

  return (
    <>
    {/* name */}
    <School_Nav/>
    <br/>
    {loading==true ? "loading...." : <div className='login_wrapper'>
       <div className='login_ndear_container teacher_regis_container'>
        <div className='teacher_resis_header'>
        <h5 className='teacher_resis_header_heading'>{school.schoolname} School</h5>
        <h6>{school.Principalname}</h6>
        <br/>
        <br/>
        <h1 className='teacher_resis_header_heading_2'>Teacher Registration</h1>
        </div>
        <form method='POST'>
                {/* <label for="teachermail"  class="form-label">Enter Teacher mail</label> */}
                <h3 className='teachers_regis_heder'>Teacher Name</h3>
                <input type="text" onChange={handleinput} class="form-control" id="teachername" placeholder="John Sigma" required/>
                <h3 className='teachers_regis_heder'>Teacher mail</h3>
                <input type="text" onChange={handleinput} class="form-control" id="teachermail" placeholder="school@institute.com" required/>
                {/* <label for="teacherid"  class="form-label">Enter Teacher id</label> */}
                <h3 className='teachers_regis_heder'>Teacher Id</h3>
                <input type="text" onChange={handleinput} class="form-control" id="teacherid" placeholder="Teacher id should be unique" required/>



                {/* <label class="input-group-text" for="role">Role</label> */}
                <h3 className='teachers_regis_heder'>Select Role</h3>
                <select onChange={role} className="form-select" id="role">
                    <option selected>Select Role</option>
                    <option value="attendence">Attendence</option>
                    <option value="meal">Meal recorder</option>
                    <option value="resource">Resource</option>
                </select>
             {mode === 'attendence' ? <div className="input-group mb-3 toggle_input_container">
                {/* <label class="input-group-text" for="forclass">For Class</label> */}
                <h3 className='teachers_regis_heder toggle_h3_heading'>For Class</h3>
                <select onChange={role} className="form-select toggle_select_input" id="forclass" required>
                    <option   selected>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    {/* {
                        array.map((value , key)=>{
                            console.log(array)
                            return <option value={value} key={key} selected>{value}</option>
                        })
                    } */}
                </select>

                <h3 className='teachers_regis_heder toggle_h3_heading password_white'>Class Section</h3>
                <select onChange={role} className="form-select toggle_select_input" id="section">
                    <option selected value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>

            </div> : ''}
                {/* <label for="teacherpassword"   class="form-label">Password</label> */}<br/>
                <h3 className='teachers_regis_heder password_white'>Password</h3>
                <input type="password" onChange={handleinput} class="form-control" id="teacherpassword" placeholder="Enter password" required/>
            <button type="submit" onClick={submitted} className="teacher_regis_btn">Create</button>
            </form>
       </div>
    </div>}
    </>
  )
}
