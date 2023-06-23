import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoHome, IoLogOut, IoBookSharp } from "react-icons/io5";
import { FaUsers, FaClipboardList } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { MdBedroomChild, MdClass} from "react-icons/md";
import { AiFillSignal } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/dbSlice";
 
const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.db);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="menu menu pl-2 has-shadow menu no-scroll">
        <p className="menu-label">General</p>
        <ul className="menu-list ">
          <li>
            <NavLink to={"/dashboard"} className="is-flex">
              <IoHome className="mr-2" />
               Dashboard
            </NavLink>
          </li>
          <li>
                <NavLink to={"/profile/:id"}className="is-flex">
                  <IoPerson className="mr-2" />
                  Profil
                </NavLink>
              </li>
          <li>
                <NavLink to={"/jadwal"}className="is-flex">
                  <FaClipboardList className="mr-2" />
                  Jadwal
                </NavLink>
              </li>
          <li>
                <NavLink to={"/nilai"}className="is-flex">
                  <AiFillSignal className="mr-2" />
                  Nilai
                </NavLink>
              </li>
        </ul>
        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}className="is-flex">
                  <IoPerson className="mr-2" /> 
                  Users
                </NavLink>
              </li> 
              <li>
                <NavLink to={"/santri"}className="is-flex">
                  <FaUsers className="mr-2"/>
                  Data Santri
                </NavLink>
              </li>
              <li>
                <NavLink to={"/ustadz"}className="is-flex">
                  <GiTeacher className="mr-2"/>
                  Data Ustadz
                </NavLink>
              </li>
              <li>
                <NavLink to={"/pelajaran"} className="is-flex">
                  <IoBookSharp className="mr-2"/>
                  Pelajaran
                </NavLink>
              </li>
              <li>
                <NavLink to={"/nilai"} className="is-flex">
                  <AiFillSignal className="mr-2"/>
                  Penilaian
                </NavLink>
              </li>
              <li>
                <NavLink to={"/jadwal"} className="is-flex">
                  <FaClipboardList className="mr-2"/>
                  Jadwal
                </NavLink>
              </li>
              <li>
                <NavLink to={"/kamar"} className="is-flex">
                  <MdBedroomChild className="mr-2"/>
                  Kamar 
                </NavLink>
              </li>
              <li>
                <NavLink to={"/kelas"} className="is-flex">
                  <MdClass className="mr-2"/>
                  Kelas 
                </NavLink>
              </li>
            </ul>
          </div>
        )} 

        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white is-flex">
              <IoLogOut className="mr-2"/> 
              Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
