import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditJadwal = () => {
  const [hari, setHari] = useState("");
  const [pelajaranId, setPelajaranId] = useState("");
  const [pelajaranList, setPelajaranList] = useState([]);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate("");
  const {id} = useParams();

  useEffect(() => {
        const getJadwalById = async() => {
          fetchpelajaranList();
            try {
                const response = await axios.get(`http://localhost:5000/jadwal/${id}`);
                setHari(response.data.hari);
              
            } catch (error) {
                if(error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };
        getJadwalById();
    }, [id]);

    const updateJadwal = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/jadwal/${id}`, {
                hari: hari,
                pelajaranId: pelajaranId,
            });
            navigate("/jadwal");
        } catch (error) {
            if (error.response){
                setMsg(error.response.data.msg);
            }
        }
    };
    
  const fetchpelajaranList = async () => {
    try {
      const response = await axios.get('http://localhost:5000/datapelajaran');
      const data = response.data;
      setPelajaranList(data);
    } catch (error) {
      console.error('Error fetching Pelajaran list:', error);
    }
  };

  return (
    <div>
      <h1 className="title">Data Jadwal</h1>
      <h2 className="subtitle">Update Jadwal</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateJadwal}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Hari</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={hari}
                    onChange={(e) => setHari(e.target.value)}
                  />
                </div>
                </div>
                <div className="field">
                <label className="label">Pelajaran</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={pelajaranId}
                      onChange={(e) => setPelajaranId(e.target.value)}>
                      <option value="">Pilih Pelajaran</option>
                      {pelajaranList.map((pelajaran) => (
                        <option key={pelajaran.id} value={pelajaran.id}>
                          {pelajaran.namaKitab}
                        </option>
                      ))}
                    </select>
                  </div>
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

export default FormEditJadwal