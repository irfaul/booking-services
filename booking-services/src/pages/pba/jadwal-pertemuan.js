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
            Jadwal Pertemuan
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm={4}>
                PCu
              </Col>
              <Col sm={1}>
                :
              </Col>
              <Col sm={7}>
                Joni
              </Col>
            </Row>

            <Row>
              <Col sm={4}>
                Status
              </Col>
              <Col sm={1}>
                :
              </Col>
              <Col sm={7}>
                Diterima
              </Col>
            </Row>

            <Row>
              <Col sm={4}>
                Tanggal
              </Col>
              <Col sm={1}>
                :
              </Col>
              <Col sm={7}>
                11-11-2020
              </Col>
            </Row>

            <Row>
              <Col sm={4}>
                Jam
              </Col>
              <Col sm={1}>
                :
              </Col>
              <Col sm={7}>
                10.00
              </Col>
            </Row>

            <Row>
              <Col sm={4}>
                Keperluan
              </Col>
              <Col sm={1}>
                :
              </Col>
              <Col sm={7}>
                Perihal Investasi
              </Col>
            </Row>
           
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="warning">Ok</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default function JadwalPertemuan() {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button  variant="warning" className="mr-2" onClick={() => setModalShow(true)}>
        Lihat
        </Button>
  
        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
      </>
    );
  }