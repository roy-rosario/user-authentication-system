import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {profileCreate} from '../services/authServices'
import UserPassword from '../components/UserPasswordComponent'

function SignUp(){
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const redirect = useNavigate()
    const [show, setShow] = useState(false)
    const [warning, setWarning] = useState('')

    const handleShow = () =>{setShow(true)}
    const handleClose = () =>{setShow(false)}


    const createUser= async(e)=>{
        e.preventDefault()
        
        const response = await profileCreate(user, password)

        
        if(typeof response === 'object'){
            alert(response.message+" press okay to be redirected to log in page")
            setTimeout(()=>{
                redirect('/')
            }, 2000)
        }
        else{
            setWarning(response)
            handleShow()
            return
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
            modalBool={show}
            modalProcedure ={handleClose}
            modalWarning={warning}
        />
    )
}

export default SignUp