import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/ContactSlice";

const ModalAdd = ({ isModelOpen, handleCloseModal }) => {
  const dispatch = useDispatch();
  const [dataContact, setDataContact] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const hanleChangeValue = (prev, value) => {
    setDataContact({ ...dataContact, [prev]: value });
  };
  const handleSubmit = async () => {
    if (
      dataContact.name !== "" &&
      dataContact.email !== "" &&
      dataContact.phoneNumber !== ""
    ) {
      await dispatch(addContact(dataContact));
      alert("Add succes");
      handleCloseModal();
      setDataContact({
        name: "",
        email: "",
        phoneNumber: "",
      });
    } else {
      alert("Please fill in all fields!");
    }
  };
  return (
    <>
      <Modal open={isModelOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            p: 4,
            width: 400,
          }}
        >
          <Typography variant="h5">Add Contact</Typography>
          <Formik initialValues={dataContact}>
            <Form>
              <Field
                as={TextField}
                name="Name"
                label="name"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                onChange={(e) => hanleChangeValue("name", e.target.value)}
              />
              <Field
                as={TextField}
                name="Email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => hanleChangeValue("email", e.target.value)}
              />
              <Field
                as={TextField}
                type="number"
                name="phone"
                label="Phone"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) =>
                  hanleChangeValue("phoneNumber", e.target.value)
                }
              />
              <Button
                onClick={handleSubmit}
                type="submit"
                variant="contained"
                color="primary"
              >
                Add
              </Button>
              <Button
                onClick={handleCloseModal}
                sx={{ marginLeft: "10px" }}
                variant="outlined"
              >
                Cancel
              </Button>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default ModalAdd;
