import React from "react";
import Stack from "@mui/material/Stack";
import { Link, Outlet } from "react-router-dom";
import SignBoard from "./SignBoard";
import BookIcon from "@mui/icons-material/Book";
import { useSelector } from "react-redux";
function NavBar() {
  const flag = useSelector((state) => state.auth.flag);
  return (
    <div>
      <Stack
        direction="row"
        gap={2}
        justifyContent="space-between"
        alignItems="center"
        className="nav"
        sx={!flag && { padding: 3 }}
      >
        <div className="logo">
          <Link to="/" style={{ fontSize: "2rem" }}>
            My Blog
          </Link>
          <BookIcon sx={{ fontSize: 30 }} />
        </div>
        {flag && (
          <ul
            style={{
              display: "flex",
              listStyleType: "none",
              alignItems: "center",
            }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Your Blogs</Link>
            </li>
            <li className="log-out">
              <SignBoard />
            </li>
            <Outlet />
          </ul>
        )}
      </Stack>
    </div>
  );
}

export default NavBar;
