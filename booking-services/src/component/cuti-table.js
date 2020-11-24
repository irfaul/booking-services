import { Button, Col, Container } from "reactstrap";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import EditCuti from "../pages/pbam/edit-cuti";

const columns = [
  {
    dataField: "name",
    text: "Nama PBA",
  },
  {
    dataField: "link",
    text: "Aksi",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Col>
          {/* <EditCuti pba_id={row.} /> */}
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

const CutiTable = (props) => {
  return (
    <Container>
      <ToolkitProvider
        keyField="id"
        data={props.vacations}
        columns={columns}
      >
        {(props) => (
          <div>
            <h5>Jadwal Cuti</h5>
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

export default CutiTable;