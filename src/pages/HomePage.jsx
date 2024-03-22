import React, { useContext, useState } from "react";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Login } from "@mui/icons-material";
import logo from "../pages/logo.png";
import { httpService } from "../httpService";
import { AlertContext } from "../contexts/AlertContext";

function HomePage() {
  const [referenceNumber, setReferenceNumber] = useState("");
  const { setAlertData } = useContext(AlertContext);
  const loginCentre = async (e) => {
    e.preventDefault();

    const { data, error } = await httpService.post("centre/login", {
      referenceNumber,
    });

    if (data) {
      setAlertData({ open: true, message: data, severity: "success" });
    }
    if (error) {
      setAlertData({ open: true, message: error, severity: "error" });
    }
  };
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
              <form onSubmit={loginCentre}>
                <div className="mb-3">
                  <TextField
                    fullWidth
                    label="Centre Reference Number"
                    onChange={(e) => setReferenceNumber(e.target.value)}
                  />
                </div>
                <div>
                  <LoadingButton
                    type="submit"
                    variant="contained"
                    color="success"
                    endIcon={<Login />}
                  >
                    login
                  </LoadingButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
