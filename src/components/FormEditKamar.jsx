import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditKamar = () => {
    const [namaKamar, setNamaKamar] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

  useEffect(() => {
    const getKamarById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/kamar/${id}`);
        setNamaKamar(response.data.namaKamar);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getKamarById();
  }, [id]);

  const updateKamar = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/kamar/${id}`, {
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
      <h1 className="title">Data Kamar</h1>
      <h2 className="subtitle">Update Kamar</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateKamar}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama Kamar</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={namaKamar}
                    onChange={(e) => setNamaKamar(e.target.value)}
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

export default FormEditKamar;
