import React, { Component } from "react";
import "../../style/bpba-detail-user.css";
import axios from "axios";
import localforage from "localforage";
import { FormGroup, Label, Input } from "reactstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import FeedbackPBA from "./feedback-pba";

class DetailPertemuan extends Component {
  render() {
    
    return (
        <div className="auth-wrapper">
            <h3
                style={{
                    marginBottom: "50px",
                    textAlign: "center",
                    fontWeight: "bold",
                }}>
                Detail Pertemuan
                </h3>
            <div className="auth-inner">
            <div className="container detail-frame">
                <div className="row justify-content-center align-items-center">
                <div className="col-md-4 text-center">
                    <AccountCircleIcon
                    style={{ fontSize: 150, marginBottom: "20px" }}
                    color="primary"
                    />
                    <h5>PBA</h5>
                </div>
                <div className="col-md-6 text-center">
                    <h4>Revi</h4>
                    <br></br>
                    <p>revi@gmail.com</p>
                </div>
                </div>
                
                <div className="row rounded" style={{borderStyle: 'solid', borderWidth: 'thin', borderColor:'Gainsboro',margin:'20px 0 20px 0'}}>
                <table className="table table-borderless">
                    <tbody>
                        <tr>
                            <th className="font-weight-bold">Status</th>
                            <td style={{color:"green"}}>Selesai</td>   
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

                <FeedbackPBA/>

                <div className="btn-detail">
                <Link to={"/pcu/home"}>
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
        </div>
    </div>
    );
  }
}

export default DetailPertemuan;
