import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import { Input } from 'reactstrap';


function MydModalWithGrid(props) {
    const [disableShow, setDisableShow] = useState(false);
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton style={{textAlign:"center", justifyContent:"center"}}>
          <Modal.Title id="contained-modal-title-vcenter"> 
            Atur Booking
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
                Tanggal
              </Col>
              <Col sm={1}>
                :
              </Col>
              <Col sm={7}>
                10-11-2020
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
                09.00 WIB
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
                Buka Rekening
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
                  <Input type="select" name="select" id="tipeUser">
                    <option value="menunggu" onClick={() => setDisableShow(false)}>Menunggu</option>
                    <option value="diterima" onClick={() => setDisableShow(false)}>Diterima</option>
                    <option value="dibatalkan" onClick={() => setDisableShow(true)}>Dibatalkan</option>
                  </Input>
              </Col>
            </Row>

            {disableShow
            ?
            <Row>
            <Col sm={4}>
              Alasan
            </Col>
            <Col sm={1}>
              :
            </Col>
            <Col sm={7}>
            <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </Row>
            : null 
            }
           
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="primary">Simpan</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default function AturBooking() {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button  variant="primary" className="mr-2" onClick={() => setModalShow(true)} style={{width:'5em'}}>
        Atur
        </Button>
  
        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
      </>
    );
  }