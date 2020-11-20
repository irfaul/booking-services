import React, { useState } from "react";
import axios from "axios";
import { FormGroup, Label, Input } from "reactstrap";
import "../../style/bpba-tambah.css";
import { Link, useHistory } from "react-router-dom";

const Tambah = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      password: password,
      role: role,
      status: 1,
    };

    axios
      .post("guest/register", data)
      .then((res) => {
        history.push("/bpba/home");
      })
      .catch((err) => {
        // console.log(err)
      });
  };

  return (
    <div>
      <h3>Tambah User</h3>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <div className="form-group">
              <label>Nama</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan nama"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Masukkan email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <FormGroup>
                <Label for="tipeUser">Tipe User</Label>
                <Input
                  type="select"
                  name="select"
                  id="tipeUser"
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Pilih Tipe User</option>
                  <option value="PCU">PCU</option>
                  <option value="PBA">PBA</option>
                  <option value="PBAM">PBAM</option>
                </Input>
              </FormGroup>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Masukkan password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
          <div className="btn-detail">
            <button
              type="button"
              className="btn btn-outline"
              style={{ backgroundColor: "#2568A9" }}
              onClick={handleSubmit}
            >
              Simpan
            </button>
            <Link to={"/bpba/home"}>
              <button
                type="button"
                className="btn btn-outline"
                style={{ backgroundColor: "#D41111" }}
              >
                Batal
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tambah;
