import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import './styles.css'

function DashboardMobile(){
    return(
        <div className='mobile-container'>
            <Container className=" h-100" fluid>
                <Container  className="heading-portion bg-secondary d-flex flex-row-reverse align-items-center" fluid>
                <Dropdown >
                    <Dropdown.Toggle style={{boxShadow: 'none'}} className="bg-transparent border-0" id="dropdown-basic" >
                        username
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{backgroundColor: "#4f4f4f", textAlign:"center"}}>
                        <Dropdown.Item  className="text-light px-0" href="http://localhost:3000/">Log Out</Dropdown.Item>
                        {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                    </Dropdown.Menu>
                    </Dropdown>
                </Container>
                <Container className="body-portion bg-transparent text-light  d-flex justify-content-center align-items-center" fluid>
                    <h3>Content goes here</h3>
                </Container>
                <Container className="footer-portion bg-secondary text-light d-flex justify-content-between align-items-center px-5" fluid>
                    <span className="material-symbols-outlined">chat</span>
                    <span className="material-symbols-outlined">home</span>
                    <span className="material-symbols-outlined">group</span>
                </Container>
            </Container>
        </div>
    )
}

export default DashboardMobile