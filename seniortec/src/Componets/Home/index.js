import React, { useState, useEffect } from 'react';
import { Button, Container, Col, Row, Carousel, Card, CardDeck, Modal } from 'react-bootstrap';
import "../Home/home.css";
import firebase from '../../firebaseConnection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import ImgInt from '../../img/ideias.png';
import ImgEvo from '../../img/evolucao.png';
import CodigInt from '../../img/Codigo-inteligente.png';
import ImgFoco from '../../img/foco.png';
import Footer from '../../footer';




function Home() {
    const [acaoModal, setAcaoModal] = useState(false);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState([]);
    const [categorias, setCategorias] = useState([])

    useEffect(() => {

        consulta();
    }, [])

    async function consulta() {
        var db = firebase.firestore();
        db.collection('titulos')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    setCategorias(prev => ([...prev, doc.data()]))
                })
            })
        setCategorias([])
    }



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
                        <Carousel style={{ width: '100%' }}>
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
                                            <Card.Img variant="top" src={categoria.img} />
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
                                <Card.Img src={ImgFoco} />
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
                    <Button variant="outline-success" href="/contato">Entrar em contato</Button>
                    <Button variant="outline-dark" onClick={fechaModal}>Sair</Button>
                </Modal.Footer>

            </Modal>

            
        </div>
    );

}

export default Home;