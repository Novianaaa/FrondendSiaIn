import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AiFillEdit, AiTwotoneDelete, AiOutlineFileSearch } from "react-icons/ai";
import ReactPaginate from "react-paginate";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [limit, ] = useState(5);
    const [pages, setPages] = useState(0);
    const [rows, setRows] = useState(0);
    const [keyword, setKeyword] = useState("");
    const [query, setQuery] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(()=>{
        getUsers();
    },[page, keyword]);   

    const getUsers = async () => {
        const response = await axios.get(`http://localhost:5000/users?search_query=${keyword}&page=${page}&limit=${limit}`);
        setUsers(response.data.result);
        setPage(response.data.page);
        setPages(response.data.totalPage);
        setRows(response.data.totalRows);
    };

    const changePage = ({selected}) => {
        setPage(selected);
        if(selected === 2) {
            setMsg("Silahkan Cari Data di Kolom Pencarian");
        }else{
            setMsg("");
        }
    };
    const searchData = (e) => {
        e.preventDefault();
        setPage(0);
        setKeyword(query);
    };
    const deleteUser =async (userId)=>{
        await axios.delete(`http://localhost:5000/users/${userId}`);
        getUsers();
    };

  return (
    <div>
        <h1 className="title">Users</h1>
        <h2 className="subtitle">List of Users</h2>
        <Link to="/users/add" className='button is-primary mb-2'>Add User</Link>
        <div className="container mt-2">
            <div className="colomns">
                <div className="colomn is-centered">
                    <form onSubmit={searchData}> 
                        <div className="field has-addons">
                            <div className="control is-expanded">
                                <input 
                                type='text'
                                className='input'
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder='find something hire....'
                                />
                            </div>
                            <div className="control">
                                <button type="submit" className='button is-info'>Search</button>
                            </div>
                        </div>
                    </form>
                        <table className='table is-striped is-fullwidth mt-2'>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Kelas</th>
                                    <th>Kamar</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {users.map((user, index) => (
                                <tr key={user.uuid}>
                                    <td>{index + 1}</td>
                                    <td>{user.santri.nameLengkap}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>{user.santri?.kela?.namaKelas}</td>
                                    <td>{user.santri?.kamar?.namaKamar}</td>
                                    {/* <td>{user.kamar.namaKamar}</td> */}
                                    <td className='is-flex'>
                                        <Link to={`/profile/${user.uuid}`} className="button is-small is-info mr-2"><AiOutlineFileSearch className='mr-2'/>Detail</Link>
                                        <Link to={`/users/edit/${user.uuid}`} className="button is-small is-info mr-2"><AiFillEdit className='mr-2' />Edit</Link>
                                        <button onClick={()=> deleteUser(user.uuid)}className="button is-small is-danger"><AiTwotoneDelete className='mr-2'/>Delete</button> 
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <p>Total Rows: {rows} Page: {rows ? page + 1 : 0} of {pages}</p>
                        <p className="has-text-centered has-text-danger"></p>
                        <nav 
                        className="pagination is-centered"
                        key={rows}
                        role='navigation'
                        aria-label='pagination'
                        >
                        <ReactPaginate
                            previousLabel={"< Prev"}
                            nextLabel={"Next >"}
                            pageCount={Math.min(3, pages)}
                            onPageChange={changePage}
                            containerClassName={"pagination-list"}
                            pageLinkClassName={"pagination-link"}
                            previousLinkClassName={"pagination-previous"}
                            nextLinkClassName={"pagination-next"}
                            activeLinkClassName={"pagination-link is-current"}
                            disabledLinkClassName={"pagination-link is-disabled"}
                        />
                        </nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserList