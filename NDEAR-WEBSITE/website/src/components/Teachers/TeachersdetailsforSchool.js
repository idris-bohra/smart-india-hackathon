import React,{useState,useEffect} from 'react'
import {useSelector} from "react-redux";
import {useHistory} from 'react-router-dom'
import School_Nav from '../School NavBar/School_Nav';
import axios from 'axios'
import './LoggedInTeachers.css'


const TeachersdetailsforSchool = () => {


    const [teacherData,setteacherData]=useState(null);
    const [loading,setLoading]=useState(true);

    const history = useHistory();
    // const mystate = useSelector((state) => state.loginreducerforschool.detail);

    useEffect(()=>{
        const teacherData= async()=>{
            const data = await axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/registeredTeachersforschool`);
            if(data.data.user == false)
            {
              history.push('/schoollogin')
            }
            else
            {

              setteacherData(data.data.details);
              // console.log(data.data)
              setLoading(false);
            }
        }
        teacherData();
    },[])

   


  return (
    <>
    <School_Nav/>
    {loading? <div style={{display:'flex' ,width: "100%",height: "50vh", flexDirection:'row', alignItems:"center", justifyContent:'space-around'}}>
        <h1>LOADING...</h1>
      </div>:teacherData.length==0 ? <div style={{display:'flex' ,width: "100%",height: "50vh", flexDirection:'row', alignItems:"center", justifyContent:'space-around'}}>
        <h1>NO UPDATED DATA</h1>
      </div> : <div className='table_table'>  
    <h2>Teachers</h2>
        <table>
        <tr>
             <th>S No.</th>
             <th>School Id</th>
             <th>School Name</th>
             <th>Teacher Name</th>
             <th>Teacher Id</th>
             <th>Teacher Mail</th>
             <th>Role</th>
             <th>Class </th>
             <th>section</th>  

             </tr>

             {teacherData.map((el,key)=>{
            return <tr key={el._id}>

            <td>{key+1}</td>
            <td>{el.schoolid}</td>
            <tb>{el.schoolname}</tb>
            <td>{el.teachername}</td>
            <td>{el.teacherid}</td>
            <td>{el.teachermail}</td>
            <td>{el.role}</td>
            {el.role === 'attendence' ? <>
            <td>{el.forclass}</td>
            <td>{el.section}</td></> : ""}

            
            </tr>
        })}
             
         
        </table>
        </div>}
    </>
  )
}

export default TeachersdetailsforSchool