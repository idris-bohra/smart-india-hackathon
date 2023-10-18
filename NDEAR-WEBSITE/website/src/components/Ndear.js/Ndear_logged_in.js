import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './Ndear_logged_in.css'
import Navbar from '../Navbar/Navbar';
import { useHistory } from "react-router-dom";



const Ndear_logged_in = () => {
    const [school,setSchool]=useState();
    const [check,setcheck]=useState(false);
    const [loading,setLoading]=useState(true);
    const [ndearAdmin, setndearAdmin] = useState();

    const history = useHistory();

    useEffect(()=>{
        let fetchSchool =async ()=>{
            const data = await axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/getallschools`);

            if(data.data.user == false)
            {
                console.log('admin is false')
                history.push('/adminlogin')
            }
            else
            {
                // console.log('wroking')
                // console.log("data = ",data)
                // console.log(data.data.data);
                setSchool(data.data.data)
                setLoading(false);
                // console.log(data.data.ndearadmin);
                setndearAdmin(data.data.ndearadmin);
            }
        }
        fetchSchool()
    },[])


  return (
    <>
    <Navbar/>
    {loading?<div style={{display:'flex' ,width: "100%",height: "50vh", flexDirection:'row', alignItems:"center", justifyContent:'space-around'}}>
        <h1>LOADING...</h1>
      </div>:<div className='NdearLoggedIN_heading'>
            <p>ADMIN ID : {ndearAdmin.adminid}  <span className='NdearLoggedIN_span'>TOKEN : {ndearAdmin._id}</span></p>
            </div>}



<div className='table_div'>
    {loading?<dir></dir>:<div>{
         <table className='ndear_table'>
         <tr>
             <th>S No.</th>
             <th>Dise Code</th>
             <th>School Name</th>
             <th>Principal Name</th>
             <th>Classes from/to</th>
             <th>State</th>
             <th>Details</th>
         </tr>
        {school.map((el,key)=>{
            return <tr key={el._id}>

            <td>{key+1}</td>
            <td>{el.disecode}</td>
            <tb>{el.schoolname}</tb>
            <td>{el.Principalname}</td>
            <td>{el.startclass}-{el.endclass}</td>
            <td>{el.state}</td>
            <td>
            <Link to={`/ndear/school/attendance/${el.disecode}`} ><button className='detbut'>Attendance</button></Link>
            <Link to={`/ndear/school/middaymealrecords/${el.disecode}`} ><button className='detbut'>Midday-Meal Records</button></Link>
            <Link to={`/ndear/school/resources/${el.disecode}`}><button className='detbut'>Resource</button></Link>           
            <Link to={`/ndear/school/teachers/${el.disecode}`}><button className='detbut'>Teachers</button></Link>           
            </td>
            </tr>
        })}
        </table>
    }</div>}
    </div>
    </>
  )
}

export default Ndear_logged_in