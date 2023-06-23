import React ,{ useEffect }from 'react';
import Layout from './Layout';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/dbSlice";
import FormEditPelajaran from '../components/FormEditPelajaran';

const EditPelajaran = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.db);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <Layout>
        <FormEditPelajaran/> 
    </Layout>
  );
};

export default EditPelajaran;