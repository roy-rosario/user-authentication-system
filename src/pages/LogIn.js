import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {profileAuthenticate} from '../services/authServices'
import UserPassword from '../components/UserPasswordComponent'

function LogIn(){
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const redirect = useNavigate()

    const login = async(e) =>{
        e.preventDefault()
        const result = await profileAuthenticate(user, password)
        if(result){
            localStorage.setItem('token', result.accessToken)
            redirect('/dashboard')
            return
        }
        

    }

    return(
            <UserPassword 
                heading={"Log In"} 
                btnLabel={"Log In"} 
                submit={login} 
                user={user} 
                uProcedure={setUser} 
                password={password} 
                pProcedure={setPassword}
                linkMessage={"Don't have an account? Sign up "}
                linkTarget={"/signup"}
            />
    )
}

export default LogIn