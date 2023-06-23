import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Nilai = () => {
  const [kelas, setKelas] = useState([]);
  const [selectedKelas, setSelectedKelas] = useState(null);
  const [selectedPelajaran, setSelectedPelajaran] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/datakelas");
      setKelas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectKelas = (kelas) => {
    setSelectedKelas(kelas);
  };

  const handleNilai = (pelajaran) => {
    setSelectedPelajaran(pelajaran.uuid);
    navigate(`/nilai/detail/${pelajaran.uuid}`);
    // Lakukan tindakan lain yang Anda inginkan setelah mengatur selectedPelajaran
  };

  return (
    <div className="content has-text-centered">
      <h3>Pilih Data Kelas</h3>
      <table className="table is-striped is-fullwidth mt-2">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Kelas</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {kelas.map((kelas, index) => (
            <tr key={kelas.uuid}>
              <td>{index + 1}</td>
              <td>{kelas.namaKelas}</td>
              <td>
                <button
                  className="button is-small is-info mr-2"
                  onClick={() => handleSelectKelas(kelas)}
                >
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedKelas && (
        <div>
          <h3>Daftar Pelajarans di kelas {selectedKelas.namaKelas}</h3>
          <table className="table is-striped is-fullwidth mt-2">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Kitab</th>
                <th>Nama Ustadz</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {selectedKelas.pelajarans.map((pelajaran, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{pelajaran.namaKitab}</td>
                  <td>
                    {pelajaran.ustadz ? pelajaran.ustadz.namaUstadz : "N/A"}
                  </td>
                  <td>
                    <button
                      className="button is-small is-info mr-2"
                      onClick={() => handleNilai(pelajaran)}
                    >
                      Nilai
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Nilai;
