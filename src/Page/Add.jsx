import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Add() {
    const navigate = useNavigate()
    const [name, setname] = useState("")
    const [price, setprice] = useState("")
    const [image, setimage] = useState(null)
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login  ")
        }

    }, [])
    function send(event) {
        event.preventDefault()
        axios.post("http://127.0.0.1:8000/api/items",
            {
                name: name,
                price: price,
                image: image
            }, {
            headers: {
                Authorization: localStorage.getItem("token"),
                "Content-Type": "multipart/form-data"
            }
        }
        )
            .then(res => {
                console.log(res.data)
                navigate("/")
            })
            .catch(error => console.log(error))

    }
    return (
        <div>
            <h1>Add item</h1>
            <form onSubmit={(event) => send(event)}>
                <input type="text" placeholder='name' onChange={(event) => setname(event.target.value)} />
                <input type="text" placeholder='price' onChange={(event) => setprice(event.target.value)} />
                <input type="file" onChange={(event) => setimage(event.target.files[0])} />
                <input type="submit" value="send" />
            </form>
        </div>
    )
}

export default Add