import React from 'react';
import { Button, Container, Col, Row, Card, CardDeck } from 'react-bootstrap';
import Logo from '../../img/logoMenor.png';
import '../Servico/servico.css';
import LogoFooter from '../../img/logoBrangoFooter.png';


function Servicos() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="cardPosition">
                            <Card className="bg-dark text-white">
                                <Card.Img src={Logo} />
                                <Card.ImgOverlay>
                                    <Card.Title>Seus Sonhos</Card.Title>
                                    <Card.Text>
                                        Texto aqui
                                        
                                    </Card.Text>
                                    <Button  variant="outline-warning">Saiba Mais</Button>
                                </Card.ImgOverlay>
                            </Card>
                                
                        </div>
                    </Col>
                    <Col className="cardPosition">
                        <Card>
                            <Card.Title style={{textAlign:'center', marginTop:'2%'}}>Facilidades</Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    Texto aqui
                                </Card.Text>
                            </Card.Body>
                                <Button className="btnCard" variant="outline-warning">Saiba Mais</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container fluid="sm">
                <Row>
                    <Col className="backProdutos">
                        <h2 style={{textAlign:'center', marginTop:'2%'}}>Produtos</h2>
                    <CardDeck className="cardsDeck">
                        <Card>
                            <Card.Img src={Logo}/>
                            <Card.Body>
                                <Card.Title>Titulo</Card.Title>
                                <Card.Text>
                                    Texto aqui 
                                </Card.Text>
                                <Button className="btnCards" variant="outline-warning">Veja mais</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img src={Logo}/>
                            <Card.Body>
                                <Card.Title>Titulo</Card.Title>
                                <Card.Text>
                                    Texto aqui 
                                </Card.Text>
                                <Button className="btnCards" variant="outline-warning">Veja mais</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img src={Logo}/>
                            <Card.Body>
                                <Card.Title>Titulo</Card.Title>
                                <Card.Text>
                                    Texto aqui 
                                </Card.Text>
                                <Button className="btnCards" variant="outline-warning">Veja mais</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>

                    <CardDeck className="cardsDeck">
                        <Card>
                            <Card.Img src={Logo}/>
                            <Card.Body>
                                <Card.Title>Titulo</Card.Title>
                                <Card.Text>
                                    Texto aqui 
                                </Card.Text>
                                <Button className="btnCards" variant="outline-warning">Veja mais</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img src={Logo}/>
                            <Card.Body>
                                <Card.Title>Titulo</Card.Title>
                                <Card.Text>
                                    Texto aqui 
                                </Card.Text>
                                <Button className="btnCards" variant="outline-warning">Veja mais</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img src={Logo}/>
                            <Card.Body>
                                <Card.Title>Titulo</Card.Title>
                                <Card.Text>
                                    Texto aqui 
                                </Card.Text>
                                <Button className="btnCards" variant="outline-warning">Veja mais</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    <br></br>
                    </Col>
                </Row>
            </Container>

            <Container>
            <h1 style={{marginTop:'4%', textAlign:'center'}}>Sob Medidada</h1>
                <Row className="backProdutos">
                    <Col>
                    <Card className="cardsDeck">
                        <Card.Body>
                            <Card.Title>Titulo</Card.Title>
                            <Card.Img src={Logo}/>
                            <Card.Text>
                                Texto aqui 
                            </Card.Text>
                            <Button className="btnCards" variant="dark">Construa</Button>
                        </Card.Body>
                    
                    </Card>
                    <br></br>
                    </Col>

                    <Col>
                    <h2 style={{color:'#FFF', marginTop:'3%', textAlign:'center'}}>Uma tecnologia só sua</h2>
                    </Col>
                </Row>
            </Container>
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