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
                    <Col>
                        <h1 className="fundadores">Fundadores</h1>
                        <div className="fundadores">
                            <div className="socio">
                                <Image src={Logo} width="300" height="300" rounded />
                            </div>
                            <h4>Arley Souto</h4>
                        </div>
                        <Card>
                            <Card.Body>
                                <Card.Title>Titulo</Card.Title>
                                <Card.Text>
                                    Texto
                                </Card.Text>
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