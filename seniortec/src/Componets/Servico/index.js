import React, { useState } from 'react';
import { Button, Container, Col, Row, Card, CardDeck, Modal } from 'react-bootstrap';
import Logo from '../../img/logoMenor.png';
import '../Servico/servico.css';
import LogoFooter from '../../img/logoBrangoFooter.png';


import ImgSonho from '../../img/sonhos.png';
import ImgFacilidades from '../../img/facilidades.png';

import ImgDesign from '../../img/design.png';
import BI from '../../img/BI.png';
import ImgDev from '../../img/desenvolvimento.png';
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
    const [moreFacilidades, setMoreFacilidades] = useState([
        { id: 0, title: 'Facilidades', body: 'Garantimos com mais facilidade a entrega do seu produto, fazemos isso com o máximo de profissionalismo possível.' }
    ])
    const [realizaSonho, setRealizaSonho] = useState([
        { id: 0, title: 'Construa seu sistema', body: 'Já pensou em ter um sistema feito por você, sob medida. O seu negocio fica mais diferenciado com um sistema onde é possível atender uma grande massa de pessoas com agilidade. Hoje isso é muito importante e possível, basta entrar em contato, não perca tempo.' },
    ])
    const [modalOpen, setModalOpen] = useState(false);
    const [sobre, setSobre] = useState([
        { id: 0, titulo: 'Design', corpo: 'Um bom produto precisa de uma boa apresntação.', info: 'Com um design atrativo e feito com toda harmonização traz vários clientes, já pensou o seu negocio crescer só por causa da aparência? Isso é possível, entre em contato conosco para saber mais.', img: ImgDesign },
        { id: 1, titulo: 'Desenvolvimento', corpo: 'Desenvolvimento de qualquer tecnologia.', info: 'Para o seu negocio que recebe bastante de dados de vários ou usuários ou seu sistemas ainda não recebe tantos assim e você quer fazer o controle de todos os dados não precisa quebrar a cabeça fazemos isso por você, entre em contato.', img: ImgDev },
        { id: 2, titulo: 'Business Inteligencia(BI)', corpo: 'Analises BI para melhorar seu negocio.', info: 'Uma boa aplicação exige tudo o que tem de melhor, nossos profissionais em engenharia podem garantir uma boa aplicação para o seu negocio. Não deixe para depois, saiba mais entrando em contato.', img: BI }
    ])





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
                                        <Card.Img src={ImgSonho} />
                                        <Card.ImgOverlay>
                                            <Card.Title>Seus Sonhos</Card.Title>
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
                                    <Card.Title style={{ textAlign: 'center', marginTop: '1%' }}>Facilidades</Card.Title>
                                    <Card.Body>
                                        <Card.Img src={ImgFacilidades} style={{ marginBottom: '2%' }} />
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
                                            {produto.corpo}
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
                                        <Card.Img src={Sua} />
                                        <Card.Text>
                                            Já pensou em criar uma tecnologia que é só sua? Uma tecnologia que você inventou.
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
                        <h4 style={{color:'#FFF', textAlign:'center'}}>Já imaginou varia pessoas usando uma tecnologia que você desenvolveu? Que você pensou mas não sabe como 
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
                    {produtos.info}
                </Modal.Body>
                <Modal.Footer>
                    <Button href="/contato" variant="outline-success">Entrar em contato</Button>
                    <Button variant="outline-dark" onClick={fechaModal}>Sair</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={modal2} onHide={fechaModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{sonhos.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {sonhos.body}
                </Modal.Body>
                <Modal.Footer>
                    <Button href="/contato" variant="outline-success">Entrar em contato</Button>
                    <Button onClick={fechaModal} variant="outline-dark">Sair</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={modal3} onHide={fechaModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{facilidades.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {facilidades.body}
                </Modal.Body>
                <Modal.Footer>
                    <Button href="/contato" variant="outline-success">Entrar em contato</Button>
                    <Button onClick={fechaModal} variant="outline-dark">Sair</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={modal4} onHide={fechaModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{sobMedida.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {sobMedida.body}
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