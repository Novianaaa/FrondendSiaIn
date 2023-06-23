import React from "react";
// import { useSelector } from "react-redux";
import logo from "../logo.png";

const Welcome = () => {
  // const { user } = useSelector((state) => state.db);
  return (
    <div>

    <div className="card">
      <header className="card-header ">
        <p className="card-header-title is-centered">
          Pengumuman dan Peraturan Pondok Pesantren Inayatullah </p>
        <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div className="card-content">
      <div className="columns is-centered ">
        <img src={logo} width={100}alt="logo" />
      </div>
      <div className="columns is-centered">
        <table className="table" style={{ width: '50%' }}>
          <thead>
            <tr>
              <th colSpan="2" className="has-text-centered">PERATURAN SANTRI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Wajib Mengikuti Sholat Berjamaah</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Wajib Mengikuti Pengajian</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Batas Maksimal Pulang ke Pondok Pukul 18:00 WIB</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</div>
</div>
  );
};

export default Welcome;
