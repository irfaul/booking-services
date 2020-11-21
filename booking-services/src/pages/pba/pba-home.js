import React, {Component} from 'react';

import Container from '@material-ui/core/Container';

import Nav from '../../component/nav';
import Hero from '../../component/hero';
import MaterialUIPickers from './date-picker'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import JadwalPertemuan from './jadwal-pertemuan';
import RiwayatPertemuan from './detail-riwayat-pertemuan';



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
                        <td><JadwalPertemuan/></td>
                    </tr>
                    <tr>
                        <td>Sherina</td>
                        <td>13.00 WIB</td>
                        <td><JadwalPertemuan/></td>
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
                        <td><RiwayatPertemuan/></td>
                    </tr>
                    <tr>
                        <td>Siti</td>
                        <td>09-11-2020</td>
                        <td><RiwayatPertemuan/></td>
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

