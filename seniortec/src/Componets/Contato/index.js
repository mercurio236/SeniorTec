import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';

import '../Contato/contato.css';

export default function Contato() {
    const [nome, setNome] = useState('');

    function enviarEmail() {
        return
    }
    return (
        <div>
            <Container className="area">
                <Row>
                    <Col sm={6}>
                        <h1 style={{ textAlign: 'center' }}>Mande um E-mail</h1>
                        <Form className="group">
                            <Form.Group>
                                <Form.Control className="group" type="text" placeholder="Nome Copleto" autoFocus />
                                <Form.Control className="group" type="email" placeholder="E-mail" />
                                <Form.Control className="group" type="number" placeholder="Celular" />
                                <Form.Control className="group" placeholder="Deixe sua mensagem" as="textarea" row={3} />
                            </Form.Group>
                            <Button variant="outline-dark" type="submit">Enviar</Button>
                        </Form>
                    </Col>
                    <Col sm={6}>
                        <h1 style={{ textAlign: 'center' }}>Nossa Localização</h1>
                        <Card>
                            <Card.Body>
                                <iframe style={{width:'100%', height:'100%'}} src="https://www.google.com/maps/embed?pb=!1m19!1m12!1m3!1d61439.44132701173!2d-47.93005884587925!3d-15.752986303588056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m4!3e3!4m0!4m1!2sSCLRN%20712%20Bl.%20A%20-%20LJ.%2024%20-%20Asa%20Norte%2C%20Bras%C3%ADlia%20-%20DF%2C%2070760-511!5e0!3m2!1spt-BR!2sbr!4v1605295760753!5m2!1spt-BR!2sbr" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </Card.Body>
                        </Card>
                        <div className="area">
                            <h5>Telefone: (61) 99234-2212</h5>
                            <h5>E-mail: seniortec@seniortec.com</h5>
                        </div>
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