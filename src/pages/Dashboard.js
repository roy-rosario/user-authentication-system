import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Dashboard(){
    const redirect = useNavigate()

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