import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {verification} from '../services/authServices'


function Dashboard(){
    const redirect = useNavigate()

    const verify = async()=>{
        await verification()
        .then(res => !res.data && redirect('/'))
        .catch(err => alert(err))
    }

    useEffect(()=>{
        verify()
    },[])


    return(
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard