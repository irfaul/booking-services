import React from 'react';
import {  Input, Table, Col,Row } from 'reactstrap';
import { Search } from "react-bootstrap-table2-toolkit";

const { SearchBar } = Search;
const Example = (props) => {
  return (
    
    <Table>
       
       
      <thead>
      <tr>
      <Col>
            <SearchBar />        
      </Col>

      </tr>
      
        <tr>
          <th>Nama PCU</th>
          <th>PBA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ika</td>
          <td>
                  <Input type="select" name="select" id="tipeUser" >
                    <option disabled >Pilih User</option>
                    <option value="Revi">Revi</option>
                    <option value="Jiso">Jiso</option>
                    <option value="Andri">Andri</option>
                    <option value="Andri">Jeni</option>
                  </Input>
          </td>
        </tr>
        <tr>
          
          <td>Siti</td>
          <td>
                <Input type="select" name="select" id="tipeUser" >
                    <option disabled >Pilih User</option>
                    <option value="Revi">Revi</option>
                    <option value="Jiso">Jiso</option>
                    <option value="Andri">Andri</option>
                    <option value="Andri">Jeni</option>
                </Input>
          </td>
         
        </tr>
        <tr>
          <td>Haryanto</td>
          <td>
          <Input type="select" name="select" id="tipeUser" >
                    <option disabled >Pilih User</option>
                    <option value="Revi">Revi</option>
                    <option value="Jiso">Jiso</option>
                    <option value="Andri">Andri</option>
                    <option value="Andri">Jeni</option>
                </Input>
          </td>
          
        </tr>
      </tbody>
    </Table>
  );
}

export default Example;