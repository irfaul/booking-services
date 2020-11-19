import { Button, Col, Container, Row } from "reactstrap";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

const { SearchBar } = Search;
const columns = [
  {
    dataField: "id1",
    text: "ID",
  },
  {
    dataField: "name",
    text: "Nama",
  },
  {
    dataField: "role",
    text: "Tipe User",
  },
  {
    dataField: "link",
    text: "Aksi",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"detail-user/" + row.id}>
            <Button color="primary" className="mr-2">
              Detail
            </Button>
          </Link>
        </div>
      );
    },
  },
];

const UserTable = (props) => {
  return (
    <Container>
      <ToolkitProvider
        keyField="id"
        data={props.users}
        columns={columns}
        search
      >
        {(props) => (
          <div>
            <Row>
              <Col>
                <SearchBar {...props.searchProps} />
              </Col>
              <Row>
                <Col>
                  <Link to="tambah-user">
                    <Button color="primary" className="mr-2">
                      Tambah User
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <Link to="tambah-libur">
                    <Button color="primary" className="mr-2">
                      Atur Libur
                    </Button>
                  </Link>
                </Col>
              </Row>
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

export default UserTable;
