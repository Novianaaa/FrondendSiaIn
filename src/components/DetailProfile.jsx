// import React, {useState, useEffect} from 'react';
// import axios from "axios";
// import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiFillEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';
import logo from "../logo.png";

const DetailProfile = () => {
  const { user } = useSelector((state) => state.db);
  return (
    <div >
      <div className="columns is-centered mt-3">
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
      <th className="has-text-centered">My Profile</th>
      <th className="has-text-centered">
      <Link to={`/santri/edit/${user.santri.uuid}`} className="button is-small is-info mr-2"><AiFillEdit className='mr-2' />Edit</Link>
      </th>
      
    </tr>
  </thead>
  <tbody className="has-text-left">
    <tr>
      <td/>
      <td className="has-text-left"> Nama</td>
      <td className="has-text-left">{user && user.santri.nameLengkap}</td>
    </tr>
    <tr>
      <td/>
      <td className="has-text-left">Nis</td>
      <td className="has-text-left">{user && user.santri.nis}</td>  
    </tr>
    <tr>
      <td/>
      <td >Tempat Lahir</td>
      <td className="has-text-left">{user && user.santri.tempatLahir}</td>
    </tr>
    <tr>
    <td/>
      <td >Tanggal Lahir</td>
      <td className="has-text-left">{user && user.santri.tanggalLahir}</td>
    </tr>
    <tr>
    <td/>
      <td>Kelas</td>
      <td>{user && user.santri.kela.namaKelas}</td>
    </tr>
    <tr>
    <td/>
      <td>Kamar</td>
      <td>{user && user.santri.kamar.namaKamar}</td>
    </tr>
    <tr>
    <td/>
      <td>Jenis Kelamin</td>
      <td>{user && user.santri.jenisKelamin}</td>
    </tr>
    <tr>
    <td/>
      <td>Agama</td>
      <td>{user && user.santri.agama}</td>
    </tr>
    <tr>
    <td/>
      <td>No Telepon</td>
      <td>{user && user.santri.noTelepon}</td>
    </tr>
    <tr>
    <td/>
      <td>Alamat</td>
      <td>{user && user.santri.alamat}</td>
    </tr>
    <tr>
    <td/>
      <td>Asal Sekolah</td>
      <td>{user && user.santri.asalSekolah}</td>
    </tr>
    <tr>
    <td/>
      <td>Status Santri</td>
      <td>{user && user.santri.statusSantri}</td>
    </tr>
    <tr>
    <td/>
      <td>Nama Wali</td>
      <td>{user && user.santri.namaWali}</td>
    </tr>
    <tr>
    <td/>
      <td>Pekerjaan Wali</td>
      <td>{user && user.santri.pekerjaanWali}</td>
    </tr>
    <tr>
    <td/>
      <td>No Telepon Wali</td>
      <td>{user && user.santri.noTeleponWali}</td>
    </tr>
  </tbody>
</table>
    </div>
  );
}

export default DetailProfile