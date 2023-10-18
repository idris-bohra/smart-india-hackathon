import React, {useEffect, useState}   from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './NdearScannedattendence.css'
import Navbar from '../Navbar/Navbar';
import axios from 'axios'
import txt from '../../images/textfile.png'
import { useParams,useHistory } from 'react-router-dom'

export default function ShowMealforNdear() {

  const history= useHistory();
  const [mystate, setmystate] = useState()
  const [attendence, setattendence] = useState(false)
  const [loading, setloading] = useState(true)

  const params  = useParams();


  useEffect(() => {
  
    async function fun(){

        axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/getMealForNdear/${params.id}`,  {headers : {"Content-Type" : "application/json" }}).then((result)=>{

        console.log('result = ', result)
        if(result.data == null)
        {
            setattendence(false);
            setloading(false);
        }
        else
        {
          if(result.data.user == false)
          {
            history.push('/schoollogin')
          }
          else
          {

            console.log(result.data)
            setmystate(result.data)
            setattendence(true);
            setloading(false);
          }

        }
      }).catch((err)=> {

        console.log(err)

      });
    }

    fun();
    
}, [])
  
  
  return (
    <div>
      {loading==false ?  attendence==false ? <div style={{display:'flex' ,width: "100%",height: "50vh", flexDirection:'row', alignItems:"center", justifyContent:'space-around'}}>
        <h1>NO MEAL RECORD UPDATED</h1>
      </div> : <div className='main_div'>
    <div className='main_div_wrapper'>
    <div className='main_div_container'>
          <h3 className='headd'>School Code: {mystate.disecode}</h3>
          <br/>
          <h3 className='headd'>Teacher Id: {mystate.teacherid}</h3>
          <br/>
       </div>
    <div className='attendance_links'>
      {mystate.meal.map((el,key)=>{
          return(<>
          <div>
            <img key={key} style={{width:'150px', height:'150px'}} src={txt} alt=""/>
            <h6><a className={'linkname'} target="_blank" href={el}>Meal {key+1}</a></h6>
          </div>
          </>)
      })}
    </div>
    </div>
    </div> : <div style={{display:'flex' ,width: "100%",height: "50vh", flexDirection:'row', alignItems:"center", justifyContent:'space-around'}}>
        <h1>LOADING...</h1>
      </div>}
  </div>
  )
}
