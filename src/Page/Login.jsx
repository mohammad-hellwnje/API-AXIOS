import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email , setemail] = useState("")
  const [password , setpassword] = useState("")
  const navigate = useNavigate()
  // const [image , setimage] = useState(null)
  function send (event) {
    event.preventDefault()
    axios.post("http://127.0.0.1:8000/api/login" , 
     {
      email : email,
      password : password
     }
    )
    .then(res => {
      localStorage.setItem("token" , `Bearer ${res.data.token}`)
      navigate("/")
    })
    .catch(error => console.log(error))

  }

  return (
    <div>
        <h1>LOGIN</h1>
        <form onSubmit={(event)=>send(event)}>
            <input type="email" placeholder='email' onChange={(event) =>setemail(event.target.value)} />
            <input type="password" placeholder='password'  onChange={(event) =>setpassword(event.target.value)} />
            {/* <input type="file"  onChange={(event) =>setimage(event.target.files[0])}/> */}
            <input type="submit" value="send"/>
        </form>
    </div>
  )
}

export default Login