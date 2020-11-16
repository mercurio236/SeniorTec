import React, { useState } from 'react';
import { Button, Container, Col, Row, Carousel, Card, CardDeck, Modal } from 'react-bootstrap';
import "../Home/home.css";
import Logo from '../../img/logoMenor.png';
import LogoFooter from '../../img/logoBrangoFooter.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';



function Home() {
    const [acaoModal, setAcaoModal] = useState(false);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState([]);
    const [categorias, setCategorias] = useState([
        { id: 1, titulo: 'primeiro', info: 'aqui é o primeiro' },
        { id: 2, titulo: 'segundo', info: 'aqui é o segundo' },
        { id: 3, titulo: 'terceiro', info: 'aqui é o terceiro' }
    ])



    function abrirModal(categoria) {
        setAcaoModal(true)
        setCategoriaSelecionada(categoria)


    }


    function fechaModal() {
        setAcaoModal(false)
    }



    return (
        <div>
            <Container fluid="md" className="home-img">
                <Row >
                    <Col  >
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className='d-block w-20'
                                    src={Logo}
                                    alt="Primeira imagem"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className='d-block w-20'
                                    src={Logo}
                                    alt="Primeira imagem"
                                />

                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className='d-block w-20'
                                    src={Logo}
                                    alt="Primeira imagem"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>

            <Container >
                <Col  >
                    <Row >
                        <div >
                            <h1 className="titulo-sobre">Para você</h1>
                            <div>
                                <CardDeck>
                                    {categorias.map((categoria) => (
                                        <Card>
                                            <Card.Img variant="top" src={Logo} />
                                            <Card.Body>
                                                <Card.Title>{categoria.titulo}</Card.Title>
                                                <Card.Text>
                                                    {categoria.info}
                                                </Card.Text>
                                                <Button onClick={() => { abrirModal(categoria) }} variant="outline-dark" className="button-left">Mais</Button>
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </CardDeck>


                            </div>
                        </div>
                    </Row>
                </Col>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1 className="titulo-sobre">Estamos focados na evolução</h1>
                            <div className="home-img">
                                <img src={Logo} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1 className="titulo-sobre">Nos acompanhe em nossas redes</h1>
                        </div>
                        <div className="redes-sociais">
                            <FontAwesomeIcon icon={faLinkedinIn} size="4x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                            <FontAwesomeIcon icon={faYoutube} size="4x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                            <FontAwesomeIcon icon={faInstagram} size="4x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                            <FontAwesomeIcon icon={faFacebook} size="4x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                            <FontAwesomeIcon icon={faTwitter} size="4x" style={{ marginLeft: '3%', cursor: 'pointer' }} />

                        </div>
                    </Col>
                </Row>
            </Container>

            <Modal show={acaoModal} onHide={fechaModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{categoriaSelecionada.titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{categoriaSelecionada.info}</p>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-dark" onClick={fechaModal}>Sair</Button>
                </Modal.Footer>

            </Modal>

            <footer className="footer">
                <div className="logoFooter">
                    {/* <img src={LogoFooter} width="20" height="20" /> */}
                    <h3>SeniorTec®</h3>
                </div>
            </footer>
        </div>
    );

}

export default Home;