import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddSantri = () => {
  const [nis, setNis] = useState("");
  const [name, setname] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [agama, setAgama] = useState("");
  const [noTelepon, setNoTelepon] = useState("");
  const [alamat, setAlamat] = useState("");
  const [asalSekolah, setAsalSekolah] = useState("");
  const [statusSantri, setStatusSantri] = useState("");
  const [namaWali, setNamaWali] = useState("");
  const [pekerjaanWali, setPekerjaanWali] = useState("");
  const [alamatWali, setAlamatWali] = useState("");
  const [noTeleponWali, setNoTelponWali] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveSantri = async (e) => {
    e.preventDefault();
    const formData =new FormData();
    formData.append("nis", nis);
    formData.append("name_lengkap", name);
    formData.append("tempat_lahir", tempatLahir);
    formData.append("tanggal_lahir", tanggalLahir);
    formData.append("jenis_kelamin", jenisKelamin);
    formData.append("no_telepon", noTelepon);
    formData.append("agama", agama);
    formData.append("alamat", alamat);
    formData.append("asal_sekolah", asalSekolah);
    formData.append("status_santri", statusSantri);
    formData.append("nama_wali", namaWali);
    formData.append("pekerjaan_wali", pekerjaanWali);
    formData.append("alamat_wali", alamatWali);
    formData.append("no_telepon_wali", noTeleponWali);
    try {
      await axios.post("http://localhost:5000/santri", formData, {
        headers:{
          "Content-Type":"multipart/form-data"
        }
      });
      navigate("/santri");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title">Data Santri</h1>
      <h2 className="subtitle">Add New Santri</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveSantri}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    placeholder="Nis"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Nis</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={nis}
                    onChange={(e) => setNis(e.target.value)}
                    placeholder="Nis"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tempat Lahir</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={tempatLahir}
                    onChange={(e) => setTempatLahir(e.target.value)}
                    placeholder="tempat lahir"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tanggal Lahir</label>
                <div className="control">
                  <input
                    type="date"
                    className="input"
                    value={tanggalLahir}
                    onChange={(e) => setTanggalLahir(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
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
              </div>
              <div className="field">
                <label className="label">No Telepon</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={noTelepon}
                    onChange={(e) => setNoTelepon(e.target.value)}
                    placeholder="Nomer telpon"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Agama</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={agama}
                    onChange={(e) => setAgama(e.target.value)}
                    placeholder="Agama"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Alamat</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                    placeholder="Alamat"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Asal Sekolah</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={asalSekolah}
                    onChange={(e) => setAsalSekolah(e.target.value)}
                    placeholder="Asal Sekolah"
                  />
                </div>
              </div>
              <div className="field">
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
              </div>
              <div className="field">
                <label className="label">Nama Wali</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={namaWali}
                    onChange={(e) => setNamaWali(e.target.value)}
                    placeholder="Nama Wali"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Pekerjaan Wali </label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={pekerjaanWali}
                    onChange={(e) => setPekerjaanWali(e.target.value)}
                    placeholder="Pekerjaan Wali"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Alamat Wali </label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={alamatWali}
                    onChange={(e) => setAlamatWali(e.target.value)}
                    placeholder="Alamat Wali"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">No Telepon Wali </label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={noTeleponWali}
                    onChange={(e) => setNoTelponWali(e.target.value)}
                    placeholder="No Telepon Wali"
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
  );
};

export default FormAddSantri;
