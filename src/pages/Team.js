import React from 'react'
import Image from './Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { members } from './members';

function Team() {
    return (
        <>
        <h1 className="team"> Team </h1>
        <Container>
            <Row>
                <Col />
                <Col><Image name={members[0].name} image={members[0].image} /> </Col>
                <Col><Image name={members[1].name} image={members[1].image} /></Col>
                <Col><Image name={members[2].name} image={members[2].image} /></Col>
                <Col />
            </Row>
            <Row>
                <Col /><Col />
                <Col><Image name={members[3].name} image={members[3].image} /></Col>
                <Col /><Col />
            </Row>
        </Container>
        </>
    )
}

export default Team;
