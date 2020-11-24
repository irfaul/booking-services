import React, {Component} from 'react';

import Container from '@material-ui/core/Container';

import Nav from '../../component/nav';
import Hero from '../../component/hero';
import EventIcon from '@material-ui/icons/Event';
import MaterialUIPickers from './date-picker'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import StarIcon from '@material-ui/icons/Star';
import { Link } from "react-router-dom";


class PBAMHome extends Component {

    render() {
       return (
        <div>
            <Nav />
            <Hero />
                
            <Container maxWidth="md" className="user-list-pbam">
                <Row style={{ textAlign:'center', marginBottom: '20px'}}>
                    <Col>
                    <Link to="atur-jadwal">
                        <button className="event-icon" >
                            <EventIcon style={styles.largeIcon}/>
                        </button>
                        </Link>
                        <h5 style={{marginTop: '1em'}}>Atur Jadwal</h5>
                    </Col>
                    <Col>
                    <Link to="atur-pba">
                        <button className="event-icon">
                            <EventIcon style={styles.largeIcon}/>
                        </button>
                    </Link>
                    <h5 style={{ marginTop:'1em'}}>Atur PA</h5>
                    </Col>
                </Row>
            <div>
                <h5>Laporan Kinerja PBA</h5> 
                <div className="line"></div>  
                <MaterialUIPickers/>
            </div>
            <Row style={{marginTop:'1em'}}>
                <Col sm={8}>Revi<hr/></Col>
                <Col sm={4}>
                    <Link to="laporan-kinerja-pba">
                        <Button variant="warning">Lihat</Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col sm={8}>Jeni<hr/></Col>
                <Col sm={4}>
                    <Link to="laporan-kinerja-pba">
                        <Button variant="warning">Lihat</Button>
                    </Link>
                </Col>
            </Row>
            <div style={{marginTop:'3em'}}>
                <h5>Rangking PBA</h5> 
                <div className="line"></div>   
            </div>
            <Table responsive style={{marginTop:'2em'}}>
                <thead>
                    <tr>
                    <th>Rank.</th>
                    <th>Nama</th>
                    <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Revi</td>
                    <td><StarIcon/> 4.8</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jiso</td>
                    <td><StarIcon/> 4.7</td>
                    </tr>
                </tbody>
            </Table> 
            <div className="line"></div>    
            </Container>
        </div>
       )
    }
}

export default PBAMHome;

const styles = {

    largeIcon: {
      width: 60,
      height: 60,
    },
  
  };

