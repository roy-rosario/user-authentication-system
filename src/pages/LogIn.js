import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {profileAuthenticate} from '../services/authServices'
import UserPassword from '../components/UserPasswordComponent'

function LogIn(){
    const redirect = useNavigate()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const [warning, setWarning] = useState('')

    const handleShow = () =>{setShow(true)}
    const handleClose = () =>{setShow(false)}

    const login = async(e) =>{
        e.preventDefault()
       
        const response = await profileAuthenticate(user, password)
            if(typeof response === "object"){
                localStorage.setItem('token', response.accessToken)
                redirect('/dashboard')
                return
            }
            else{
                setWarning(response)
                handleShow()
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
                modalBool={show}
                modalProcedure ={handleClose}
                modalWarning={warning}
            />
    )
}

export default LogIn