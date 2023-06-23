import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import ReactPaginate from 'react-paginate';

const Kamarlist = () => {
    const [ kamar, setKamar] = useState([]);
    const [page, setPage] = useState(0);
    const [limit, ] = useState(5);
    const [pages, setPages] = useState(0);
    const [rows, setRows] = useState(0);
    const [keyword, setKeyword] = useState("");
    const [query, setQuery] = useState("");
    const [msg, setMsg] = useState("");

useEffect(()=> {
    getKamar();
}, [page, keyword]);

    const getKamar = async () => {
        const response = await axios.get(`http://localhost:5000/kamar?search_query=${keyword}&page=${page}&limit=${limit}`);
        setKamar(response.data.result);
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
    const deleteKamar = async (kamarId) => {
        await axios.delete(`http://localhost:5000/kamar/${kamarId}`);
        getKamar();
    }
  return (
    <div>
        <h1 className="title">Data Kamar Santri </h1>
        <h2 className="subtitle"> List of Data Kamar</h2>
        <Link to="/kamar/add" className='button is-primary mb-2'>Add Kamar</Link>
        <div className="container mt-2">
            <div className="colomns">
                <div className="colomn is-centered mt-2">
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
                                    <th>Nama Kamar</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {kamar.map((kamar, index) => (
                                <tr key={kamar.uuid}>
                                    <td>{index + 1}</td>
                                    <td>{kamar.namaKamar}</td>
                                    <td>
                                    <Link to={`/kamar/edit/${kamar.uuid}`} className="button is-small is-info mr-2"><AiFillEdit className='mr-2' />Edit</Link>
                                        <button onClick={()=> deleteKamar(kamar.uuid)}className="button is-small is-danger"><AiTwotoneDelete className='mr-2'/>Delete</button> 
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

export default Kamarlist