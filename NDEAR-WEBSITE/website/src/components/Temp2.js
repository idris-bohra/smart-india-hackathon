import React from 'react'
import axios from 'axios'
import { useHistory, useLocation ,useParams} from "react-router-dom";



export default function Temp2() {

  const location = useLocation();
  const params2 = useParams();
  console.log(location)
  
  const params = new URLSearchParams(location.search)

  console.log(params.get("idris"))
  console.log(params.get("bohra"))
  console.log(params2.id)
  // console.log(params2.get("idris"))
  // console.log(params2.get("bohra"))

  var idris = params.get("idris")
  var bohra = params.get("bohra")
  
  const fun = async ()=>{
    const data = await axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/hell/${params2.id}`,{params : {'idris' : idris,'bohra' : bohra}})
    console.log(data)
  }

  return (
    <div onClick={fun} >Temp</div>
  )
}
