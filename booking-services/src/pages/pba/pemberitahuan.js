import Container from '@material-ui/core/Container';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Pemberitahuan extends Component {
    render() {

       return (
        <div>    
        <Container maxWidth="md" className="user-list">
        <div style={{marginTop:'2em'}}>
            <h5 style={{textAlign:'center', marginBottom:'2em'}}>Pemberitahuan</h5> 
            <Card style={{marginBottom:'2em'}}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">07-11-2020, 08.00 WIB</Card.Subtitle>
                    <Card.Title>Astuti melakukan booking</Card.Title>
                    <Row>
                        <Col sm={10}>
                        <Card.Text>Status : Menunggu</Card.Text>
                        </Col>
                        <Col sm={2}>
                        <Button variant="primary" style={{width:'5em'}}>Atur</Button>
                        </Col>
                    </Row>      
                </Card.Body>
            </Card>

            <Card style={{marginBottom:'2em'}}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">07-11-2020, 08.00 WIB</Card.Subtitle>
                    <Card.Title>Astuti melakukan booking</Card.Title>
                    <Row>
                        <Col sm={10}>
                        <Card.Text>Status : Menunggu</Card.Text>
                        </Col>
                        <Col sm={2}>
                        <Button variant="primary" style={{width:'5em'}}>Atur</Button>
                        </Col>
                    </Row>      
                </Card.Body>
            </Card>
        </div >
        </Container>
        <Link to="./home">
        <div className= "btn-detail">
            <Button variant="danger" style={{width:'7em'}}>Kembali</Button>
        </div>
        </Link>
        </div>
       )
    }
}

export default Pemberitahuan;
