import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";


class AturPba extends Component {
    render(){
        return(
            <Container className="auth-inner">
            <div>
                <h3>Atur PBA</h3>
            </div>
            <div style={{marginBottom:"2em"}}>
                <Row>
                    <Col>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-secondary">Search</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Nama PCu</th>
                            <th>PBA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ika</td>
                            <td>
                            <FormGroup>
                                <Input type="select" name="select" id="tipeUser" style={{ textAlign:"center"}}>
                                    <option disabled >Pilih Tipe User</option>
                                    <option value="1">Refi</option>
                                    <option value="2">Revo</option>
                                    <option value="3">Paijon</option>
                                </Input>
                            </FormGroup>
                            </td>
                        </tr>
                        <tr>
                            <td>Siti</td>
                            <td>
                            <FormGroup>
                                <Input type="select" name="select" id="tipeUser" style={{textAlign:"center"}}>
                                    <option disabled >Pilih Tipe User</option>
                                    <option value="1">Refi</option>
                                    <option value="2">Revo</option>
                                    <option value="3">Paijon</option>
                                </Input>
                            </FormGroup>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <div className= "btn-detail">
                    <button type="button"  className="btn btn-outline" style={{backgroundColor: '#2568A9'}} >Simpan</button>
                    <Link to="./home">
                    <button type= "button" className="btn btn-outline" style={{backgroundColor: '#F37024'}} >Batal</button>
                    </Link> 
                </div> 
            </div>
            
          </Container>
          
          
        
        )
    }
}
export default AturPba;