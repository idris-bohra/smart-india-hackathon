import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import Navbar from '../Navbar/Navbar';
import './ndearSchoolDetails.css'

const NdearSchoolDetails = () => {

    const [schoolMainData, setSchoolMainData]=useState()
    const [loading, setLoading] = useState(true)
    const history = useHistory();
    const {id} = useParams();

    useEffect(()=>{
        const teacherData= async()=>{

            const headData= await axios.post(`http://localhost:${process.env.REACT_APP_SERVER}/singleSchoolForNdear`,{disecode:id})
            console.log('headdata in ndearschool', headData)
            if(headData.data.user == false)
            {
                history.push('/adminlogin')
            }
            else
            {
                setSchoolMainData(headData.data.data);
                setLoading(false);
            }
        }
        teacherData();
    },[])


    
return (
    <>
    <Navbar/>
    {loading?<div>Loading...</div>:<div className='ndear_school_details_wrapper'>
        <div className='ndear_school_details_container'>
            <div>
            <h3>{schoolMainData._id}</h3>
            <h3>{schoolMainData.disecode}</h3>
            <h3>{schoolMainData.schoolname}</h3>
            
            </div>
            <div>
                <h3>{schoolMainData.Principalname}</h3>
                <h3>Classes From/To: {schoolMainData.startclass}-{schoolMainData.endclass}</h3>
                <h3>City:{schoolMainData.city}</h3>
                <h3>State:{schoolMainData.state}</h3>
            </div>
        </div>
        <div className='toggle_btns'>
            <button className='toggle_btns_btns'><Link className='toggle_btns_btns_link' to={`/TeachersDetails/${schoolMainData.disecode}`}>Teacher's Details</Link></button>
            <button className='toggle_btns_btns'><Link className='toggle_btns_btns_link' to={`/Attendance/${schoolMainData.disecode}`}>Attendance</Link></button>
        </div>
    </div>
    }
    
    </>
)
}

export default NdearSchoolDetails