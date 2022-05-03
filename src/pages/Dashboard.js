import DashboardMobile from '../components/DashboardMobile'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {verification} from '../services/authServices'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'


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
        <DashboardMobile/>
        :
        <div>

        </div>
        //the second div is so that the browser doesn't display the dashboard to the user in the cases that the API call delays for a second
    )
}

export default Dashboard