import React, {Component} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StarIcon from '@material-ui/icons/Star';
import {Link} from 'react-router-dom'
import Container from '@material-ui/core/Container';

class LaporanKinerjaPba extends Component {

    render() {

       return (
        <Container>
        <div>
            <h3 style={{marginBottom:'20px', textAlign:'center'}}>LAPORAN KINERJA PBA</h3>
        <div className="row">
            <div className="col-md-4">
                <img alt="" style={{width:'200'}} title="" className="img-circle img-thumbnail isTooltip rounded" src="https://bootdey.com/img/Content/avatar/avatar7.png" data-original-title="Usuario"/> 
            </div>
            <div className="col-md-8 text-left">
                <strong>Revi</strong><br></br>
                <p>revi123@gmail.com</p>
            </div>   
        </div>
        <div className="row">
            <div className="col-sm-4 text-center">PBA</div>
        </div>

        <Row style={{marginTop:'2em'}}>
            <Col sm={2}> <h5>Tanggal</h5></Col>
            <Col sm={2}>13-11-2020</Col>
        </Row>

        {/* tabel 1 dummy*/}
        <div className="row rounded" style={{borderStyle: 'solid', borderWidth: 'thin', borderColor:'Gainsboro',margin:'20px 0 20px 0'}}>
        <table className="table table-borderless">
            <tbody>
                <tr>
                    <th className="font-weight-bold">Jam</th>
                    <td>09.00 WIB</td>   
                </tr>
                <tr>
                    <th className="font-weight-bold">PCU</th>
                    <td>Astuti</td>
                </tr>
                <tr>
                    <th className="font-weight-bold">Aktivitas</th>
                    <td>Investasi reksadana</td>   
                </tr>
                <tr>
                    <th className="font-weight-bold">Lokasi</th>
                    <td>KC.Semarang</td>
                </tr>
                <tr>
                    <th className="font-weight-bold">Status</th>
                    <td>Selesai</td>
                </tr>
                <tr>
                    <th className="font-weight-bold">Rating</th>
                    <td><StarIcon/> 4,7</td>
                </tr>   
            </tbody>    
        </table>
        </div>

        {/* tabel 2 dummy*/}
        <div className="row rounded" style={{borderStyle: 'solid', borderWidth: 'thin', borderColor:'Gainsboro',margin:'20px 0 20px 0'}}>
        <table className="table table-borderless">
        <tbody>
                <tr>
                    <th className="font-weight-bold">Jam</th>
                    <td>13.00 WIB</td>   
                </tr>
                <tr>
                    <th className="font-weight-bold">PCU</th>
                    <td>Aminah</td>
                </tr>
                <tr>
                    <th className="font-weight-bold">Aktivitas</th>
                    <td>Buka rekening baru</td>   
                </tr>
                <tr>
                    <th className="font-weight-bold">Lokasi</th>
                    <td>KC.Jakarta</td>
                </tr>
                <tr>
                    <th className="font-weight-bold">Status</th>
                    <td>Menunggu</td>
                </tr>
                <tr>
                    <th className="font-weight-bold">Rating</th>
                    <td>-</td>
                </tr>   
            </tbody>
        </table>
             
        </div>
            <div className= "btn-detail">
                <Link to="./home">
                    <button type= "button" className="btn btn-outline" style={{backgroundColor: '#F37024'}} >Kembali</button>
                </Link>
            </div> 
        </div>
        </Container>
       )
    }
}

export default LaporanKinerjaPba;
