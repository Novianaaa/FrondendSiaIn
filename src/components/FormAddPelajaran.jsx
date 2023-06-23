import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddPelajaran = () => {
  const [jenisPelajaran, setJenisPelajaran] = useState("");
  const [namaKitab, setNamaKitab] = useState("");
  const [ustadzId, setUstadzId] = useState("");
  const [kelasId, setKelasId] = useState("");
  const [kelasList, setKelasList] = useState([]);
  const [ustadzList, setUstadzList] = useState([]);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const savePelajaran =async (e) => {
    e.preventDefault();
    console.log("Data yang akan dikirim:", {
      jenisPelajaran: jenisPelajaran,
      namaKitab: namaKitab,
      ustadzId: ustadzId,
      kelasId: kelasId
    });
    try {
        await axios.post("http://localhost:5000/datapelajaran", {
            jenisPelajaran: jenisPelajaran,
            namaKitab: namaKitab,
            ustadzId: ustadzId,
            kelasId: kelasId
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        navigate("/pelajaran");
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
};
  const fetchUstadzList = async () => {
    try {
      const response = await axios.get('http://localhost:5000/dataustadz');
      const data = response.data;
      setUstadzList(data);
    } catch (error) {
      console.error('Error fetching ustadz list:', error);
    }  
  };

  const fetchKelasList = async () => {
    try {
      const response = await axios.get('http://localhost:5000/datakelas');
      const data = response.data;
      setKelasList(data);
    } catch (error) {
      console.error('Error fetching Kelas list:', error);
    }
  };
  
  useEffect(() => {
    fetchUstadzList();
    fetchKelasList();
  }, []);
  return (
    <div>
      <h1 className="title">Pelajaran</h1>
      <h2 className="subtitle">Add Data Pelajaran</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={savePelajaran}>
            <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Jenis Pelajaran</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={jenisPelajaran}
                    onChange={(e) => setJenisPelajaran(e.target.value)}
                    placeholder="Jenis Pelajaran"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Nama Kitab</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={namaKitab}
                    onChange={(e) => setNamaKitab(e.target.value)}
                    placeholder="Nama Kitab"
                  />
                </div>
              </div> 
              <div className="field">
                <label className="label">Nama Ustadz</label>
                <div className="control">
                  <div className="select is-fullwidth">
                  <select
                      value={ustadzId}
                      onChange={(e) => setUstadzId(e.target.value)}
                    >
                      <option value="">Pilih Ustadz</option>
                      {ustadzList.map((ustad) => {
                        // console.log(ustad.namaUstadz); // Tampilkan data melalui console.log
                        return (
                          <option key={ustad.id} value={ustad.id}>
                            {ustad.namaUstadz}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Nama Kelas</label>
                <div className="control">
                  <div className="select is-fullwidth">
                  <select
                      value={kelasId}
                      onChange={(e) => setKelasId(e.target.value)}
                    >
                      <option value="">Pilih Kelas</option>
                      {kelasList.map((kelas) => {
                        // console.log(kelas.id); 
                        // console.log(kelasList)// Tampilkan data melalui console.log
                        return (
                          <option key={kelas.id} value={kelas.id}>
                            {kelas.namaKelas}
                          </option>
                        );
                      })}
                      {/* console.log(return); */}
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
};

export default FormAddPelajaran;
