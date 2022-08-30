import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import LoginIcon from "@mui/icons-material/Login";
import { useDispatch } from "react-redux";
import { LogInActions } from "../reducer/LogIn";
import { Link } from "react-router-dom";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function SignBoard() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    dispatch(LogInActions.logIn());
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>LogOut</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <p id="child-modal-description">
            Are you sure that you want to log out from your blog?
          </p>
          <Button onClick={handleClose}>
            <Link to="/" style={{color:"red"}}> Sure</Link>
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>LogIn <LoginIcon/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">LogOut</h2>
          <p id="parent-modal-description">
           Do you want to log out from the blog?
          </p>
          <SignBoard />
        </Box>
      </Modal>
    </div>
  );
}
