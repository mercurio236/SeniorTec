import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import '../Sobre/sobre.css';
import Logo from '../../img/logoMenor.png';
import ImgSobre from '../../img/sobre.png'
import fundador from '../../img/fundador.png';

export default function Sobre() {
    return (
        <div>
            <Container fluid="sm">
                <Row>
                    <Col className="historia" sm={12}>
                        <Card className="cardHistoria">
                            <Card.Body>
                                <Card.Title>Historia</Card.Title>
                                <Card.Text>
                                    <p>Em 2019 foi idealizado uma empresa onde fosse possível criar qualquer
                                    tipo de tecnologia. Onde todos na
                                    empresa tivessem a liberdade para poder criar e idealizar
                                    novas tecnologias. Varias empresas no Brasil não estão em busca de novas
                                    tecnologias, estão em busca de profissionais para melhorar as que já existem,
                                    claro que aqui com a gente não é muito diferente nessa parte porém estamos mais focado no
                                    futuro, queremos melhorar o mundo em que vivemos.</p>
                                    <p>Hoje estamos iniciando nossa jornada, mas espero que em breve estejamos longe.</p>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br></br>

                        <Card>
                            <Card.Body>
                                <Card.Title>Sobre</Card.Title>
                                <Card.Img src={ImgSobre} />
                                <Card.Text>
                                    <h3>Ideias</h3>
                                    <p>Trabalhos com ideias, ideias fazem o mundo girar e traz muitas facilidades para a população.
</p>
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
                        <h1 className="fundadores">Fundador</h1>
                        <div className="fundadores">
                            <div className="socio">
                                <Image src={fundador} width="300" height="300" rounded />
                            </div>
                            <h4>Arley Souto</h4>
                        </div>
                        <Card>
                            <Card.Body>
                                <Card.Title>Fundador</Card.Title>
                                <Card.Text>
                                    <p>Meu nome é Arley Souto, sou formado pela universidade UDF. Estou sempre em busca de novos desafios.</p>
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