import React, { Component } from "react";
import axios from "axios";
import localforage from "localforage";
import Container from "react-bootstrap/Container";
import TablePCU from "../../component/table-pcu";

class AturPba extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    const getData = async () => {
      const token = await localforage.getItem("token");
      this.setState({ token: token });

      axios
        .get("bpba/users", {
          headers: {
            Authorization: `${this.state.token}`,
          },
        })
        .then((res) => {
          console.log(res);
          this.setState({ users: res.data.data });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }

  render() {
    const userPCU = this.state.users.filter(user => {
      return user.role === "PCU"
    });
    return (
      <Container>
        <div>
          <h3>Atur PBA</h3>
        </div>
        <br/>
        <TablePCU pcu={userPCU} />
      </Container>
    );
  }
}
export default AturPba;
