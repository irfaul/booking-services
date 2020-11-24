import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import localforage from "localforage";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "15px",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function MydModalWithGrid(props) {
  const [date, setDate] = useState("");
  const classes = useStyles();

  const handleEditCuti= async (e) => {
    e.preventDefault();

    const token = await localforage.getItem("token");

    const data = {
      pba_id: props.data.pba_id,
      pba_name: props.data.pba_name,
      date: date,
    };

    axios
      .put("pbam/edit-schedule/" + props.data.id, data, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        window.location.reload()
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
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Cuti
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <div>
            <Row>
              <Col sm={6}>Nama PBA</Col>
              <Col sm={6}>
                <p className="font-weight-bold">{props.data.pba_name}</p>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>Tanggal</Col>
              <Col sm={6}>
                <form className={classes.container} noValidate>
                  <TextField
                    type="date"
                    name="date"
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </form>
              </Col>
            </Row>
            <Row>
              <Col sm={6}></Col>
              <Col sm={6}>
                <Button variant="success" onClick={handleEditCuti}>
                  Edit Cuti
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function EditCuti(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        variant="warning"
        className="mr-2"
        onClick={() => setModalShow(true)}
      >
        <FaEdit />
      </Button>

      <MydModalWithGrid
        data={props}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}