import {Col} from 'react-bootstrap';

export const ProjectCard = ({title,description,imgUrl,linkURL}) =>{
    return(
        <Col sm={6} md={4}>
            <div className = "proj-imgbx">
                <img src={imgUrl} className="image-display"alt="Display"/>
                <div className ="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br/>
                    <a href={linkURL} target="_blank" rel="noopener noreferrer">Link to Github</a>
                </div>
            </div>
        </Col>
    )
}