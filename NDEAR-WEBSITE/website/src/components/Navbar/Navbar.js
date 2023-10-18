import React, {useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom'
import './Navbar.css'
import axios from 'axios'

const Navbar = () => {

  const [check, setcheck] = useState(false)
  const [check2, setcheck2] = useState(false)
  const history = useHistory();
  useEffect(() => {
    
    async function fun(){
      await axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/checkloginforNdear`).then(async (result)=>{

        console.log(result)
        setcheck(result.data.user)

        if(result.data.user==false)
        {
          await axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/checkloginforschool`).then((result)=>{
            console.log(result)
            setcheck2(result.data.user)
          }).catch((err)=>{
            console.log(err)
          })
        }

      }).catch((err)=> {

        console.log(err)

      });
    }
    fun();
  
   
  }, [])


  const logoutforNdear = ()=>{
    console.log('logging out')
    let checking = window.confirm('Do you want to logout?')
    

    if(checking==true)
    {

      axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/logoutNdear`).then((result)=>{
        console.log('logging out result = ', result)
        window.location.reload();
      }).catch((err)=>{
        console.log(err)
      })
    }
  }

  const logoutforschool = async()=>{
    console.log('logging out for school')

    if(window.confirm('Do you want to logout?'))
    {
      axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/schoollogout`).then((result)=>{
        console.log(result)
        window.location.reload();
        history.push('/')
      })
    
    }

  }
  

  return (
    <div className='nav_container'>
        <div className='nav_holder'>
        <a href='/'>Home</a>
        <a href='#'>NDEAR Projects</a>
        <a href='#'>Ecosystem</a>
        <a href='#'>Events</a>
        {check == false && check2==false ? <a href='/adminlogin'>NDEAR Login</a> : ""}
        {check == false && check2==false ? <a href='/schoollogin'>School Login</a> : ""}
        {check == true && check2==false ?  <a href='/ndear/schools'>Schools</a> : ""}
        {check == false && check2==true ?  <a href='/schoolhome'>Home Page</a> : ""}
        {check == true && check2==false ? <a onClick={logoutforNdear} href='#'>Admin Logout</a> : ""}
        {check == false && check2==true ? <a href='#' onClick={logoutforschool}>Logout</a> : ""}
        </div>
    </div>
  )
}

export default Navbar