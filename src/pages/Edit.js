import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataContact, updateContact } from "../redux/ContactSlice";
import { Button, TextField, Typography } from "@mui/material";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
};

function MyFormEdit() {

  const navigate = useNavigate();
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
    await dispatch(updateContact(dataContact));
    navigate("/");
    resetForm();
  };

  const handleChange = (prev, value) => {
    setDataContact({ ...dataContact, [prev]: value });
  };

  return (
    <>
      <div className="formEdit">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Typography variant="h5">Edit Contact</Typography>

            <Field
              as={TextField}
              type="text"
              id="name"
              label="name"
              name="name"
              margin="normal"
              value={dataContact?.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />

            <Field
              as={TextField}
              type="email"
              id="email"
              name="email"
              label="Email"
              margin="normal"
              value={dataContact?.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />

            <Field
              as={TextField}
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              label="Phone"
              margin="normal"
              value={dataContact?.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
            />

            <Button sx={{ mr: "10px" }} variant="contained" type="submit">
              Edit
            </Button>
            <Link to="/">
              <Button variant="outlined">Back</Button>
            </Link>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default MyFormEdit;
