import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppBar, Box, Typography, Button, Toolbar } from "@mui/material";

function Layout() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#334155" }} component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            onClick={() => {
              navigate("/products");
            }}
            sx={{
              cursor: "pointer",
              flexGrow: 1,
            }}
          >
            PRODUCTS
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              onClick={() => {
                navigate("/product-form");
              }}
              sx={{ color: "#fff" }}
            >
              Add-Product
            </Button>
            <Button onClick={handleSignOut} sx={{ color: "#fff" }}>
              Sign-out
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <main
        style={{
          marginTop: "75px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
