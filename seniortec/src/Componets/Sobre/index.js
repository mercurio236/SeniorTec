import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import '../Sobre/sobre.css';
import Logo from '../../img/logoMenor.png';

export default function Sobre() {
    return (
        <div>
            <Container fluid="sm">
                <Row>
                    <Col className="historia">
                        <Card className="cardHistoria">
                            <Card.Body>
                                <Card.Title>Historia</Card.Title>
                                <Card.Text>
                                    Historia aqui
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <br></br>

                        <Card>
                            <Card.Body>
                                <Card.Title>Sobre</Card.Title>
                                <Card.Text>
                                    Texto aqui
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <br></br>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col className="fundador">
                        <h1>Fundador</h1>
                        <Image src={Logo} width="300" height="300" rounded />
                    <Card className="fundador">
                        <Card.Body>

                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            <footer className="footer">
                <div className="logoFooter">
                    {/* <img src={LogoFooter} width="20" height="20" /> */}
                    <h3>SeniorTec®</h3>
                </div>
            </footer>
        </div>
    )
}