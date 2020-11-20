import React, { useState } from "react";
import axios from "axios";
import localforage from "localforage";
import "../../style/bpba-tambah.css";
import { Link, useHistory } from "react-router-dom";

const EditLibur = (props) => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [start_at, setStartDate] = useState("");
  const [end_at, setEndDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await localforage.getItem("token");

    const data = {
      name: name,
      start_at: start_at,
      end_at: end_at,
    };

    axios
      .put("bpba/edit-holiday/" + props.match.params.id, data, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        history.push("/bpba/daftar-libur")
      })
      .catch((err) => {
        // console.log(err)
      });
  };
  return (
    <div>
      <h3>Edit Libur</h3>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <div className="form-group">
              <label>Nama Hari Libur</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan Nama Hari Libur"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Tanggal Mulai</label>
              <input
                type="date"
                className="form-control"
                placeholder="Masukkan Tanggal Mulai"
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Tanggal Selesai</label>
              <input
                type="date"
                className="form-control"
                placeholder="Masukkan Tanggal Selesai"
                onChange={(e) => setEndDate(e.target.value)}
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
            <Link to={"/bpba/daftar-libur"}>
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

export default EditLibur;
