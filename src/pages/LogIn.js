import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { logIn } from '../services/authServices'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function LogIn(){
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const redirect = useNavigate()

    const login = async(e) =>{
        e.preventDefault()
        const result = await logIn(user, password)
        if(result){
            localStorage.setItem('token', result.accessToken)
            redirect('/dashboard')
            return
        }
        

    }

    return(
        <Container >
        <Form onSubmit={login}>
            <h1>Log In</h1>
            <Form.Group>
                <Form.Label>username</Form.Label>
                <Form.Control className="form-control" type="text" value={user} onChange={e => setUser(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>password</Form.Label>
                <Form.Control className="form-control" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button className="mt-3" variant="secondary" type="submit">Log In</Button>
        </Form>
    </Container>
    )
}

export default LogIn