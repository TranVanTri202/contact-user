import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchDataContact } from "../redux/ContactSlice";
import ModalAdd from "./ModalAdd";

function TableData() {

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.contacts);
  const valueSearch = useSelector((state) => state.contact.searchValue);

  useEffect(() => {
    dispatch(fetchDataContact());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/editContact/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) { 
      dispatch(deleteContact(id));
    }
  };

  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModelOpen(true);
  };
  const handleCloseModal = () => {
    setIsModelOpen(false);
  };

  const filterContact = contacts.filter((contact) => {
    const isNameMatch = contact.name
      .toLowerCase()
      .includes(valueSearch.toLowerCase());
    const isEmailMatch = contact.email
      .toLowerCase()
      .includes(valueSearch.toLowerCase());
    const isPhoneMatch = contact.phoneNumber.includes(valueSearch);

    return valueSearch === "" || isNameMatch || isEmailMatch || isPhoneMatch;
  });

  return (
    <Box sx={{ width: "80%", margin: "auto", mt: "30px" }}>
      <Button
        sx={{ float: "right", mb: "10px" }}
        variant="contained"
        endIcon={<AddIcon />}
        onClick={handleOpenModal}
      >
        Add
      </Button>
      <Paper>
        <Table>
          <TableHead sx={{ backgroundColor: "rgb(109, 171, 192)" }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterContact.length === 0 ? ( // Kiểm tra nếu không tìm thấy dữ liệu
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No data found
                </TableCell>
              </TableRow>
            ) : (
              // Hiển thị dữ liệu
              filterContact.map((contact, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{contact.name}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.phoneNumber}</TableCell>
                    <TableCell>
                      <Box>
                        <Button onClick={() => handleEdit(contact.id)}>
                          <EditIcon titleAccess="Edit" color="secondary" />
                        </Button>
                        <Button>
                          <DeleteForeverIcon
                            titleAccess="Delete"
                            color="error"
                            onClick={() => handleDelete(contact.id)}
                          />
                        </Button>{" "}
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </Paper>
      <ModalAdd isModelOpen={isModelOpen} handleCloseModal={handleCloseModal} />
    </Box>
  );
}

export default TableData;
