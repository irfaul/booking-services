import { Button, Col, Container, Row } from "reactstrap";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import MaterialUIPickers from '../pages/pbam/date-picker';
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import TambahJadwal from "../pages/pbam/tambah-jadwal";
import EditJadwal from "../pages/pbam/edit-jadwal";

const columns = [
  {
    dataField: "id",
    text: "ID",
  },
  {
    dataField: "name",
    text: "Nama PBA",
  },
  {
    dataField: "time",
    text: "Jam Kerja",
  },
  {
    dataField: "link",
    text: "Aksi",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Col>
          <EditJadwal/>
          <Link to={"hapus-user/" + row.id}>
            <Button color="danger" className="mr-2">
              <FaTrashAlt/>
            </Button>
          </Link>
          </Col>
        </div>
      );
    },
  },
];

const JadwalTable = (props) => {
  return (
    <Container>
      <ToolkitProvider
        keyField="id"
        data={props.schedules}
        columns={columns}
      >
        {(props) => (
          <div>
            <Row>
              <Col>
                <MaterialUIPickers/>
              </Col>
              <Col>
                  <TambahJadwal/>
              </Col>
            </Row>
            <hr />
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory()}
            />
          </div>
        )}
      </ToolkitProvider>
        <div className= "btn-detail" style={{textAlign:'right'}}>
          <Link to="./home">
              <button type= "button" className="btn btn-outline" style={{backgroundColor: '#F37024'}} >Kembali</button>
          </Link>
        </div> 
    </Container>
  );
};

export default JadwalTable;
