import './Home.css';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return(
    <Container>
        <Row className="justify-content-lg-center">
            <Col lg={9}>
                <div>
                    <Header />
                    <Search />
                </div>
            </Col>
        </Row>
    </Container>
        
    );
}

export default Home;