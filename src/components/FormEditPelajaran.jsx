import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditPelajaran = () => {
  const [jenisPelajaran, setJenisPelajaran] = useState("");
  const [namaKitab, setNamaKitab] = useState("");
  const [ustadzId, setUstadzId] = useState("");
  const [kelasId, setKelasId] = useState("");
  const [ustadzList, setUstadzList] = useState([]);
  const [kelasList, setKelasList] = useState([]);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate("");
  const {id} = useParams();

  useEffect(() => {
        const getPelajaranById = async() => {
          
            fetchUstadzList();
            fetchKelasList();
            try {
                const response = await axios.get(`http://localhost:5000/pelajaran/${id}`);
                setJenisPelajaran(response.data.jenisPelajaran);
                setNamaKitab(response.data.namaKitab);
                // setUstadzList(response.data);
                // setKelasList(response.data)
            } catch (error) {
                if(error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };
        getPelajaranById();
    }, [id]);

    const updatePelajaran = async (e) => {
        e.preventDefault();
        try {
          await axios.patch(`http://localhost:5000/pelajaran/${id}`, {
            jenisPelajaran: jenisPelajaran,
                namaKitab: namaKitab,
                ustadzId: ustadzId,
                kelasId: kelasId
            });
            navigate("/pelajaran");
        } catch (error) {
            if (error.response){
                setMsg(error.response.data.msg);
            }
        }
        console.log({
          jenisPelajaran: jenisPelajaran,
          namaKitab: namaKitab,
          ustadzId: ustadzId,
          kelasId: kelasId
        });
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
   
  return (
    <div>
      <h1 className="title">Data Pelajaran</h1>
      <h2 className="subtitle">Update Pelajaran</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updatePelajaran}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Jenis Pelajaran</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={jenisPelajaran}
                    onChange={(e) => setJenisPelajaran(e.target.value)}
                  />
                </div>
                <label className="label">Nama Kitab</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={namaKitab}
                    onChange={(e) => setNamaKitab(e.target.value)}
                  />
                </div>
                </div>
                {/* <div className="field">
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
              </div> */}
              {/* <div className="field">
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
                      console.log(return);
                    </select>
                  </div>
                </div>
              </div> */}
              <div className="field">
                <label className="label">Ustadz</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={ustadzId}
                      onChange={(e) => setUstadzId(e.target.value)}>
                      <option value="">Pilih Ustadz</option>
                      {ustadzList.map((ustadz) => (
                        <option key={ustadz.id} value={ustadz.id}>
                          {ustadz.namaUstadz}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Kelas</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={kelasId}
                      onChange={(e) => setKelasId(e.target.value)}>
                      <option value="">Pilih Kelas</option>
                      {kelasList.map((kelas) => (
                        <option key={kelas.id} value={kelas.id}>
                          {kelas.namaKelas}
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

export default FormEditPelajaran