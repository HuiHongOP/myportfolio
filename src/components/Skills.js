import {Container,Row,Col,ProgressBar} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLaptopCode,faGear,faLanguage,faThumbsUp} from '@fortawesome/free-solid-svg-icons';

export const Skills = () =>{
      return(
        <section className ="skill-section text-center" id = "skills">
            <h2>Skills & Interests</h2>
            <div className ="skills-info mt-3">
                <Row>
                    <Col>
                     <h4>Problem Solving:</h4>
                    <ProgressBar variant="info" now={85} striped animated label = {`85%`}/>
                    </Col>
                </Row>
                <br/><br/>
                <Row>
                    <Col>
                    <h4>Front-End-Development:</h4>
                    <ProgressBar variant="info" now={70} striped animated label = {`70%`}/>
                    </Col>
                </Row>
                <br/><br/>
                <Row>
                    <Col>
                    <h4>Back-End-Development:</h4>
                    <ProgressBar variant="info" now={80} striped animated label = {`80%`}/>
                    </Col>
                </Row>
            </div>
            <section className="m-2 p-5">
                <Container fluid>
                    <Row className="text-center">
                        <Col xs={12} xl={3} md={12} className ="border border-info">
                            <FontAwesomeIcon icon = {faLaptopCode} className="fa-3x"></FontAwesomeIcon>
                            <h3>Programming Languages: </h3>
                            <p>C++, Javascript, Python, Swift</p>
                        </Col>
                        <Col xs={12} xl={3} md={12} className ="border border-info">
                            <FontAwesomeIcon icon = {faGear} className="fa-3x"></FontAwesomeIcon>
                            <h3>Other Tools: </h3>
                            <p>Github, Git, HTML, CSS, Bootstrap, Node.js, Jquery, Visual Studio Code, Virutal Machine, Microsoft Office</p>
                        </Col>
                        <Col xs={12} xl={3} md={12} className ="border border-info">
                            <FontAwesomeIcon icon = {faLanguage} className="fa-3x"></FontAwesomeIcon>
                            <h3>Natural Languages: </h3>
                            <p>English, Fluent Chinese(Mandrain, Chinese, Enping)</p>
                        </Col>
                        <Col xs={12} xl={3} md={12} className ="border border-info">
                            <FontAwesomeIcon icon = {faThumbsUp} className="fa-3x"></FontAwesomeIcon>
                            <h3>Interests: </h3>
                            <p>Software Engineer, Web Development, Badminton, Self-Development, Games</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </section>
    )
}