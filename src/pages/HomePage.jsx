import React from "react";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Login } from "@mui/icons-material";
import logo from "../pages/logo.png";

function HomePage() {
  return (
    <div className="homePage d-flex align-items-center justify-content-center">
      <div className="col-lg-12">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 border-end ">
              <div className="mb-3">
                <img src={logo} alt="Jamb Logo" height={100} />
              </div>
              <h2 style={{ fontWeight: 900, color: "#385170" }}>
                JAMB Centre Messaging System
              </h2>
              <div className="col-lg-8">
                <p style={{ color: "#385170" }}>
                  Correspondence platform between JAMB Centres and Information
                  Technology Services Department.
                </p>
              </div>
            </div>
            <div className="col-lg-5 rounded p-4 bg-white">
              <div className="mb-4">
                <h4 style={{ fontWeight: 700 }}>Centre Login</h4>
              </div>
              <div className="mb-3">
                <TextField fullWidth label="Centre Reference Number" />
              </div>
              <div>
                <LoadingButton
                  variant="contained"
                  color="success"
                  endIcon={<Login />}
                >
                  login
                </LoadingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
