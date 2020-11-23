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
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const validation = (e) =>{
    const value = (e.target.value)
    setPassword(value)
    if(!value){
      setErrorPassword('password tidak boleh kosong')
    } else if (password.length < 5 ){
      setErrorPassword('password minimal 6 karakter')
    }else {
      setErrorPassword('')
    }
  }

  const validationPassword = (e) =>{
    const value = (e.target.value)
    setConfirmPassword(value)
    if(!value){
      setErrorConfirmPassword('password tidak boleh kosong')
    } else if (confirmPassword.length < 5){
      setErrorConfirmPassword('password minimal 6 karakter')
    }else {
      setErrorConfirmPassword('')
    }
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      name: name,
      email: email,
      password: password,
      role: role,
      status: 1,
    };

    if (password !== confirmPassword) {
      alert("Password tidak cocok");
  } else if (password.length < 6 || !password ){
    alert("Password belum sesuai ketentuan");
  }else {
      // make API call 
    axios
      .post("guest/register", data)
      .then((res) => {
        history.push("/bpba/home");
      })
      .catch((err) => {
      });}
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
                value={password}
                onChange={validation}
              />
              {
                errorPassword && (
                  <p className="text-danger">{errorPassword}</p>
                )
              }
            </div>

            <div className="form-group">
              <label>Konfirmasi Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Ulangi password"
                value={confirmPassword}
                onChange={validationPassword}
                
              />
              {
                errorConfirmPassword && (
                  <p className="text-danger">{errorConfirmPassword}</p>
                )
              }
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
