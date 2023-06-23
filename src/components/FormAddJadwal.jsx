import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const FormAddJadwal = () => {
  const [hari, setHari]= useState("");
  const [pelajaranId, setPelajaranId] = useState("");
  const [pelajaranList, setPelajaranList] = useState([]);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    fetchpelajaranList();

  }, []);

  const fetchpelajaranList = async () => {
    try {
      const response = await axios.get('http://localhost:5000/datapelajaran');
      const data = response.data;
      setPelajaranList(data);
    } catch (error) {
      console.error('Error fetching Pelajaran list:', error);
    }
  };

 
  const saveJadwal = async (e) => {
    e.preventDefault();
    console.log("Data yang akan dikirim:", {
      hari: hari,
      pelajaranId: pelajaranId,
    });
    try {
      await axios.post("http://localhost:5000/datajadwal", {
        hari: hari,
        pelajaranId: pelajaranId,
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    navigate("/jadwal");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }
  return (
    <div>
      <h1 className="title">Jadwal</h1>
      <h2 className="subtitle">Add New Jadwal</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveJadwal}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Hari</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={hari}
                      onChange={(e) => setHari(e.target.value)}>
                      <option >Pilih Hari</option>
                      <option value="Senin">Senin</option>
                      <option value="Selasa">Selasa</option>
                      <option value="Rabu">Rabu</option>
                      <option value="Jum'at">Jum'at</option>
                      <option value="Sabtu">Sabtu</option>
                      <option value="Minggu">Minggu</option>
                    </select>
                  </div>
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
}

export default FormAddJadwal