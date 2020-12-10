import React, { useState, useEffect } from 'react';
import { Button, Container, Col, Row, Card, CardDeck, Modal } from 'react-bootstrap';
import '../Servico/servico.css';
import firebase from '../../firebaseConnection';


import Sua from '../../img/apenasSua.png';


function Servicos() {
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);

    const [sobMedida, setSobMedida] = useState([]);
    const [produtos, setProdutos] = useState([])
    const [sonhos, setSonhos] = useState([]);
    const [facilidades, setFacilidades] = useState([])
    const [medida, setMedida] = useState([
        { id: 0, title: 'Construa', body: 'O mundo não precisa apenas de programadores, precisamos de criatividade. E se você é esse tipo de pessoa que tem essa criatividade venha saber um pouco mais como conseguir criar seu próprio programa.' }
    ])
    const [moreFacilidades, setMoreFacilidades] = useState([])
    const [realizaSonho, setRealizaSonho] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [sobre, setSobre] = useState([])

    useEffect(() => {
        handleServicos();//vai carregar a pagina com as info
        handleFacilidades();
        handleSobre();
        handleSobMedida();
    }, [])


    function handleServicos() {
        let db = firebase.firestore();
        db.collection('servicos')
            .doc('z24Eum0LiRk6j7iSHzfK')
            .get()
            .then(documentSnapshot => {
                setRealizaSonho([documentSnapshot.data()])
            })
    }

    function handleFacilidades() {
        let db = firebase.firestore();
        db.collection('servicos')
            .doc('SjkohglqcKB0L3VfTG96')
            .get()
            .then(documentSnapshot => {
                setMoreFacilidades([documentSnapshot.data()])
            })
    }

    function handleSobMedida() {
        let db = firebase.firestore()
        db.collection('servicos')
            .doc('6gqVf3tBRyry4QpNrGvm')
            .get()
            .then(documentSnapshot => {
                setMedida([documentSnapshot.data()])
            })
    }

    function handleSobre() {
        let db = firebase.firestore();
        db.collection('servicos/ORurw8gTzqXjPUX2cN3T/sobre')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    setSobre(prev => [...prev, doc.data()])
                })
            })
        setSobre([]);
    }



    function modalAbrir(prod) {
        setModalOpen(true)
        setProdutos(prod)
    }

    function modalSonho(sonho) {
        setModal2(true)
        setSonhos(sonho)
    }

    function modalFelicidade(f) {
        setFacilidades(f)
        setModal3(true)
    }

    function SobMedida(sob) {
        setModal4(true)
        setSobMedida(sob)

    }


    function fechaModal() {
        setModalOpen(false)
        setModal2(false)
        setModal3(false)
        setModal4(false)
    }




    return (
        <div>

            <Container>
                <Row>
                    <Col sm={6}>
                        <div className="cardPosition">


                            {
                                realizaSonho.map((sonho) => (
                                    <Card className="bg-dark text-white">
                                        <Card.Img src={sonho.img} />
                                        <Card.ImgOverlay>
                                            <Card.Title>{sonho.titulo}</Card.Title>
                                            <Card.Text>
                                                Conosco tudo pode ser possível, basta nos procurar para que possa acontecer.
                                    </Card.Text>
                                            <Button onClick={() => { modalSonho(sonho) }} variant="outline-warning">Saiba Mais</Button>
                                        </Card.ImgOverlay>
                                    </Card>
                                ))
                            }

                        </div>
                    </Col>

                    <Col sm={6}>
                        {
                            moreFacilidades.map((fa) => (
                                <Card style={{ marginTop: '5%' }}>
                                    <Card.Title style={{ textAlign: 'center', marginTop: '1%' }}>{fa.titulo}</Card.Title>
                                    <Card.Body>
                                        <Card.Img src={fa.img} style={{ marginBottom: '2%' }} />
                                        <Button onClick={() => { modalFelicidade(fa) }} variant="outline-warning">Saiba Mais</Button>
                                    </Card.Body>

                                </Card>
                            ))
                        }
                    </Col>
                </Row>
            </Container>

            <Container fluid="sm">
                <Row>
                    <Col className="backProdutos">
                        <h2 style={{ textAlign: 'center', marginTop: '2%' }}>Produtos</h2>

                        <div className="cardsDeck">
                            {sobre.map((produto) => (
                                <Card style={{ width: '18rem', marginTop: '2%' }} >
                                    <Card.Img src={produto.img} />
                                    <Card.Body>
                                        <Card.Title>{produto.titulo}</Card.Title>
                                        <Card.Text>
                                            {produto.info}
                                        </Card.Text>
                                        <Button onClick={() => { modalAbrir(produto) }} className="btnCards" variant="outline-warning">Veja mais</Button>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                        <br></br>
                    </Col>
                </Row>
            </Container>

            <Container>
                <h1 style={{ marginTop: '4%', textAlign: 'center' }}>Sob Medidada</h1>
                <Row className="backProdutos">
                    <Col sm={6}>
                        {
                            medida.map((sob) => (
                                <Card className="cardsDeck">
                                    <Card.Body>
                                        <Card.Title>Sua Tecnologia</Card.Title>
                                        <Card.Img src={sob.img} />
                                        <Card.Text>
                                            {sob.info}
                                        </Card.Text>
                                        <Button onClick={() => { SobMedida(sob) }} className="btnCards" variant="dark">Construa</Button>
                                    </Card.Body>

                                </Card>
                            ))
                        }
                        <br></br>
                    </Col>

                    <Col sm={6}>
                        <h2 style={{ color: '#FFF', marginTop: '3%', textAlign: 'center' }}>Uma tecnologia só sua</h2>
                        <h4 style={{ color: '#FFF', textAlign: 'center' }}>Já imaginou varia pessoas usando uma tecnologia que você desenvolveu? Que você pensou mas não sabe como
                        tirar do papel. Isso pode ser possível, para que isso aconteça basta entrar em contato para saber mais, não precisa ter compromisso.
                         Estamos aqui para tirar suas duvidas.</h4>
                    </Col>
                </Row>
            </Container>
            <Modal show={modalOpen} onHide={fechaModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{produtos.titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {produtos.modal}
                </Modal.Body>
                <Modal.Footer>
                    <Button href="/contato" variant="outline-success">Entrar em contato</Button>
                    <Button variant="outline-dark" onClick={fechaModal}>Sair</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={modal2} onHide={fechaModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{sonhos.titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {sonhos.modal}
                </Modal.Body>
                <Modal.Footer>
                    <Button href="/contato" variant="outline-success">Entrar em contato</Button>
                    <Button onClick={fechaModal} variant="outline-dark">Sair</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={modal3} onHide={fechaModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{facilidades.titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {facilidades.modal}
                </Modal.Body>
                <Modal.Footer>
                    <Button href="/contato" variant="outline-success">Entrar em contato</Button>
                    <Button onClick={fechaModal} variant="outline-dark">Sair</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={modal4} onHide={fechaModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{sobMedida.titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {sobMedida.modal}
                </Modal.Body>
                <Modal.Footer>
                    <Button href="/contato" variant="outline-success">Entrar em contato</Button>
                    <Button onClick={fechaModal} variant="outline-dark">Sair</Button>
                </Modal.Footer>
            </Modal>

            <footer className="footer">
                <div className="logoFooter">
                    {/* <img src={LogoFooter} width="50" height="50" /> */}
                    <h3>SeniorTec®</h3>
                </div>
            </footer>
        </div>




    );
}

export default Servicos;