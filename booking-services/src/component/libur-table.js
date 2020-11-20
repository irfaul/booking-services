import { Button, Col, Container, Row } from "reactstrap";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { FaEdit,FaTrashAlt } from "react-icons/fa";

const { SearchBar } = Search;
const columns = [
  {
    dataField: "id",
    text: "ID",
  },
  {
    dataField: "name",
    text: "Nama",
  },
  {
    dataField: "start",
    text: "Tanggal Mulai",
  },
  {
    dataField: "end",
    text: "Tanggal Selesai",
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

const LiburTable = (props) => {
  return (
    <Container>
      <ToolkitProvider
        keyField="id"
        data={props.holidays}
        columns={columns}
        search
      >
        {(props) => (
          <div>
            <Row>
              <Col>
                <SearchBar {...props.searchProps} />
              </Col>
              <Col>
                <Link to="tambah-libur">
                  <Button color="primary" className="mr-2">
                    Tambah Libur
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

export default LiburTable;
