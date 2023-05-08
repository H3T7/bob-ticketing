import React, { useState } from "react";
import "../Header/Header.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Login from "../Login/Login";
import Modal from "@mui/material/Modal";
import { IoMdAdd, IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// import AdbIcon from '@mui/icons-material/Adb';

const pages = ["Create Event", "Login"];
const settings = ["Profile", "Logout"];

function Header() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [popup, setPopup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "20px",
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseNavLogin = () => {
    setAnchorElNav(null);
    handleOpenLogin();
  };
  const redirect = (pathname) => {
    navigate("/" + pathname);
  };
  const MobRedirect = (path) => {
    navigate("/" + path);
    handleCloseNavMenu();
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="end">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow:  { sx: 0, md: 0, xl: 1 },
                display: { xs: "none", md: "flex" },
              }}
            >
              {/* {pages.map((page) => ( */}
              <Button
                // key={page}
                onClick={() => redirect("createevent")}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  flexGrow: 1,
                  fontSize: 17,
                }}
                style={{ color: "black", textAlign: "end" }}
              >
                {/* {page} */}
                Create Event
              </Button>
              <Button
                // key={page}
                onClick={handleCloseNavLogin}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  mx: 2,
                  fontSize: 17,
                }}
                style={{ color: "black", textAlign: "end" }}
              >
                Login
              </Button>
              {/* ))}  */}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* {popup === true ? (
        <>
        <Login/>
        </>
        ) : (
        ""
      )} */}
      <Modal
        open={openLogin}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div className="d-flex justify-content-end">
              <IoIosCloseCircleOutline
                className="closeIcon"
                onClick={handleCloseLogin}
              />
            </div>
            <Login />
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default Header;
