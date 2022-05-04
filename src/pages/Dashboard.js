import DashboardMobile from '../components/DashboardMobile'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {verification} from '../services/authServices'
import { getPosts } from '../services/dataServices'
import { get } from 'express/lib/request'


function Dashboard(){
    const [verified, setVerified] = useState(false)
    const [posts, setPosts] = useState([])
    const redirect = useNavigate()

    const verify = async()=>{
        await verification()
        .then(res => !res.data && redirect('/'))
        .catch(err => alert(err))
        setVerified(true)
    }

    const retrievePosts = async() =>{
        await getPosts()
        .then(res => setPosts(res))
        .catch(err => alert(err))
    }

    useEffect(()=>{
        verify()
        retrievePosts()
    },[])

    console.log(posts)

    return(
        verified? 
        <DashboardMobile />
        :
        <div>

        </div>
        //the second div is so that the browser doesn't display the dashboard to the user in the cases that the API call delays for a second
    )
}

export default Dashboard