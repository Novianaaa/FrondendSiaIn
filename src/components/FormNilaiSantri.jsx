import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const InputNilaiForm = () => {
  const [namaSantri, setNamaSantri] = useState('');
  const [nilai, setNilai] = useState('');
  const [msg, setMsg] = useState("");
  const{ id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getSantriById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/santri/${id}`);
        setNamaSantri(response.data.nameLengkap);
      } catch (error) {
        setMsg(error.response.data.msg);
      }
    };

    getSantriById();
  }, [id]);

 const saveNilai = async (e) => {
  e.preventDefault();
  try {
    await axios.post("http://localhost:5000/nilai", {
      namaSantri: namaSantri,
      nilai: nilai,
    });
    navigate("/nilai"); 
  } catch (error) {
    if (error.response) {
      setMsg(error.response.data.msg);
    }
  }
 }

  return (
    <form onSubmit={saveNilai}>
        <p className="has-text-centered">{msg}</p>
        <div className="field">
          <label className="label">Nama Santri</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={namaSantri}
              onChange={(e) => setNamaSantri(e.target.value)}
              readOnly
              />
          </div>
        </div>

      <div className="field">
        <label className="label">Nilai</label>
        <div className="control">
          <input
            className="input"
            type="number"
            value={nilai}
            onChange={(e) => setNilai(e.target.value)}
            placeholder="Masukkan Nilai"
            required
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button type="submit" className="button is-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputNilaiForm;
