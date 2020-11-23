import React, {Component,useState} from 'react';
import Nav from './nav-pcu';
import { Table, Button,Container, Row, Col } from 'reactstrap';
import MaterialUIPickers from './tanggal-pcu';







class JadwalPertemuan extends Component {

    render () {
        return (
            <div>
                
                <Nav />
                <Table>
                    <thead>
                        <tr>
                            <th>
                                <h3>Jadwal Pertemuan</h3>
                            </th>
                        </tr>
                    </thead>
                </Table>
                <MaterialUIPickers />

                <Table >
                    <thead>
                        <tr>
                            <th> <h5>Waktu</h5></th>
                            <th><h5>Status</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                                    <td>25 November 2020, 9.00 AM </td>
                                    <td> 
                                        <Container>
                                            <Row>
                                                <Col>
                                                Selesai <br/>
                                                <Button style={{marginTop:'2em'}}  color="primary">Detail</Button>

                                                </Col>
                                            </Row>
                                        </Container>
                                    </td>    
                              </tr>  
                    </tbody>
                    <tbody>
                        <tr>
                                    <td>25 November 2020, 9.00 AM </td>
                                    <td> 
                                        <Container>
                                            <Row>
                                                <Col>
                                                Selesai <br/>
                                                <Button style={{marginTop:'2em'}}  color="primary">Detail</Button>

                                                </Col>
                                            </Row>
                                        </Container>
                                    </td>    
                              </tr>  
                    </tbody>
                    <tbody>
                        <tr>
                                    <td>25 November 2020, 9.00 AM </td>
                                    <td> 
                                        <Container>
                                            <Row>
                                                <Col>
                                                Menunggu <br/>
                                                <Button style={{marginTop:'2em'}}  color="primary">Detail</Button>

                                                </Col>
                                            </Row>
                                        </Container>
                                    </td>    
                              </tr>  
                    </tbody>
                    <tbody>
                        <tr>
                                    <td>25 November 2020, 9.00 AM </td>
                                    <td> 
                                        <Container>
                                            <Row>
                                                <Col>
                                                Selesai <br/>
                                                <Button style={{marginTop:'2em'}}  color="primary">Detail</Button>

                                                </Col>
                                            </Row>
                                        </Container>
                                    </td>    
                              </tr>  
                    </tbody>
                    <tbody>
                        <tr>
                                    <td>25 November 2020, 9.00 AM </td>
                                    <td> 
                                        <Container>
                                            <Row>
                                                <Col>
                                                Selesai <br/>
                                                <Button style={{marginTop:'2em'}}  color="primary">Detail</Button>

                                                </Col>
                                            </Row>
                                        </Container>
                                    </td>    
                              </tr>  
                    </tbody>
                </Table>

            
               
                
                

            </div>
            
            
           

        );
    }

}
export default JadwalPertemuan;