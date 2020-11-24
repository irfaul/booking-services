import { Row, Col, Container } from "reactstrap";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import HapusJadwal from "../pages/pbam/hapus-jadwal";
import EditJadwal from "../pages/pbam/edit-jadwal";

const columns = [
  {
    dataField: "pba_name",
    text: "Nama PBA",
  },
  {
    dataField: "start_at",
    text: "Mulai",
  },
  {
    dataField: "end_at",
    text: "Selesai",
  },
  {
    dataField: "link",
    text: "Aksi",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Row>
            <Col>
              <EditJadwal
                id={row._id}
                pba_id={row.pba_id}
                pba_name={row.pba_name}
                date={row.date}
              />
            </Col>
            <Col>
              <HapusJadwal id={row._id} />
            </Col>
          </Row>
        </div>
      );
    },
  },
];

const JadwalTable = (props) => {
  return (
    <Container>
      <ToolkitProvider keyField="id" data={props.schedules} columns={columns}>
        {(props) => (
          <div>
            <h5>Jadwal Kerja</h5>
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
