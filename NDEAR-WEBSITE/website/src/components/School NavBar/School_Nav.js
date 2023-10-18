import React, {useRef, useState} from 'react'
import './School_Nav.css'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const School_Nav = () => {
  const dropdown = useRef()

  const [count, setcount] = useState(1)
  // dropdown.current.style.display = 'none';

  const history = useHistory();

  const mouseenter = ()=>{
    console.log('mouse enter')
    setcount((count) =>  count+1);
    console.log(count)
    if(count%2 == 0)
    {
      dropdown.current.style.display = 'none';
    }
    else
    {
      dropdown.current.style.display = 'block';
    }
  }

  const loggingout = async()=>{
    console.log('logging out')
    if(window.confirm('Do you want to logout?'))
    {
      axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/schoollogout`).then((result)=>{
        console.log(result)
        history.push('/')
      })
    
    }
  }



  return (
    <div className='nav_container'>
    <div className='nav_holder' style={{position : 'absolute'}}>
      <a href='/'> NDEAR Home</a>
      <a href='#'>Ecosystem</a>
      <a href='#'>Events</a>
      <Link to='/school/createuser'>Create Account for Staff</Link>
      <Link to='/school/teachers'>Registered Staff</Link>
      <a onClick={mouseenter}  href='#'>More {count%2 == 0 ? <i class='fas fa-caret-up' style={{'font-size':'16px'}}></i> : <i class='fas fa-caret-down' style={{'font-size':'16px'}}></i>} </a>
      <a onClick={loggingout} href='#'>Logout</a>
    </div>
    {count%2 == 0 ? <div ref={dropdown} id='dropdown'>
        <ul style={{'list-style' : 'none', 'padding-left' : '0px','padding-bottom' : '0px'}} >
          <li><a href="/school/attendence">Show Attendance</a></li>
          <hr style={{color:"white"}}/>
          <li><a href="/school/mealconsumption">Show Meal Cosumption</a></li>
          <hr style={{color:"white"}}/>
          <li><a href="/school/resources">Show Resources</a></li>
        </ul>
    </div>: ""}
</div>
  )
}

export default School_Nav