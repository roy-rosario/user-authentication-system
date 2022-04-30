import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import{Link} from 'react-router-dom'



function UserPassword({heading, btnLabel, submit, user, uProcedure, password, pProcedure, linkMessage, linkTarget}){
    return(
        <div style={{height:"100vh", overflow: "hidden", backgroundColor: "grey"}}>
            <Container className="d-flex flex-column justify-content-center align-items-center h-100" fluid>
                <Form className="bg-dark text-light p-4 w-50" onSubmit={submit} autoComplete="on" >
                    <h1>{heading}</h1>
                    <Form.Group>
                        <Form.Label>username</Form.Label>
                        <Form.Control className="form-control" type="text" value={user} onChange={e => uProcedure(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>password</Form.Label>
                        <Form.Control className="form-control" type="password" value={password} onChange={e => pProcedure(e.target.value)} />
                    </Form.Group>
                    <Button className="mt-3" variant="secondary" type="submit">{btnLabel}</Button>
                </Form>
                <h2 style={{marginTop:"2rem"}}>{linkMessage}<Link style={{color: "#212529"}} to={linkTarget}>here</Link></h2>
            </Container>
        </div>
       
    )
}

export default UserPassword