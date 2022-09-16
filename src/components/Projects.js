import {Container,Nav,Row,Col, Tab} from 'react-bootstrap';
import {ProjectCard} from './ProjectCard';
import RLImg from "../assets/img/ReinforcementLearning.png";
import dotaImg from "../assets/img/Dota.gif";
import grammarImg from "../assets/img/Grammar.png";

export const Projects = () =>{
    const projects =[
        {
            title: "Spelling Checker Using Hash Tables",
            description: "Helps to check the spelling of paragraph,sentences,etc.",
            imgUrl: grammarImg,
            linkURL:"https://github.com/HuiHongOP/Spelling-Checker-Using-Hash-Tables",

        },
        {
            title: "Machine Learning",
            description: "Train the agent to do win the tic tac toe and store that data to vs real player",
            imgUrl: RLImg,
            linkURL: "https://github.com/HuiHongOP/Reinforcement-Learning",
        },
        {
            title: "Dota-ID-APP",
            description: "Help Dota Player to Keep in Track of their Status",
            imgUrl: dotaImg,
            linkURL: "https://github.com/HuiHongOP/Dota-ID-App/tree/main/DotaCheck",
        }
    ];
    const backEndProjects = [
        {
            title: "Spelling Checker Using Hash Tables",
            description: "Helps to check the spelling of paragraph,sentences,etc.",
            imgUrl: grammarImg,
            linkURL:"https://github.com/HuiHongOP/Spelling-Checker-Using-Hash-Tables",
            
        },
        {
            title: "Machine Learning",
            description: "Train the agent to do win the tic tac toe and store that data to vs real player",
            imgUrl: RLImg,
            linkURL: "https://github.com/HuiHongOP/Reinforcement-Learning",
        }
    ];
    return(
        <section className ="project" id = "projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <Tab.Container id = "projects-tabs" defaultActiveKey = "first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey ="first">All</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Front-End</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Back-End</Nav.Link>
                                    </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>{projects.map((project,index)=>{
                                        return (
                                            <ProjectCard 
                                            key={index}
                                            {...project}/>
                                        )
                                    })}</Row>
                                </Tab.Pane>
                                {/* <Tab.Pane eventKey="second">
                                    <Row>{backEndProjects.map((project,index)=>{
                                        return (
                                            <ProjectCard 
                                            key={index}
                                            {...project}/>
                                        )
                                    })}</Row>
                                </Tab.Pane> */}
                                <Tab.Pane eventKey="third">
                                    <Row>{backEndProjects.map((project,index)=>{
                                        return (
                                            <ProjectCard 
                                            key={index}
                                            {...project}/>
                                        )
                                    })}</Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className ="background-image-right" src={colorShape2}alt="display-on-right"/> */}
        </section>
    )
}