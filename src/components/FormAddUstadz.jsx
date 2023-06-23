import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FormAddUstadz = () => {
    const [namaUstadz, setNamaUstadz] = useState("");
    const [alamatUstadz, setAlamatUstadz] = useState("");
    const [noTeleponUstadz, setNoTeleponUstadz] = useState("");
    const [pendidikanUstadz, setPendidikanUstadz] = useState("");
    const [pekerjaanUstadz, setPekerjaanUstadz] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const saveUstadz =async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/ustadz", {
                namaUstadz: namaUstadz,
                alamatUstadz: alamatUstadz,
                noTeleponUstadz: noTeleponUstadz,
                pendidikanUstadz: pendidikanUstadz,
                pekerjaanUstadz: pekerjaanUstadz
            });
            navigate("/ustadz");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };
  return (
    <div>
    <h1 className="title">Ustadz</h1>
    <h2 className="subtitle">Add Data Ustadz</h2>
    <div className="card is-shadowless">
      <div className="card-content">
        <div className="content">
          <form onSubmit={saveUstadz}>
            <p className="has-text-centered">{msg}</p>
            <div className="field">
              <label className="label">Nama Lengkap</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={namaUstadz}
                  onChange={(e) => setNamaUstadz(e.target.value)}
                  placeholder="Nama Ustadz"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Alamat</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={alamatUstadz}
                  onChange={(e) => setAlamatUstadz(e.target.value)}
                  placeholder="Alamat Ustadz"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">No Telepon</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={noTeleponUstadz}
                  onChange={(e) => setNoTeleponUstadz(e.target.value)}
                  placeholder="No Telepon Ustadz"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Pendidikan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={pendidikanUstadz}
                  onChange={(e) => setPendidikanUstadz(e.target.value)}
                  placeholder="Pendidikan Ustadz"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Pekerjaan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={pekerjaanUstadz}
                  onChange={(e) => setPekerjaanUstadz(e.target.value)}
                  placeholder="Pekerjaan Ustadz"
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
  )
}

export default FormAddUstadz