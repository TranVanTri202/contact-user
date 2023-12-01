import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { Field, Form, Formik } from "formik"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addContact } from "../redux/ContactSlice"

const ModalAdd = ({isModelOpen, handleCloseModal}) =>{
    const dispatch = useDispatch()
    const [dataContact, setDataContact] = useState({
        name: "",
        email:"",
        phone:""
      })
    
      const hanleChangeValue = (prev, value) =>{
        setDataContact({...dataContact, [prev]:value})
      }
      const handleSubmit =async () =>{
        await dispatch(addContact(dataContact))
      }
    return(
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
          <Formik
            initialValues={{ name: "", email: "", phone: "" }}
            
          >
            <Form>
              <Field
                as={TextField}
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => hanleChangeValue("name", e.target.value)}
              />
              <Field
                as={TextField}
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => hanleChangeValue("email", e.target.value)}

              />
              <Field
                as={TextField}
                name="phone"
                label="Phone"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => hanleChangeValue("phoneNumber", e.target.value)}

              />
              <Button onClick={handleSubmit} type="submit" variant="contained" color="primary">
                Submit
              </Button>
              <Button onClick={handleCloseModal} sx={{marginLeft:"10px"}} variant="outlined">Cancel</Button>
            </Form>
          </Formik>
        </Box>
      </Modal>
        </>
    )
}

export default ModalAdd