import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {jsonwebtoken} from 'jsonwebtoken'
import 'dotenv/config'


function Dashboard(){
    // const redirect = useNavigate()
    // const secret = process.env.REACT_APP_ACCESS_TOKEN_SECRET
    // const jwt = jsonwebtoken

    // const verify =() => {
    //     jwt.verify(localStorage.getItem("token"), secret, (err, decoded)=>{
    //         if(err) return "wrong token"
    //         return decoded
    //     })
    // }

    // console.log(verify())

    return(
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard