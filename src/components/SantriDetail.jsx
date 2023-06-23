import React, { useEffect, useState } from 'react'
import logo from "../logo.png";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SantriDetail = () => {
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
  // const [kelasId, setKelasId] = useState("");
  const [msg, setMsg] = useState("");
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
        // setKelasId(response.data.kela.namakelas)
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

  return (
    <div >
      <div className="columns is-centered mt-3 mb-3">
         <h1 className="title ">Biodata Santri</h1>
      </div>
    <div className="card is-shadowless">
      <div className="card-content">
        <div className="content columns is-centered ">
        <img src={logo} width={100}alt="logo" />
       </div>
      </div>
    </div>
    <table className='table is-fullwidth is-centered mt-2'>
  <thead>
    <tr>
      <th className="has-text-centered "></th>
      <th className="has-text-centered">Profile Santri</th>
      <th className="has-text-centered">
      </th>
      
    </tr>
  </thead>
  <tbody className="has-text-left">
    <tr>
      <td/>
      <td className="has-text-left"> Nama</td>
      <td className="has-text-left">{nameLengkap}</td>
    </tr>
    <tr>
      <td/>
      <td className="has-text-left">Nis</td>
      <td className="has-text-left">{nis}</td>  
    </tr>
    <tr>
      <td/>
      <td >Tempat Lahir</td>
      <td className="has-text-left">{tempatLahir}</td>
    </tr>
    <tr>
    <td/>
      <td >Tanggal Lahir</td>
      <td className="has-text-left">{tanggalLahir}</td>
    </tr>
    {/* <tr>
    <td/>
      <td>Kelas</td>
      <td>{kelasId.namaKelas}</td>
    </tr> */}
    {/* <tr>
    <td/>
      <td>Kamar</td>
      <td>{santri.kamar.namaKamar}</td>
    </tr> */}
    <tr>
    <td/>
      <td>Jenis Kelamin</td>
      <td>{jenisKelamin}</td>
    </tr>
    <tr>
    <td/>
      <td>Agama</td>
      <td>{agama}</td>
    </tr>
    <tr>
    <td/>
      <td>No Telepon</td>
      <td>{noTelepon}</td>
    </tr>
    <tr>
    <td/>
      <td>Alamat</td>
      <td>{alamat}</td>
    </tr>
    <tr>
    <td/>
      <td>Asal Sekolah</td>
      <td>{asalSekolah}</td>
    </tr>
    <tr>
    <td/>
      <td>Status Santri</td>
      <td>{statusSantri}</td>
    </tr>
    <tr>
    <td/>
      <td>Nama Wali</td>
      <td>{namaWali}</td>
    </tr>
    <tr>
    <td/>
      <td>Pekerjaan Wali</td>
      <td>{pekerjaanWali}</td>
    </tr>
    <tr>
    <td/>
      <td>No Telepon Wali</td>
      <td>{noTeleponWali}</td>
    </tr>
  </tbody>
</table>
    </div>
  );
}

export default SantriDetail