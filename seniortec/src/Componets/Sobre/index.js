import React from 'react';
import { Container, Row, Col, Card, Image, CardDeck } from 'react-bootstrap';
import '../Sobre/sobre.css';
import Logo from '../../img/logoMenor.png';
import ImgSobre from '../../img/sobre.png'
import fundador from '../../img/fundador.jpg';
import Socio from '../../img/Socio.jpeg';
import Colaboradora from '../../img/Colaboradora.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Sobre() {
    return (
        <div>
            <Container fluid="sm">
                <Row>

                    <Col sm={12}>

                        <Card.Img src={ImgSobre} style={{ marginBottom: '5%', marginTop: '5%' }} />
                        <br></br>
                        <Card>
                            <Card.Body>
                                <Card.Title>Sobre</Card.Title>
                                <Card.Text>
                                    Em 2019 foi idealizado uma empresa onde fosse possível criar qualquer
                                    tipo de tecnologia. Onde todos na
                                    empresa tivessem a liberdade para poder criar e idealizar
                                    novas tecnologias. Varias empresas no Brasil não estão em busca de novas
                                    tecnologias, estão em busca de profissionais para melhorar as que já existem,
                                    claro que aqui com a gente não é muito diferente nessa parte porém estamos mais focado no
                                    futuro, queremos melhorar o mundo em que vivemos.
                                    <p>Hoje estamos iniciando nossa jornada, mas espero que em breve estejamos longe.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br></br>
                    </Col>
                </Row>
            </Container>

            <Container fluid='sm'>
                <Row>
                    <Col sm={12}>
                        <h1 className="fundadores">Equipe</h1>

                        <div className="area">
                            <CardDeck>
                                <Card>
                                    <Card.Img src={Socio} variant="top" />
                                    <Card.Body>
                                        <Card.Title>CTO</Card.Title>
                                        <Card.Text>
                                            <b>Silvio Júnior</b> entusiastas das melhores tecnologias, sempre animado em aprender novos métodos
                                             para assim poder aplicar em um produto de qualide.
                                            Sempre disposto a qualquer desafio, basta lançar o desafio e esperar o resultado incrível.

                                        </Card.Text>
                                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                                        <FontAwesomeIcon icon={faYoutube} size="2x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                                        <FontAwesomeIcon icon={faInstagram} size="2x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                                        <FontAwesomeIcon icon={faFacebook} size="2x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                                        <FontAwesomeIcon icon={faTwitter} size="2x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img src={fundador} variant="top" />
                                    <Card.Body>
                                        <Card.Title>CEO</Card.Title>
                                        <Card.Text>
                                            <b>Arley Souto</b> sempre em busca de novas tecnologias e ideias que possam mudar o mundo.
                                            A facilidade faz qualquer homem chegar longe.
                                            Todas ideias são bem vindas, se isso faz crescer e ir longe aposte na sua ideia e vá
                                             em frente sem medo de dar errado, só dará errado se você desistir.

                                        </Card.Text>
                                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                                        <FontAwesomeIcon icon={faYoutube} size="2x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                                        <FontAwesomeIcon icon={faInstagram} size="2x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                                        <FontAwesomeIcon icon={faFacebook} size="2x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                                        <FontAwesomeIcon icon={faTwitter} size="2x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img src={Colaboradora} variant="top" />
                                    <Card.Body>
                                        <Card.Title>COO</Card.Title>
                                        <Card.Text>
                                            <b>Luiza Cezário</b> um projeto bem organizado é um produto bem feito, sempre devemos focar na organização
                                             dessa forma podemos gerar um projeto de qualidade.
                                                O foco de tudo é a organização e a disciplina,
                                                devemos nos esforçar todos os dias para que possamos entregar algo de qualidade.
                                        </Card.Text>
                                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                                        <FontAwesomeIcon icon={faYoutube} size="2x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                                        <FontAwesomeIcon icon={faInstagram} size="2x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                                        <FontAwesomeIcon icon={faFacebook} size="2x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                                        <FontAwesomeIcon icon={faTwitter} size="2x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}