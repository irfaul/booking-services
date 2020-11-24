import React, { Component } from "react";
import "../../style/bpba-detail-user.css";
import axios from "axios";
import localforage from "localforage";
import { FormGroup, Label, Input } from "reactstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

class DetailUserPbam extends Component {
  // state = { showing: true };
  // const { showing } = this.state;
  constructor() {
    super();
    this.state = {
      user: [],
      token: "",
      showing: {},
      description: "enable",
      pbam: [],
      pbam_id: "",
      pbam_name: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handlePBAM = this.handlePBAM.bind(this);
  }

  componentDidMount() {
    const getData = async () => {
      const token = await localforage.getItem("token");
      this.setState({ token: token });

      axios
        .get("bpba/detail-user/" + this.props.match.params.id, {
          headers: {
            Authorization: `${this.state.token}`,
          },
        })
        .then((res) => {
          this.setState({ user: res.data.user, pbam: res.data.pbam });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }

  handleClick(e) {
    e.preventDefault();

    const data = {
      isEnable: this.state.showing,
      description: this.state.description,
    };

    axios
      .put("bpba/disable-user/" + this.state.user._id, data, {
        headers: {
          Authorization: `${this.state.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        // console.log(err)
      });
  }

  handlePBAM(e) {
    e.preventDefault();

    const data = {
      pbam_id: this.state.pbam_id,
      pbam_name: this.state.pbam_name
    };

    axios
      .put("bpba/set-pbam/" + this.state.user._id, data, {
        headers: {
          Authorization: `${this.state.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        // console.log(err)
      });
  }

  render() {
    return (
      <div className="container detail-frame">
        <h3
          style={{
            marginBottom: "50px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Detail User
        </h3>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 text-center">
            <AccountCircleIcon
              style={{ fontSize: 150, marginBottom: "20px" }}
              color="primary"
            />
            <h5>{this.state.user.role}</h5>
          </div>
          <div className="col-md-6 text-center">
            <h4>{this.state.user.name}</h4>
            <br></br>
            <p>{this.state.user.email}</p>
          </div>
        </div>

        <div
          className="row justify-content-center align-items-center"
          style={{ marginTop: "50px" }}
        >
          <div className="col-md-5 text-center box-wrapper">
            {this.state.user.isEnable ? (
              <div className="text-left">
                <p className="font-weight-light">
                  Status User : <span className="font-weight-bold">Enable</span>
                </p>
                <hr />
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                  onChange={() => this.setState({ showing: false })}
                />
                <label className="form-check-label" for="inlineRadio1">
                  Disable ?
                </label>
              </div>
            ) : (
              <div className="text-left">
                <p className="font-weight-light">
                  Status User :{" "}
                  <span className="font-weight-bold">Disable</span>
                </p>
                <p className="font-weight-light">
                  Alasan :{" "}
                  <span className="font-weight-bold">
                    {this.state.user.description}
                  </span>
                </p>
                <hr />
                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                    onChange={() => this.setState({ showing: true })}
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    Enable ?
                  </label>
                </div>
              </div>
            )}
            <div className="form-group" style={{ marginTop: "20px" }}>
              {this.state.showing ? (
                <button className="btn btn-login" onClick={this.handleClick}>
                  Simpan
                </button>
              ) : (
                <div>
                  <input
                    type="text"
                    className="form-control"
                    id="inputText"
                    aria-describedby="textAlasan"
                    placeholder="Alasan disable"
                    onChange={(e) =>
                      this.setState({ description: e.target.value })
                    }
                  />
                  <br />
                  <button className="btn btn-login" onClick={this.handleClick}>
                    Simpan
                  </button>
                </div>
              )}
            </div>
          </div>
          {this.state.user.role == "PBA" ? (
            <div className="col-md-5 text-center box-wrapper">
              <p className="text-left font-weight-light">
                PBAM :{" "}
                <span className="font-weight-bold">
                  {this.state.user.assign_to.name}
                </span>
              </p>
              <hr />
              <div className="form-group">
                <FormGroup>
                  <Label for="tipeUser">Atur PBAM</Label>
                  <Input
                    type="select"
                    name="select"
                    id="tipeUser"
                    onChange={(e) => this.setState({ pbam_id: e.target.value, pbam_name: e.target[e.target.selectedIndex].text
                    })}
                  >
                    <option selected disabled>--Pilih PBAM--</option>
                    {this.state.pbam.map((data) => (
                      <option value={data._id}>{data.name}</option>
                    ))}
                  </Input>
                </FormGroup>
              </div>
              <button className="btn btn-login" onClick={this.handlePBAM}>
                Simpan
              </button>
            </div>
          ) : (
            <p></p>
          )}
        </div>
        {/* button ubah */}

        <div className="btn-detail">
          <Link to={"edit-user/" + this.state.user._id}>
            <button
              type="button"
              className="btn btn-outline"
              style={{ backgroundColor: "#F37024" }}
            >
              Ubah
            </button>
          </Link>
          <Link to={"/bpba/home"}>
            <button
              type="button"
              className="btn btn-outline"
              style={{ backgroundColor: "#2568A9" }}
            >
              Kembali
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default DetailUserPbam;
