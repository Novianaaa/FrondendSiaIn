import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [kelasId, setKelasId] = useState("");
  const [kelasList, setKelasList] = useState([]);
  const [kamarId, setKamarId] = useState("");
  const [kamarList, setKamarList] = useState([]);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getUserById = async () => {
      fetchKelasList();
      fetchKamarList();
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`, `http://localhost:5000/santri/${id}`);
        setEmail(response.data.email);
        setRole(response.data.role);
        
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
        kelasId: kelasId,
        kamarId: kamarId
        });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
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
  const fetchKamarList = async () => {
    try {
      const response = await axios.get('http://localhost:5000/datakamar');
      const data = response.data;
      setKamarList(data);
    } catch (error) {
      console.error('Error fetching Kamar list:', error);
    }
  };
  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">Update User</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateUser}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="******"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    placeholder="******"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Role</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
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
                <label className="label">Nama Kamar</label>
                <div className="control">
                  <div className="select is-fullwidth">
                  <select
                      value={kamarId}
                      onChange={(e) => setKamarId(e.target.value)}
                    >
                      <option value="">Pilih Kamar</option>
                      {kamarList.map((kamar) => {
                        // console.log(kelas.id); 
                        // console.log(kelasList)// Tampilkan data melalui console.log
                        return (
                          <option key={kamar.id} value={kamar.id}>
                            {kamar.namaKamar}
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

export default FormEditUser;
