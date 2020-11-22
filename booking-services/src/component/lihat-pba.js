import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import { FormGroup, Input } from "reactstrap";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import localforage from "localforage";

function MydModalWithGrid(props) {
  const [state, setState] = useState([]);
  const [pba, setPBAData] = useState([]);
  const [id_pba, setIDPBA] = useState([]);

  useEffect(() => {
    const getAvailablePBA = async () => {
      const token = await localforage.getItem("token");

      axios
        .get("pbam/available-pba", {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res) => {
          setState(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get("bpba/detail-user/" + props.id, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res) => {
          setPBAData(res.data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAvailablePBA();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();

    const token = await localforage.getItem("token");

    const data = {
        pba_id: id_pba
    }

    axios
      .put("pbam/assign-pcu/" + props.id, data, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header
        closeButton
        style={{ textAlign: "center", justifyContent: "center" }}
      >
        <Modal.Title id="contained-modal-title-vcenter">PBA</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col sm={6}>Nama PBA</Col>
            <Col sm={6}>
              {pba.assign_to === undefined ? (
                <p className="font-weight-bold">PBA belum diatur</p>
              ) : (
                <p className="font-weight-bold">{pba.assign_to}</p>
              )}
            </Col>
          </Row>
          <Row>
            <Col sm={6}>Tentukan PBA</Col>
            <Col sm={6}>
              <FormGroup>
                <Input
                  type="select"
                  name="select"
                  id="tipeUser"
                  style={{ textAlign: "center" }}
                  onChange={(e) => setIDPBA(e.target.value)}
                >
                  <option value="">Pilih PBA</option>
                  {state.map((pba) => (
                    <option value={pba._id}>{pba.name}</option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Row>
          <Button onClick={handleClick}>Simpan</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}

export default function LihatPBA(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        variant="primary"
        className="mr-2"
        onClick={() => setModalShow(true)}
      >
        <FaEdit />
      </Button>

      <MydModalWithGrid
        show={modalShow}
        id={props.id}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
