import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {jsonwebtoken} from 'jsonwebtoken'

function Dashboard(){
    const redirect = useNavigate()
    // const jwt = jsonwebtoken

    // const verify =() => {
    //     jwt.verify(localStorage.getItem("token"), process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
    //         if(err) return null
    //         return true
    //     })
    // }

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            redirect("/")
        }
    },[])

    return(
        <div>
            <h1>This is the Dashboard</h1>
        </div>
    )
}

export default Dashboard