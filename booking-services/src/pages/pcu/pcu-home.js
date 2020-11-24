import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Nav from '../../component/nav';
import Hero from '../../component/hero';

import '../../style/pcu-home.css'

import { Link } from "react-router-dom";


class PCUHome extends Component {

    render () {
        return (
            <div>
                <Nav />
                <Hero />
                <div className="btn-detail">
                    <div className="mb-2">
                        <Link to="tambah-booking">
                            <Button variant="primary" size="lg">
                                TAMBAH BOOKING
                            </Button>
                        </Link>
                    </div>
                </div>
                <Container maxWidth="md" className="user-list">
                    <h5>History</h5>
                    <div className="line"></div>

                    <div className="row rounded" style={{borderStyle: 'solid', borderWidth: 'thin', borderColor:'Gainsboro',margin:'20px 0 20px 0', borderRadius:'20px'}}>
                        <table className="table table-borderless" style ={{borderRadius:'8px'}}>
                            <tbody>
                                <tr>
                                    <th className="font-weight-bold">25 November 2020, 9.00 AM </th>
                                        <Row style={{marginTop:'0.98em'}}>
                                            <Col sm={2}>
                                                Selesai
                                                <Link to="detail-pertemuan">
                                                    <Button style={{marginTop:'2em'}} color="primary" className="mr-2">
                                                        Detail
                                                    </Button>
                                                </Link>
                                            </Col>
                                        </Row>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="row rounded" style={{borderStyle: 'solid', borderWidth: 'thin', borderColor:'Gainsboro',margin:'20px 0 20px 0', borderRadius:'20px'}}>
                        <table className="table table-borderless" style ={{borderRadius:'8px'}}>
                            <tbody>
                                <tr>
                                    <th className="font-weight-bold">25 November 2020, 9.00 AM </th>
                                        <Row style={{marginTop:'0.98em'}}>
                                            <Col sm={2}>
                                                Selesai
                                                <Button style={{marginTop:'2em'}} color="primary" className="mr-2">
                                                    Detail
                                                </Button>
                                            </Col>
                                        </Row>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="row rounded" style={{borderStyle: 'solid', borderWidth: 'thin', borderColor:'Gainsboro',margin:'20px 0 20px 0', borderRadius:'20px'}}>
                        <table className="table table-borderless" style ={{borderRadius:'8px'}}>
                            <tbody>
                                <tr>
                                    <th className="font-weight-bold">25 November 2020, 9.00 AM </th>
                                        <Row style={{marginTop:'0.98em'}}>
                                            <Col sm={2}>
                                                Selesai
                                                <Button style={{marginTop:'2em'}} color="primary" className="mr-2">
                                                    Detail
                                                </Button>
                                            </Col>
                                        </Row>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="row rounded" style={{borderStyle: 'solid', borderWidth: 'thin', borderColor:'Gainsboro',margin:'20px 0 20px 0', borderRadius:'20px'}}>
                        <table className="table table-borderless" style ={{borderRadius:'8px'}}>
                            <tbody>
                                <tr>
                                    <th className="font-weight-bold">25 November 2020, 9.00 AM </th>
                                        <Row style={{marginTop:'0.98em'}}>
                                            <Col sm={2}>
                                                Selesai
                                                <Button style={{marginTop:'2em'}} color="primary" className="mr-2">
                                                    Detail
                                                </Button>
                                            </Col>
                                        </Row>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="row rounded" style={{borderStyle: 'solid', borderWidth: 'thin', borderColor:'Gainsboro',margin:'20px 0 20px 0', borderRadius:'20px'}}>
                        <table className="table table-borderless" style ={{borderRadius:'8px'}}>
                            <tbody>
                                <tr>
                                    <th className="font-weight-bold">25 November 2020, 9.00 AM </th>
                                        <Row style={{marginTop:'0.98em'}}>
                                            <Col sm={2}>
                                                Selesai
                                                <Button style={{marginTop:'2em'}} color="primary" className="mr-2">
                                                    Detail
                                                </Button>
                                            </Col>
                                        </Row>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="row rounded" style={{borderStyle: 'solid', borderWidth: 'thin', borderColor:'Gainsboro',margin:'20px 0 20px 0', borderRadius:'20px'}}>
                        <table className="table table-borderless" style ={{borderRadius:'8px'}}>
                            <tbody>
                                <tr>
                                    <th className="font-weight-bold">25 November 2020, 9.00 AM </th>
                                        <Row style={{marginTop:'0.98em'}}>
                                            <Col sm={2}>
                                                Selesai
                                                <Button style={{marginTop:'2em'}} color="primary" className="mr-2">
                                                    Detail
                                                </Button>
                                            </Col>
                                        </Row>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="row rounded" style={{borderStyle: 'solid', borderWidth: 'thin', borderColor:'Gainsboro',margin:'20px 0 20px 0', borderRadius:'20px'}}>
                        <table className="table table-borderless" style ={{borderRadius:'8px'}}>
                            <tbody>
                                <tr>
                                    <th className="font-weight-bold">25 November 2020, 9.00 AM </th>
                                        <Row style={{marginTop:'0.98em'}}>
                                            <Col sm={2}>
                                                Selesai
                                                <Button style={{marginTop:'2em'}} color="primary" className="mr-2">
                                                    Detail
                                                </Button>
                                            </Col>
                                        </Row>
                                </tr>
                            </tbody>
                        </table>
                    </div>  
                </Container>
            </div>
        )

    }
}

export default PCUHome;