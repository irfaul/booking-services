import { Button, Col, Container, Row } from "reactstrap";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

const { SearchBar } = Search;
const columns = [
  {
    dataField: "name",
    text: "Nama",
  },
  {
    dataField: "email",
    text: "Email",
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
              <Col>
                <Row>
                  <Col>
                    <Link to="tambah-user">
                      <Button color="primary" className="mr-2">
                        Tambah User
                      </Button>
                    </Link>
                  </Col>
                  <Col>
<<<<<<< HEAD
                    <Link to="daftar-libur">
=======
                    <Link to="atur-libur">
>>>>>>> 481aac36a9f0f8a8a9617954810861f93bf9ea05
                      <Button color="primary" className="mr-2">
                        Atur Libur
                      </Button>
                    </Link>
                  </Col>
                </Row>
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

export default UserTable;
