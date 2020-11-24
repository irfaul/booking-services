import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import { FormGroup, Input } from "reactstrap";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
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
  const [value, setValue] = useState("");
  const [state, setState] = useState([]);
  const [pba_id, setPBAId] = useState("");
  const [pba_name, setPBAName] = useState("");
  const [date, setDate] = useState("");
  const [start_at, setStartTime] = useState("");
  const [end_at, setFinishTime] = useState("");
  const [cuti_date, setCutiDate] = useState("");
  const [pba_cuti, setPBACuti] = useState("");
  const classes = useStyles();
  const userPBA = state.filter((user) => {
    return user.role === "PBA";
  });

  useEffect(() => {
    const getAvailablePBA = async () => {
      const token = await localforage.getItem("token");

      axios
        .get("bpba/users", {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res) => {
          setState(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAvailablePBA();
  }, []);

  const handleAddSchedule = async (e) => {
    e.preventDefault();

    const token = await localforage.getItem("token");

    const data = {
      pba_id: pba_id,
      pba_name: pba_name,
      date: date,
      start_at: start_at,
      end_at: end_at,
    };

    axios
      .post("pbam/add-schedule", data, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {window.location.reload()})
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCuti = async (e) => {
    e.preventDefault();

    const token = await localforage.getItem("token");

    const data = {
      date: cuti_date,
    };

    axios
      .post("pbam/add-vacation/" + pba_cuti, data, {
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
          Tambah Jadwal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col sm={6}>Cuti</Col>
            <Col sm={6}>
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender1"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                >
                  <FormControlLabel value="Ya" control={<Radio />} label="Ya" />
                  <FormControlLabel
                    value="Tidak"
                    control={<Radio />}
                    label="Tidak"
                  />
                </RadioGroup>
              </FormControl>
            </Col>
          </Row>

          {value === "Ya" ? (
            <div>
              <p className="font-weight-bold">Jadwal Cuti</p>
              <hr />
              <Row>
                <Col sm={6}>Nama PBA</Col>
                <Col sm={6}>
                  <FormGroup>
                    <Input
                      type="select"
                      name="select"
                      id="tipeUser"
                      style={{ textAlign: "center" }}
                      size="sm"
                      onChange={(e) => setPBACuti(e.target.value)}
                    >
                      <option selected disabled>
                        --Pilih PBA--
                      </option>
                      {userPBA.map((pba) => (
                        <option value={pba.id}>{pba.name}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>Pilih Tanggal</Col>
                <Col sm={6}>
                  <FormGroup>
                    <Input
                      type="date"
                      name="date"
                      style={{ textAlign: "center" }}
                      size="sm"
                      onChange={(e) => setCutiDate(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={6}></Col>
                <Col sm={6}>
                  <Button onClick={handleCuti} variant="success">
                    Tambah Cuti
                  </Button>
                </Col>
              </Row>
            </div>
          ) : (
            <div>
              <p className="font-weight-bold">Jadwal Kerja</p>
              <hr />
              <Row>
                <Col sm={6}>Nama PBA</Col>
                <Col sm={6}>
                  <FormGroup>
                    <Input
                      type="select"
                      name="select"
                      id="tipeUser"
                      style={{ textAlign: "center" }}
                      size="sm"
                      onChange={(e) => {
                        setPBAId(e.target.value);
                        setPBAName(e.target[e.target.selectedIndex].text);
                      }}
                    >
                      <option selected disabled>
                        --Pilih PBA--
                      </option>
                      {userPBA.map((pba) => (
                        <option value={pba.id}>{pba.name}</option>
                      ))}
                    </Input>
                  </FormGroup>
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
                <Col sm={6}>Waktu Mulai</Col>
                <Col sm={6}>
                  <form className={classes.container} noValidate>
                    <TextField
                      id="time"
                      type="time"
                      defaultValue="07:30"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                      onChange={(e) => setStartTime(e.target.value)}
                    />
                  </form>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>Waktu Selesai</Col>
                <Col sm={6}>
                  <form className={classes.container} noValidate>
                    <TextField
                      id="time"
                      type="time"
                      defaultValue="07:30"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                      onChange={(e) => setFinishTime(e.target.value)}
                    />
                  </form>
                </Col>
              </Row>
              <Row>
                <Col sm={6}></Col>
                <Col sm={6}>
                  <Button variant="success" onClick={handleAddSchedule}>
                    Tambah Jam Kerja
                  </Button>
                </Col>
              </Row>
            </div>
          )}
          {/* <Row>
            <Col sm={6}>Jam Kerja</Col>
            <Col sm={6}>
              <Form.Row>
                <Col>
                  <Form.Control type="" placeholder="08.00" />
                </Col>
                -
                <Col>
                  <Form.Control type="" placeholder="13.00" />
                </Col>
              </Form.Row>
            </Col>
          </Row>

          <Row>
            <Col sm={6}>Cuti</Col>
            <Col sm={6}>
              <FormGroup>
                <Input
                  type="select"
                  name="select"
                  id="tipeUser"
                  style={{ textAlign: "center" }}
                  size="sm"
                >
                  <option value="1">Tidak</option>
                  <option value="2">Ya</option>
                </Input>
              </FormGroup>
            </Col>
          </Row> */}
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
      <Button
        color="warning"
        className="mr-2"
        onClick={() => setModalShow(true)}
      >
        Tambah
      </Button>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
