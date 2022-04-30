import axios from 'axios'
import {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom'
import {profileCreate} from '../services/authServices'

function SignUp(){
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    let redirect = useNavigate()

    console.log(user ,password)

    const createUser= async(e)=>{
        e.preventDefault()
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
        <Container >
            <h1>Sign Up</h1>
            {/* <Form onSubmit={createUser}>
                <Form.Group>
                    <Form.Label>username</Form.Label>
                    <Form.Control 
                        type="text"
                        value={user}
                        onChange={(e)=> setUser(e.target.value)}
                     />
                </Form.Group>
                <Form.Group>
                    <Form.Label>password</Form.Label>
                    <Form.Control 
                        type="password" 
                        value ={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button className="mt-3" variant="secondary" type="submit">Log In</Button>
            </Form> */}
            <form onSubmit={createUser}>
                <input
                    type="text"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    style={{display: "block"}}
                />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    style={{display: "block"}}

                />
                <Button className="mt-3" variant="secondary" type="submit">Log In</Button>
            </form>
        </Container>
    )
}

export default SignUp