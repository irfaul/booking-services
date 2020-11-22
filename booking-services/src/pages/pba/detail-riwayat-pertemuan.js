import React, { Component } from "react";
import "../../style/bpba-detail-user.css";
import axios from "axios";
import localforage from "localforage";
import { FormGroup, Label, Input } from "reactstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import FeedbackPCU from "./feedback-pcu";

class RiwayatPertemuan extends Component {
  render() {
    
    return (
      <div className="container detail-frame">
        <h3
          style={{
            marginBottom: "50px",
            textAlign: "center",
            fontWeight: "bold",
          }}>
          Riwayat Pertemuan
        </h3>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 text-center">
            <AccountCircleIcon
              style={{ fontSize: 150, marginBottom: "20px" }}
              color="primary"
            />
            <h5>PCu</h5>
          </div>
          <div className="col-md-6 text-center">
            <h4>Astuti</h4>
            <br></br>
            <p>astuti@gmail.com</p>
          </div>
        </div>
        
        <div className="row rounded" style={{borderStyle: 'solid', borderWidth: 'thin', borderColor:'Gainsboro',margin:'20px 0 20px 0'}}>
        <table className="table table-borderless">
            <tbody>
                <tr>
                    <th className="font-weight-bold">Status</th>
                    <td>Selesai</td>   
                </tr>
                <tr>
                    <th className="font-weight-bold">Waktu</th>
                    <td>11 November 2020, 9.00 AM</td>
                </tr>
                <tr>
                    <th className="font-weight-bold">Keperluan</th>
                    <td>Perihal Investasi</td>   
                </tr>
            </tbody>    
        </table>
        </div>

        <FeedbackPCU/>

        <div className="btn-detail">
          <Link to={"/pba/home"}>
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

export default RiwayatPertemuan;
