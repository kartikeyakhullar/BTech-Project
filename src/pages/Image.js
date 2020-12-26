import React from 'react';
import Card from 'react-bootstrap/Card';

function Image({name,image}) {
    return (
        <Card style={{ width: '18rem', marginBottom : '10px' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Image
