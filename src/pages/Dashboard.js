import DashboardMobile from '../components/DashboardMobile'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {verification} from '../services/authServices'
import { getPosts } from '../services/dataServices'
import { get } from 'express/lib/request'


function Dashboard(){
    const [verified, setVerified] = useState(false)
    const [user, setUser] = useState("")
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
        .then(res => {
            setUser(res.username)
            setPosts(res.posts)
        })
        .catch(err => alert(err))
    }

    useEffect(()=>{
        verify()
        retrievePosts()
    },[])


    return(
        verified? 
        <DashboardMobile user={user} posts={posts} />
        :
        <div>

        </div>
        //the second div is so that the browser doesn't display the dashboard to the user in the cases that the API call delays for a second
    )
}

export default Dashboard