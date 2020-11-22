import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Container } from "reactstrap";
import LihatPBA from "./lihat-pba";

const { SearchBar } = Search;
const columns = [
  {
    dataField: "name",
    text: "Nama PCU",
  },
  {
    dataField: "link",
    text: "Lihat PBA",
    formatter: (rowContent, row) => {
      return (
        <div>
          <LihatPBA id={row.id} />
        </div>
      );
    },
  },
];

const TablePCU = (props) => {
  return (
    <Container>
      <ToolkitProvider
        keyField="id"
        data={props.pcu}
        columns={columns}
        search
      >
        {(props) => (
          <div>
            <SearchBar {...props.searchProps} />
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

export default TablePCU;
