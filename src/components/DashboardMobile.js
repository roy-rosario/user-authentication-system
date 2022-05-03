import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './styles.css'

function DashboardMobile(){
    return(
        <div className='mobile-container'>
            <Container className=" h-100" fluid>
                <Row className="heading-portion secondary "><h3>Welcome</h3></Row>
                <Row className="body-portion bg-dark text-light"><h3>This is the body</h3></Row>
                <Row className="footer-portion secondary "><h3>This is the footer</h3></Row>
            </Container>
        </div>
    )
}

export default DashboardMobile