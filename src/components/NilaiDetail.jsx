import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  Link, useNavigate, useParams } from 'react-router-dom';
import { AiFillEdit, AiOutlineFileSearch } from "react-icons/ai";


const NilaiDetail = () => {
  const [namaKitab, setNamaKitab] = useState("");
  const [santris, setSantris] = useState([]);
  const [namaUstadz, setNamaUstadz] = useState("")
  const [namaKelas, setNamaKelas] = useState("")
  const [msg, setMsg] = useState("");
  const { id } = useParams();
  

  useEffect (()=>{
    const getPelajaranById = async()=>{
      try {
        const response = await axios.get(`http://localhost:5000/pelajaran/${id}`);
        setNamaKitab(response.data.namaKitab);
        setNamaKelas(response.data.kela.namaKelas);
        setSantris(response.data.kela.santris);
        setNamaUstadz(response.data.ustadz.namaUstadz);
      } catch (error) {
        if(error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getPelajaranById();
  }, [id]);

  return (
    <div>
      <div className="columns is-centered mt-3 mb-5">
         <h1 className="title ">Input Nilai Raport Santri</h1>
      </div>
      <div className="card is-shadowless">
      <div className="card-content">
        <div className="content columns">
          <table className="table is-narrow is-left">
            <tbody>
            <div className="column is-3">
              <tr>
                <td>Nama Kelas</td>
                <td> : {namaKelas}</td>
              </tr>
              </div>
              <div className="column is-3">
              <tr>
                <td>Nama Kitab</td>
                <td> : {namaKitab}</td>
              </tr>
              </div>
              <div className="column is-3">
              <tr>
                <td>Nama Ustad</td>
                <td>: {namaUstadz}</td>
              </tr>
              </div>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="card-content">
        <div className="content columns">
            <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Santri</th>
              <th>Nilai</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {santris.map((santri, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{santri.nameLengkap}</td>
                <td>{santri.nilai ? santri.nilai.nilai : "0"}</td>
                <td>
                    <Link to={`/nilai/santri/${santri.uuid}`} className="button is-small is-info mr-2"><AiOutlineFileSearch className='mr-2'/>Nilai</Link>
                    <Link to={`/santri/edit/${santri.uuid}`} className="button is-small is-info mr-2"><AiFillEdit className='mr-2' />Edit</Link>
                    {/* <button onClick={()=> deleteSantri(santri.uuid)}className="button is-small is-danger"><AiTwotoneDelete className='mr-2'/>Delete</button>  */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </div>
    </div>
  )
}

export default NilaiDetail
