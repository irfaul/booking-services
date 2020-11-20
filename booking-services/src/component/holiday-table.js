import { Button, Col, Container, Row } from "reactstrap";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

const columns = [
  {
    dataField: "name",
    text: "Nama Hari Libur",
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
          <Link to={"edit-libur/" + row._id}>
            <Button color="primary" className="mr-2">
              Edit
            </Button>
          </Link>
        </div>
      );
    },
  },
];

const HolidayTable = (props) => {
  return (
    <Container>
      <ToolkitProvider keyField="id" data={props.holidays} columns={columns}>
        {(props) => (
          <div>
            <Row>
              <Col className="text-start">
                <Link to="tambah-libur">
                  <Button color="primary" className="mr-2">
                    Tambah Libur
                  </Button>
                </Link>
              </Col>
              <Col className="text-end">
                <Link to="/bpba/home">
                  <Button color="secondary" className="mr-2">
                    Kembali
                  </Button>
                </Link>
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

export default HolidayTable;
