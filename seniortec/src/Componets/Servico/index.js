import React, {useState} from 'react';
import { Button, Container, Col, Row, Card, CardDeck, Modal } from 'react-bootstrap';
import Logo from '../../img/logoMenor.png';
import '../Servico/servico.css';
import LogoFooter from '../../img/logoBrangoFooter.png';



function Servicos() {
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);
    const [sobMedida, setSobMedida] = useState([]);
    const [produtos, setProdutos] = useState([])
    const [sonhos, setSonhos] = useState([]);
    const [facilidades, setFacilidades] = useState([])
    const [medida, setMedida] = useState([
        {id:0, title:'Construa', body:'Sob Medida'}
    ])
    const [moreFacilidades, setMoreFacilidades] = useState([
        {id:0, title:'Facilidades', body:'Mais Facilidades'}
    ])
    const [realizaSonho, setRealizaSonho] = useState([
        {id:0, title:'Construa seu sistema', body:'TEste'},
    ])
    const [modalOpen, setModalOpen] = useState(false);
    const [sobre, setSobre] = useState([
        {id:0, titulo:'primeiro', corpo:'texto1', info:'texto1'},
        {id:1, titulo:'segundo', corpo:'texto2', info:'texto2'},
        {id:2, titulo:'terceiro', corpo:'texto3', info:'texto3'},
        {id:3, titulo:'terceiro', corpo:'texto4', info:'texto4'},
        {id:4, titulo:'terceiro', corpo:'texto5', info:'texto5'},
        {id:5, titulo:'terceiro', corpo:'texto6', info:'texto6'},
    ])


    


    function modalAbrir(prod){
        setModalOpen(true)
        setProdutos(prod)   
    }

    function modalSonho(sonho){
        setModal2(true)
        setSonhos(sonho)
    }

    function modalFelicidade(f){
        setFacilidades(f)
        setModal3(true)
    }

    function SobMedida(sob){
        setModal4(true)
        setSobMedida(sob)

    }


    function fechaModal(){
        setModalOpen(false)
        setModal2(false)
        setModal3(false)
        setModal4(false)
    }



    
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="cardPosition">
                            

                            {
                                realizaSonho.map((sonho) =>(
                                    <Card className="bg-dark text-white">
                                <Card.Img src={Logo} />
                                <Card.ImgOverlay>
                                    <Card.Title>Seus Sonhos</Card.Title>
                                    <Card.Text>
                                        Texto aqui
                                        
                                    </Card.Text>
                                    <Button onClick={() => {modalSonho(sonho)}}  variant="outline-warning">Saiba Mais</Button>
                                </Card.ImgOverlay>
                            </Card>
                                ))
                            }
                                
                        </div>
                    </Col>
                    <Col className="cardPosition">
                        {
                            moreFacilidades.map((fa) =>(
                                <Card>
                            <Card.Title style={{textAlign:'center', marginTop:'2%'}}>Facilidades</Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    Texto aqui
                                </Card.Text>
                            </Card.Body>
                                <Button onClick={() => {modalFelicidade(fa)}} className="btnCard" variant="outline-warning">Saiba Mais</Button>
                        </Card>
                            ))
                        }
                    </Col>
                </Row>
            </Container>

            <Container fluid="sm">
                <Row>
                    <Col className="backProdutos">
                        <h2 style={{textAlign:'center', marginTop:'2%'}}>Produtos</h2>
                        
                    <div className="cardsDeck">
                        {sobre.map((produto) =>(
                            <Card style={{width:'18rem', marginTop:'2%'}} >
                            <Card.Img src={Logo}/>
                            <Card.Body>
                                <Card.Title>{produto.titulo}</Card.Title>
                                <Card.Text>
                                    Texto aqui 
                                </Card.Text>
                                <Button onClick={() => {modalAbrir(produto)}} className="btnCards" variant="outline-warning">Veja mais</Button>
                            </Card.Body>
                        </Card>
                        ))}
                    </div>
                    <br></br>
                    </Col>
                </Row>
            </Container>

            <Container>
            <h1 style={{marginTop:'4%', textAlign:'center'}}>Sob Medidada</h1>
                <Row className="backProdutos">
                    <Col>
                    {
                        medida.map((sob) =>(
                            <Card className="cardsDeck">
                        <Card.Body>
                            <Card.Title>Titulo</Card.Title>
                            <Card.Img src={Logo}/>
                            <Card.Text>
                                Texto aqui 
                            </Card.Text>
                            <Button onClick={() => {SobMedida(sob)}} className="btnCards" variant="dark">Construa</Button>
                        </Card.Body>
                    
                    </Card>
                        ))
                    }
                    <br></br>
                    </Col>

                    <Col>
                    <h2 style={{color:'#FFF', marginTop:'3%', textAlign:'center'}}>Uma tecnologia só sua</h2>
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