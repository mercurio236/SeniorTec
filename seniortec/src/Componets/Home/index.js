import React, { useState } from 'react';
import { Button, Container, Col, Row, Carousel, Card, CardDeck, Modal } from 'react-bootstrap';
import "../Home/home.css";
import Logo from '../../img/logoMenor.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import ImgInt from '../../img/ideias.png';
import ImgEvo from '../../img/evolucao.png';
import CodigInt from '../../img/Codigo-inteligente.png';
import ImgFoco from '../../img/foco.png';



function Home() {
    const [acaoModal, setAcaoModal] = useState(false);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState([]);
    const [categorias, setCategorias] = useState([
        { id: 1, titulo: 'Adaptação', info: 'Sempre em evolução, automação é nossa prioridade.', modal: '', Logo: ImgEvo },
        { id: 2, titulo: 'Nossas ideias', info: 'Para que possamos melhorar o mundo, nos esforçamos para ter ideias ineditas', modal: '', Logo: ImgInt },
        { id: 3, titulo: 'Projetos', info: 'Todos nossos projeto são feitos pelos melhores profissionais do mercado', modal: '', Logo: CodigInt }
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
                    <Col sm={12} >
                        <Carousel>
                            <Carousel.Item style={{ marginLeft: '14%' }}>
                                <img
                                    className='d-block w-20'
                                    src={ImgInt}
                                    alt="Primeira imagem"

                                />
                            </Carousel.Item>

                            <Carousel.Item style={{ marginLeft: '14%' }}>
                                <img
                                    className='d-block w-20'
                                    src={ImgEvo}
                                    alt="Primeira imagem"
                                />

                            </Carousel.Item>

                            <Carousel.Item style={{ marginLeft: '14%' }}>
                                <img
                                    className='d-block w-20'
                                    src={CodigInt}
                                    alt="Primeira imagem"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>

            <Container >
                <Col sm={12} >
                    <Row >
                        <div >
                            <h1 className="titulo-sobre">Para você</h1>
                            <div>
                                <CardDeck>
                                    {categorias.map((categoria) => (
                                        <Card>
                                            <Card.Img variant="top" src={categoria.Logo} />
                                            <Card.Body>
                                                <Card.Title>{categoria.titulo}</Card.Title>
                                                <Card.Text>
                                                    {categoria.info}
                                                </Card.Text>
                                                <Button onClick={() => { abrirModal(categoria) }} variant="outline-dark" >Mais</Button>
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
                    <Col sm={12}>
                        <div>
                            <h1 className="titulo-sobre">Estamos focados na evolução</h1>
                            <div className="home-img">
                                    <Card.Img src={ImgFoco}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col sm={12}>
                        <div>
                            <h1 className="titulo-sobre">Nos acompanhe em nossas redes</h1>
                        </div>
                        <div className="redes-sociais">
                            <FontAwesomeIcon icon={faLinkedinIn} size="3x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                            <FontAwesomeIcon icon={faYoutube} size="3x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                            <FontAwesomeIcon icon={faInstagram} size="3x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                            <FontAwesomeIcon icon={faFacebook} size="3x" style={{ marginLeft: '3%', cursor: 'pointer' }} />
                            <FontAwesomeIcon icon={faTwitter} size="3x" style={{ marginLeft: '3%', cursor: 'pointer' }} />

                        </div>
                    </Col>
                </Row>
            </Container>

            <Modal show={acaoModal} onHide={fechaModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{categoriaSelecionada.titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{categoriaSelecionada.modal}</p>

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