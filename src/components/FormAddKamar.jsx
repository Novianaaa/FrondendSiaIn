import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddKamar = () => {
  const [namaKamar, setNamaKamar] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveKamar = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/kamar", {
        namaKamar: namaKamar,
      });
      navigate("/kamar");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title">Kamar</h1>
      <h2 className="subtitle">Add New Kamar</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveKamar}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama Kamar</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={namaKamar}
                    onChange={(e) => setNamaKamar(e.target.value)}
                    placeholder="Nama Kamar"
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

export default FormAddKamar;
