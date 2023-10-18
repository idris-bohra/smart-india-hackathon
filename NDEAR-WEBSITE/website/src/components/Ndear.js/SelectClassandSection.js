import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router-dom'
import {ndearactionforattendence} from '../../action/action';
import {useSelector , useDispatch} from "react-redux";
import NdearScannedattendence from '../Scanneddoc/NdearScannedattendence'

const SelectClassandSection = () => {

  const location = useLocation();
  const history= useHistory();
  const params= useParams();
  const params2 = new URLSearchParams(location.search)


  useEffect(() => {
    
    axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/checklogin`).then(async (result)=>{

      console.log(result)
      if(result.data.user == false)
      {
        history.push('/adminlogin')
      }

    }).catch((err)=> {

      console.log(err)

    });
  
  
  }, [])

  const [form, setform] = useState({forclass : '1',section:'A',disecode:params.id})

  console.log(params.id)
  
  const mystate = useSelector((state) => state.ndearreducerforattendence);
  console.log(mystate)
  const dispatch = useDispatch(); 

  const role =(e)=>{
      console.log(e.target.value, e.target.id)
      form[e.target.id] = e.target.value
  }


  const submitted = (e)=>{
    e.preventDefault();
    history.push(`/ndear/school/attendance/${params.id}?class=${form.forclass}&section=${form.section}`)
  }

  return (
    <>
    {params2.get('class')==null ? <div className='login_wrapper'>
        
       <div className='login_ndear_container teacher_regis_container'>
        <form method='POST'>

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
              
          </select>

            <h3 className='teachers_regis_heder toggle_h3_heading password_white'>Class Section</h3>
            <select onChange={role} className="form-select toggle_select_input" id="section">
                <option selected value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>

                
            <button type="submit" onClick={submitted} className="teacher_regis_btn">Create</button>
            </form>
       </div>
    </div> : <NdearScannedattendence disecode={params.id} class={params2.get('class')} section={params2.get('section')} /> }
    </>
  )
}

export default SelectClassandSection