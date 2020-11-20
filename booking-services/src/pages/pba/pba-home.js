import React, {Component} from 'react';
import '../../style/pbam-home.css';

import Container from '@material-ui/core/Container';

import Nav from '../../component/nav';
import Hero from '../../component/hero';
import EventIcon from '@material-ui/icons/Event';
import MaterialUIPickers from './date-picker'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Jadwal from './jadwal-pertemuan';


class PBAHome extends Component {

    render() {
       return (
        <div>
            <Nav />
            <Hero />
                
            <Container maxWidth="md" className="user-list">
            <div>
                <h5>Jadwal Pertemuan PCu</h5> 
                <div className="line"></div>  
                <MaterialUIPickers/>
            </div>
            <Table responsive style={{marginTop:'2em'}}>
                <thead>
                    <tr>
                        <th style={{border:'none'}}>Nama PCu</th>
                        <th style={{border:'none'}}>Jam</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Joni</td>
                        <td>11.00 WIB</td>
                        <td><Button variant="warning" onClick="">Lihat</Button></td>
                    </tr>
                    <tr>
                        <td>Sherina</td>
                        <td>13.00 WIB</td>
                        <td><Button variant="warning">Lihat</Button></td>
                    </tr>
                </tbody>
            </Table>
            <div>
                <h5>Riwayat Pertemuan PCu</h5> 
                <div className="line"></div>  
            </div> 
            <Table responsive style={{marginTop:'2em'}}>
                <thead>
                    <tr>
                        <th style={{border:'none'}}>Nama PCu</th>
                        <th style={{border:'none'}}>Tanggal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Astuti</td>
                        <td>12-11-2020</td>
                        <td><Button variant="warning">Detail</Button></td>
                    </tr>
                    <tr>
                        <td>Siti</td>
                        <td>09-11-2020</td>
                        <td><Button variant="warning">Detail</Button></td>
                    </tr>
                </tbody>
            </Table> 
            <div className="line"></div>  
            </Container>
        </div>
       )
    }
}

export default PBAHome;

