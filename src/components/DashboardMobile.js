import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import './styles.css'

function DashboardMobile({user, posts}){
    return(
        <div className='mobile-container'>

{/* HEADER */}

            <Container className=" h-100" fluid>
                <Container  className="heading-portion bg-secondary d-flex flex-row-reverse align-items-center" fluid>
                <Dropdown >
                    <Dropdown.Toggle style={{boxShadow: 'none'}} className="bg-transparent border-0" id="dropdown-basic" >
                        {user}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{backgroundColor: "#4f4f4f", textAlign:"center"}}>
                        <Dropdown.Item  className="text-light px-0" href="http://localhost:3000/">Log Out</Dropdown.Item>
                        {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                    </Dropdown.Menu>
                    </Dropdown>
                </Container>
                
{/* BODY-SECTION ----this should become a carousel */}

                <Container className="body-portion bg-transparent text-light d-flex flex-column justify-content-center" fluid>
       
                    <div  style={{  overflow: "scroll"}}>
                        {
                            posts && posts.map(post => {
                                return(
                                    <div key={post.id}  style={{borderBottom: "1px solid white", padding: "1rem"}}>
                                        <div style={{display:"flex", alignItems: "baseline"}}>
                                            <h5 style={{marginRight: "0.75rem"}}>{user}</h5>
                                            <h6 >{post.title}</h6>
                                        </div>

                                        <p>{post.body}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                </Container>

{/* FOOTER-SECTION */}

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