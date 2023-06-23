import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditKelas = () => {
    const [namaKelas, setNamaKelas] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

  useEffect(() => {
    const getKelasById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/kelas/${id}`);
        setNamaKelas(response.data.namaKelas);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getKelasById();
  }, [id]);

  const updateKelas = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/kelas/${id}`, {
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
      <h1 className="title">Data Kelas</h1>
      <h2 className="subtitle">Update Kelas</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateKelas}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama Kelas</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={namaKelas}
                    onChange={(e) => setNamaKelas(e.target.value)}
                    placeholder="NamaKamar"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
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

export default FormEditKelas;
