import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";

const FormEditSantri = () => {
  const [nis, setNis] = useState("");
  const [nameLengkap, setNameLengkap] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [noTelepon, setNoTelepon] = useState("");
  const [agama, setAgama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [asalSekolah, setAsalSekolah] = useState("");
  const [statusSantri, setStatusSantri] = useState("");
  const [namaWali, setNamaWali] = useState("");
  const [pekerjaanWali, setPekerjaanWali] = useState("");
  const [alamatWali, setAlamatWali] = useState("");
  const [noTeleponWali, setNoTeleponWali] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate("");
  const { id } = useParams();

  useEffect(()=>{
    const getSantriById = async() => {
      try {
        const response = await axios.get(`http://localhost:5000/santri/${id}`);
        setNis(response.data.nis);
        setNameLengkap(response.data.nameLengkap);
        setTempatLahir(response.data.tempatLahir);
        setTanggalLahir(response.data.tanggalLahir);
        setJenisKelamin(response.data.jenisKelamin);
        setNoTelepon(response.data.noTelepon);
        setAgama(response.data.agama);
        setAlamat(response.data.alamat);
        setAsalSekolah(response.data.asalSekolah);
        setStatusSantri(response.data.statusSantri);
        setNamaWali(response.data.namaWali);
        setPekerjaanWali(response.data.pekerjaanWali);
        setAlamatWali(response.data.alamatWali);
        setNoTeleponWali(response.data.noTeleponWali);

      } catch (error) {
        if(error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getSantriById();
  }, [id]);

const updateSantri = async (e) => {
  e.preventDefault();
  try {
    await axios.patch(`http://localhost:5000/santri/${id}`, {
      nis: nis,
      nameLengkap: nameLengkap,
      tempatLahir: tempatLahir,
      tanggalLahir: tanggalLahir,
      jenisKelamin: jenisKelamin,
      agama: agama,
      noTelepon: noTelepon,
      alamat : alamat,
      asalSekolah: asalSekolah,
      statusSantri: statusSantri,
      namaWali: namaWali,
      pekerjaanWali: pekerjaanWali,
      noTeleponWali: noTeleponWali
    });
    navigate("/santri");
  } catch (error) {
    if(error.response) {
      setMsg(error.response.data.msg);
    }
  }
}
return (
  <div>
    <h1 className="title">Data Santri</h1>
    <h2 className="subtitle">Update Data Santri</h2>
    <div className="card is-shadowless">
      <div className="card-content">
        <div className="content">
          <form onSubmit={updateSantri}>
            <p className="has-text-centered">{msg}</p>
            <div className="field">
              <label className="label">Nomer Induk Santri</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nis}
                  onChange={(e) => setNis(e.target.value)}
                />
              </div>
              <label className="label">Nama Santri</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nameLengkap}
                  onChange={(e) => setNameLengkap(e.target.value)}
                />
              </div>
              <label className="label">Tempat Lahir</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={tempatLahir}
                  onChange={(e) => setTempatLahir(e.target.value)}
                />
              </div>
              <label className="label">Tanggal Lahir</label>
              <div className="control">
                <input
                  type="date"
                  className="input"
                  value={tanggalLahir}
                  onChange={(e) => setTanggalLahir(e.target.value)}
                />
              </div>
                <label className="label">Jenis Kelamin</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={jenisKelamin}
                      onChange={(e) => setJenisKelamin(e.target.value)}>
                      <option >Pilih</option>
                      <option value="Laki-Laki">Laki-Laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                </div>
              <label className="label">No Telepone</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={noTelepon}
                  onChange={(e) => setNoTelepon(e.target.value)}
                />
              </div>
              <label className="label">Agama</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={agama}
                  onChange={(e) => setAgama(e.target.value)}
                />
              </div>
              <label className="label">Alamat</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                />
              </div>
              <label className="label">Asal Sekolah</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={asalSekolah}
                  onChange={(e) => setAsalSekolah(e.target.value)}
                />
              </div>
              <label className="label">Status Santri</label>
              <div className="control">
              <div className="select is-fullwidth">
                    <select
                      value={statusSantri}
                      onChange={(e) => setStatusSantri(e.target.value)}>
                      <option >Pilih</option>
                      <option value="Mahasiswa">Mahasiswa</option>
                      <option value="Pelajar">Pelajar</option>
                      <option value="Kerja">kerja</option>
                    </select>
                  </div>
              </div>
              <label className="label">Nama Wali</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={namaWali}
                  onChange={(e) => setNamaWali(e.target.value)}
                />
              </div>
              <label className="label">Pekerjaan Wali</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={pekerjaanWali}
                  onChange={(e) => setPekerjaanWali(e.target.value)}
                />
              </div>
              <label className="label">Alamat Wali</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={alamatWali}
                  onChange={(e) => setAlamatWali(e.target.value)}
                />
              </div>
              <label className="label">No Telepon Wali</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={noTeleponWali}
                  onChange={(e) => setNoTeleponWali(e.target.value)}
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

export default FormEditSantri