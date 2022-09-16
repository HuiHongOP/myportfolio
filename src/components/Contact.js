import{Container,Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { faGithub,faLinkedin,} from "@fortawesome/free-brands-svg-icons"


export const Contact = () =>{

    return(
        <section className='contact' id="contacts">
            <Container>
                <Row className ="text-center">
                <h2>Contact Me</h2>
                <p>Click on the social icons for contact!</p>
                    <Col>
                        <div className ="align-bottom">
                        <a href="https://github.com/HuiHongOP" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon ={faGithub} className="fontIcons"/>
                        </a>
                        <a href="https://www.linkedin.com/in/huihong-op/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon = {faLinkedin} className="fontIcons"/>
                        </a>
                        <a href="mailto: hzheng130@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon = {faEnvelope} className="fontIcons"/>
                        </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}