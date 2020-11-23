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
import RangkingPba from "../../component/rangking-pba"


class PBAMHome extends Component {

    render() {
       return (
        <div>
            <Nav />
            <Hero />
                
            <Container maxWidth="md" className="user-list">
                <Row>
                    <Col style={{textAlign: "right", marginRight:'5em'}}>
                    <Link to="atur-jadwal">
                        <button className="event-icon" >
                            <EventIcon style={styles.largeIcon} onClick=""/>
                        </button>
                        </Link>
                    </Col>
                    <Col>
                    <Link to="atur-pba">
                        <button className="event-icon">
                            <EventIcon style={styles.largeIcon} onClick=""/>
                        </button>
                    </Link>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: "right", marginTop:'1em',marginRight:'5em'}}>
                    <h5 style={{textAlign:"right"}}>Atur Jadwal</h5>
                    </Col>
                    <Col style={{ marginTop:'1em'}}>
                    <h5>Atur PA</h5>
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
            <RangkingPba/>
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

