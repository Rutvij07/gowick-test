import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function Error404 () { // This compoent is called when there is unknown route
    return (
        <Container>
            <h5 className="header mt-5">
               Seems you landed on wrong page
            </h5>
            <Link to={`/`}> 
            <p>
                <Button  variant="success">Home</Button>
            </p>
            </Link>
        </Container>
    )
}

export default Error404;
