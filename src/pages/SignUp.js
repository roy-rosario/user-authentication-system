import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {profileCreate} from '../services/authServices'
import UserPassword from '../components/UserPasswordComponent'

function SignUp(){
    const redirect = useNavigate()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const [warning, setWarning] = useState('')
    const [showTemp, setShowTemp] = useState(false)

    const handleShow = () =>{setShow(true)}
    const handleClose = () =>{setShow(false)}


    const createUser= async(e)=>{
        e.preventDefault()
        
        const response = await profileCreate(user, password)
        
        if(typeof response === 'object'){
            setShowTemp(true)
            setTimeout(()=>{
                redirect('/')
            }, 3000)
        }
        else{
            setWarning(response)
            handleShow()
            return
        }
        
    }

    

    return(
        
        !showTemp? 

        <UserPassword 
            heading={"Create Account"} 
            btnLabel={"sign up"} 
            submit={createUser} 
            user={user} 
            uProcedure={setUser} 
            password={password} 
            pProcedure={setPassword}
            bottomMessage={"Already have an account? "}
            linkTarget={"/"}
            linkPhrase={"Log In"}
            modalBool={show}
            modalProcedure ={handleClose}
            modalWarning={warning}
        />

       :

        <div style={{height: "100vh", overflow: "hidden", backgroundColor: "grey"}}>
            <div style={{display: "flex", flexDirection:"flex-column", justifyContent: "center", alignItems:"center", height: "100%"}}>
                <div style={{backgroundColor: "#212529",color: "white", padding:"4rem", width:"50%", borderRadius: "3px"}}>
                    <h1>Automatically redirecting in 3 seconds...</h1>
                </div>
            </div>
        </div>
    )
}

export default SignUp