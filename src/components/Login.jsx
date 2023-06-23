import React, {useState, useEffect} from 'react';
import logo from "../logo.png";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { LoginUser, reset } from '../features/dbSlice';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, isError, isSuccess, isLoading, message } = useSelector((state) => state.db);

    useEffect(() => {
        if (user || isSuccess) {
          navigate("/dashboard");
        }
        dispatch(reset());
      }, [user, isSuccess, dispatch, navigate]);

    const Db = (e) => {
    e.preventDefault();
    dispatch(LoginUser({email, password }));
    };

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
            <div className="columns is-centered">
                <div className="colomn is-4">
                    <form onSubmit={Db} className="box">
                        {isError && <p className='has-text-centered'>{message}</p>}
                        <div className="columns is-centered">
                        <h1 className="title is-centered">Selamat Datang</h1>
                        </div>
                        <div className="columns is-centered">
                        <img is-centered src={logo} width={60}alt="logo" />
                        </div>
                        <p className="subtitle">silahkan login ke akun anda!!!</p>
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input 
                                type="text" 
                                className="input" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder='Masukan Email ' />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input type="password" 
                                className="input" 
                                value={password} 
                                onChange={(e)=>setPassword(e.target.value)} 
                                placeholder='*********' />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <button type='submit' className="button is-success is-fullwidth">
                                {isLoading ? 'Loading...' : 'Login'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Login