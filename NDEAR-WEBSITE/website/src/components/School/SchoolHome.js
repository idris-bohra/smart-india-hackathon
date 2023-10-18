import React ,{useState, useEffect}from 'react'
import { useSelector } from 'react-redux';
import './SchoolHome.css'
import School_Nav from '../School NavBar/School_Nav';
import axios from 'axios'
import bg_img from '../../images/govt school.jpg'
import {useHistory} from 'react-router-dom'

const SchoolHome = () => {


  const history = useHistory();
  const [school, setschool] = useState()
  const [loading, setloading] = useState(true)

  useEffect(() => {
    
    axios.post(`http://localhost:${process.env.REACT_APP_SERVER}/getschooldetails`).then((result)=>{
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
  
  }, [])
    


  return (
  <>
    <School_Nav/>

    {loading == true ? 'loading...' :  <div className='login_wrapper_teacher_home'>
        <div className='teacher_resis_header'>
            <h3 className='teacher_resis_header_heading'>{school.schoolname}</h3><span className='teacher_resis_header_span'>,  {school.Principalname}</span>
        </div>
        <div className='login_wrapper_teacher_home_img'>
        {/* <img src={bg_img} alt=''/> */}
        </div>
    </div>}
  </>
  )
}

export default SchoolHome