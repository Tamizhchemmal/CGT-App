import Form from "react-bootstrap/Form";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import TablePagination from "@mui/material/TablePagination";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Dropdown,
  DropdownButton,
  Modal,
  Button,
  ModalTitle,
  CloseButton,
} from "react-bootstrap";
import { Card } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const columns = [
  { id: "batchcode", label: "Batch Code", minWidth: 100, align: "center" },
  
  {
    id: "startdate",
    label: "Start Date",
    minWidth: 170,
    align: "center",

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "trainername",
    label: "Trainer Name",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "currenttopic",
    label: "Current Topic",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "active",
    label: "Active",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "changes",
    label: "Edit",
    minWidth: 170,
    align: "center",

    format: (value) => value.toLocaleString("en-US"),
  },
];

// const rows = [];

export default function BatchTable() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {};

  
  const batchCreate = (e) => {
    e.preventDefault();
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [alertt, setAlertt] = useState(null);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [apiData, setApiData] = useState([]);

  const callApiData = async (e) => {
    const batchData = await axios.get(
      "https://64b638a2df0839c97e1528f4.mockapi.io/batch"
    );
    setApiData(batchData.data);
  };

  useEffect(() => {
    callApiData();
  }, []);
  const opnetable = (apiData) => {
    setShow(true);
  };
  const handleedit = (e) => {
    alert("button");
  };
  // Delete referral
  const deletebatch = async (id) => {
    await axios.delete(
      "https://64a587de00c3559aa9bfdbd4.mockapi.io/refData/" + id
    );
    alert("Batch deleted");

    callApiData();
  };
  var count;

  const Active = ({ count }) => {
    if (count <= 10) {
      return <div>Silver</div>;
    } else if ((count) => 10) {
      return <div>Gold</div>;
    }
  };

  return (
    <>
      <div className="tableData">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 540 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "lightblue" }}>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        backgroundColor: " #002333",
                        color: "#ffffff",
                        fontSize: "18px",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {apiData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((apiData) => {
                    return (
                      <TableRow key={apiData.id} hover role="checkbox">
                        <TableCell
                          align="center"
                          id="table-body"
                          style={{ fontSize: 16 }}
                          onClick={opnetable}
                        >
                          {apiData.batchInput.batchname}
                        </TableCell>
                        <TableCell
                          align="center"
                          id="table-body"
                          style={{ fontSize: 16 }}
                          onClick={opnetable}
                        >
                          {apiData.batchInput.startdate}
                        </TableCell>
                        <TableCell
                          align="center"
                          id="table-body"
                          style={{ fontSize: 16 }}
                          onClick={opnetable}
                        >
                          {apiData.batchInput.trainername}
                        </TableCell>
                        <TableCell
                          align="center"
                          id="table-body"
                          style={{ fontSize: 16 }}
                          onClick={opnetable}
                        >
                          12
                        </TableCell>
                        <TableCell
                          align="center"
                          id="table-body"
                          style={{ fontSize: 16 }}
                          onClick={opnetable}
                        >
                          {" "}
                          <Active count={15} />
                        </TableCell>
                        <TableCell
                          align="center"
                          id="table-body"
                          style={{ fontSize: 16 }}
                        >
                          <BiSolidMessageSquareEdit
                            id="edit-icon"
                            onClick={handleedit}
                          />
                          <MdDelete
                            id="dlt-icon"
                            onClick={() => deletebatch(apiData.id)}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={apiData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        {/* model profile */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header
            style={{ backgroundColor: " #002333 ", color: "white" }}
          >
            <Modal.Title style={{ color: "white" }}>
              Referral Profile
            </Modal.Title>

            <CloseButton variant="white" onClick={handleClose} />
          </Modal.Header>
          <Modal.Body>
            <div>
              <Card
                sx={{
                  display: "flex",
                  width: "100%",
                  height: "400px",
                  boxShadow: "rgba(66, 84, 102, 0.1) 0px 8px 25px ",
                }}
              >
                <Card
                  sx={{
                    width: "50%",
                    height: "70%",
                    margin: "15px 15px",
                    boxShadow: "rgba(66, 84, 102, 0.3) 0px 8px 25px ",
                  }}
                >
                  {/* <Avatar
                    alt="Remy Sharp"
                    src={profile}
                    sx={{ width: 85, height: 85, margin: "15px 30px" }}
                  /> */}
                  <div style={{ margin: "10px 30px", fontSize: "18px" }}>
                    Name : XXXX
                  </div>
                </Card>
              </Card>
            </div>
            <hr></hr>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <button type="submit" id="btn-createrefmodal">
                Create
              </button>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
