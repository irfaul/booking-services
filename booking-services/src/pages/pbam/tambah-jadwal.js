import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import React, { useState } from 'react'
import { FormGroup, Input } from "reactstrap";
import MaterialUIPickers from './date-picker'

function MydModalWithGrid(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton style={{textAlign:"center", justifyContent:"center"}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Tambah Jadwal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm={6}>
                Pilih Tanggal
              </Col>
              <Col sm={6}>
                <MaterialUIPickers/>
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                Nama PBA
              </Col>
              <Col sm={6}>
                <FormGroup>
                    <Input type="select" name="select" id="tipeUser" style={{ textAlign:"center"}}>
                        <option value="1">Refi</option>
                        <option value="2">Revo</option>
                        <option value="3">Paijon</option>
                    </Input>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                Jam Kerja
              </Col>
              <Col sm={6}>
              <Form.Row>
                  <Col>
                  <Form.Control type="" placeholder="08.00"/>
                  </Col>
                  -
                 <Col>
                 <Form.Control type="" placeholder="13.00"/>
                 </Col>
              </Form.Row>
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                Cuti
              </Col>
              <Col sm={6}>
              <FormGroup >
                    <Input type="select" name="select" id="tipeUser" style={{ textAlign:"center"}} size="sm">
                        <option value="1">Tidak</option>
                        <option value="2">Ya</option>
                    </Input>
                </FormGroup>
              </Col>
            </Row>
  
           
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default function TambahJadwal() {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button  color="warning" className="mr-2" onClick={() => setModalShow(true)}>
        Tambah 
        </Button>
  
        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
      </>
    );
  }