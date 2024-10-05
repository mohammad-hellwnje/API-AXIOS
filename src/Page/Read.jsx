import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Read() {
  const navigate = useNavigate()
  const [item , setitem] = useState()
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login  ")
    }
    axios.get ("http://127.0.0.1:8000/api/items" , {
      headers : {
        Authorization : localStorage.getItem("token")
      }
    })
    .then(res => {
      console.log(res.data)
      setitem(res.data)
    })
  },[])
  return (
    <div>
      <Link to="/add">add</Link>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>image</th>
            <th>name</th>
            <th>price</th>
            <th>action</th>
          </tr>
          <tbody>
            {
              item?.map((element , index)=>{
                return(
                  <tr key={index}>
                    <td>{element.id}</td>
                    <td><img src={element.image_url} alt="" /></td>
                    <td>{element.name}</td>
                    <td>{element.price}</td>
                    <td><button>show</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </thead>
      </table>
    </div>
  )
}

export default Read