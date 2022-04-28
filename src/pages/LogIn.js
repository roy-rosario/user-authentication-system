import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function LogIn(){

    const login = (e) =>{
        e.preventDefault()
    }

    return(
        <Container >
        <Form onSubmit={login}>
            <h1>Log In</h1>
            <Form.Group>
                <Form.Label>username</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
                <Form.Label>password</Form.Label>
                <Form.Control type="password" />
            </Form.Group>
            <Button className="mt-3" variant="secondary" type="submit">Log In</Button>
        </Form>
    </Container>
    )
}

export default LogIn