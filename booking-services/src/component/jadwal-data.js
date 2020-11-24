import React, { useState, useEffect } from "react";
import JadwalTable from "./jadwal-table";
import TambahJadwal from "../pages/pbam/tambah-jadwal";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { FormGroup, Input } from "reactstrap";
import axios from "axios";
import localforage from "localforage";
import CutiTable from "./cuti-table";

export default function JadwalData() {

  const[date, setDate] = useState("2020-11-24");
  const[schedules, setSchedule]= useState([]);
  const[vacation, setVacation]= useState([]);

  useEffect(() => {
    const getData = async () => {
      const token = await localforage.getItem("token");

      const data = {
        date: date,
      };

      axios
        .post("pbam/view-schedule", data, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res) => {
          setSchedule(res.data.schedule);
          setVacation(res.data.vacation)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

    return (
      <Container>
        <Row>
          <Col>
            <FormGroup>
              <Input
                type="date"
                name="date"
                size="sm"
                onChange={(e) => setDate(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <TambahJadwal />
          </Col>
        </Row>
        <br />
        <JadwalTable schedules={schedules} />
        <br />
        <CutiTable vacations={vacation} />
        <div className="btn-detail" style={{ textAlign: "right" }}>
          <Link to="./home">
            <button
              type="button"
              className="btn btn-outline"
              style={{ backgroundColor: "#F37024" }}
            >
              Kembali
            </button>
          </Link>
        </div>
      </Container>
    );
}
