import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddKelas = () => {
  const [namaKelas, setNamaKelas] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveKelas = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/kelas", {
        namaKelas: namaKelas,
      });
      navigate("/kelas");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title">Kelas</h1>
      <h2 className="subtitle">Add New Kelas</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveKelas}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama Kelas</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={namaKelas}
                    onChange={(e) => setNamaKelas(e.target.value)}
                    placeholder="Nama Kelas"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddKelas;
