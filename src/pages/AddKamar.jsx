import React, { useEffect } from 'react';
import Layout from './Layout';
import FormAddKamar from '../components/FormAddKamar';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/dbSlice";

const AddKamar = () => {
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
        <FormAddKamar />
    </Layout>
    )
}

export default AddKamar;