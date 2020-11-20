import { Button, Col, Container, Row } from "reactstrap";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import MaterialUIPickers from '../pages/pbam/date-picker';
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { FaEdit,FaTrashAlt } from "react-icons/fa";
import TambahJadwal from "../pages/pbam/tambah-jadwal";

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
          <Link to={"edit-libur/" + row.id}>
            <Button color="warning" className="mr-2">
              <FaEdit/>
            </Button>
          </Link>
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
    </Container>
  );
};

export default JadwalTable;
