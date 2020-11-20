import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { FormGroup, Input } from "reactstrap";


class AturPba extends Component {
    render(){
        return(
            <Container>
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
            </div>
          </Container>
          
        
        )
    }
}
export default AturPba;