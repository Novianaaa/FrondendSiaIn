import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const FormEditUstadz = () => {
    const [namaUstadz, setNamaUstadz] = useState("");
    const [alamatUstadz, setAlamatUstadz] = useState("");
    const [noTeleponUstadz, setNoTeleponUstadz] = useState("");
    const [pendidikanUstadz, setPendidikanUstadz] = useState("");
    const [pekerjaanUstadz, setPekerjaanUstadz] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate("");
    const{ id } = useParams();

    useEffect(() => {
        const getUstadzById = async() => {
            try {
                const response = await axios.get(`http://localhost:5000/ustadz/${id}`);
                setNamaUstadz(response.data.namaUstadz);
                setAlamatUstadz(response.data.alamatUstadz);
                setNoTeleponUstadz(response.data.namaUstadz);
                setPendidikanUstadz(response.data.pendidikanUstadz);
                setPekerjaanUstadz(response.data.pekerjaanUstadz);
            } catch (error) {
                if(error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };
        getUstadzById();
    }, [id]);

    const updateUstadz = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/ustadz/${id}`, {
                namaUstadz: namaUstadz,
                alamatUstadz: alamatUstadz,
                noTeleponUstadz: noTeleponUstadz,
                pendidikanUstadz: pendidikanUstadz,
                pekerjaanUstadz: pekerjaanUstadz
            });
            navigate("/ustadz");
        } catch (error) {
            if (error.response){
                setMsg(error.response.data.msg);
            }
        }
    };
    return (
        <div>
          <h1 className="title">Data Ustadz</h1>
          <h2 className="subtitle">Update Data Ustadz</h2>
          <div className="card is-shadowless">
            <div className="card-content">
              <div className="content">
                <form onSubmit={updateUstadz}>
                  <p className="has-text-centered">{msg}</p>
                  <div className="field">
                    <label className="label">Nama Ustadz</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        value={namaUstadz}
                        onChange={(e) => setNamaUstadz(e.target.value)}
                      />
                    </div>
                    <label className="label">Alamat</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        value={alamatUstadz}
                        onChange={(e) => setAlamatUstadz(e.target.value)}
                      />
                    </div>
                    <label className="label">No Telepone</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        value={noTeleponUstadz}
                        onChange={(e) => setNoTeleponUstadz(e.target.value)}
                      />
                    </div>
                    <label className="label">Pendidikan</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        value={pendidikanUstadz}
                        onChange={(e) => setPendidikanUstadz(e.target.value)}
                      />
                    </div>
                    <label className="label">Pekerjaan</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        value={pekerjaanUstadz}
                        onChange={(e) => setPekerjaanUstadz(e.target.value)}
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
}

export default FormEditUstadz