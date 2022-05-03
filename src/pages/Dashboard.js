import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {verification} from '../services/authServices'


function Dashboard(){
    const [verified, setVerified] = useState(false)
    const redirect = useNavigate()

    const verify = async()=>{
        await verification()
        .then(res => !res.data && redirect('/'))
        .catch(err => alert(err))
        setVerified(true)
    }

    useEffect(()=>{
        verify()
    },[])


    return(
        verified? 
        <div>
            <h1>Dashboard</h1>
        </div>
        :
        <div>
            
        </div>
    )
}

export default Dashboard