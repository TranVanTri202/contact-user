import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataContact, updateContact } from "../redux/ContactSlice";
import { Button } from "@mui/material";

const initialValues = {
  name: "",
  email: "",
};

function MyFormEdit() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector((state) => state.contact.contacts);
  const [dataContact, setDataContact] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    dispatch(fetchDataContact());
    const editContact = data.find((contact) => contact.id === id);
    setDataContact(editContact);
  }, [dispatch, id]);

  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(updateContact(dataContact))
    navigate("/")
    resetForm();
  };

  const handleChange = (prev, value) => {
      setDataContact({...dataContact, [prev]:value})
  };

  const handleSeach = (value) => {};

  return (
    <>
      <Navbar onSearchChange={handleSeach} />
      <div className="formEdit">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                value={dataContact?.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                value={dataContact?.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
           
            </div>

            <div>
              <label htmlFor="email">Phone</label>
              <Field
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                value={dataContact?.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
              />
              
            </div>
            <button type="submit">Submit</button>
            <Link to="/"><Button variant="outlined">Back</Button></Link>
            
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default MyFormEdit;
