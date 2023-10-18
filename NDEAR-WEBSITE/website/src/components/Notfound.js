import React from 'react'
import notfound from '../images/404.jpg'

export default function Notfound() {
  return (
    <div style={{}}>
      <div style={{display:'flex' ,width: "100%",height: "50vh", flexDirection:'row', alignItems:"center", justifyContent:'space-around'}}>
        <img style={{width:'auto', height:'50vh'}} src={notfound} alt=""/>
      </div>
    </div>
  )
}
