import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState, useEffect} from 'react';


export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled,seScrolled] = useState(false);


    useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY > 50){
                seScrolled(true);
            }
            else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll",onScroll);

    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
    
    return(
    <Navbar bg="black" expand="lg" className = {scrolled? "scrolled": ""}>
        <Container>
            <Navbar.Brand href="#home"><span className='my-logo'>Hui Hong Zheng</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className = "navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick= {()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick= {()=> onUpdateActiveLink('skills')} >Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}onClick= {()=> onUpdateActiveLink('projects')} >Projects</Nav.Link>
                <Nav.Link href="#contacts" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}onClick= {()=> onUpdateActiveLink('projects')} >Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}