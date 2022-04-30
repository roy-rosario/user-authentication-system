import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {profileCreate} from '../services/authServices'
import UserPassword from '../components/UserPasswordComponent'

function SignUp(){
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const redirect = useNavigate()

    console.log(user ,password)

    const createUser= async(e)=>{
        e.preventDefault()
        if(user === "") return alert('username required!')
        if(password === "") return alert('password required!')
        try{
            const response = await profileCreate(user, password)
            console.log(response)
            if(response){
                redirect('/')
            }
        }
        catch{
            alert("could not post user")
        }
        
    }

    return(
        <UserPassword 
            heading={"Create Account"} 
            btnLabel={"sign up"} 
            submit={createUser} 
            user={user} 
            uProcedure={setUser} 
            password={password} 
            pProcedure={setPassword}
            linkMessage={"Already have an account? Log in "}
            linkTarget={"/"}
        />
    )
}

export default SignUp