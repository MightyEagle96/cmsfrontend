import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import MainRoutes from "./routes/MainRoutes";
import FooterPage from "./components/FooterPage";
import { useState } from "react";
import { AlertContext } from "./contexts/AlertContext";
import { MySnackBarContext } from "./components/MySnackBar";

function App() {
  const [alertData, setAlertData] = useState({
    open: false,
    severity: "",
    message: "",
  });
  return (
    <>
      <AlertContext.Provider value={{ alertData, setAlertData }}>
        <MainRoutes />
        <FooterPage />
        <MySnackBarContext alertData={alertData} setAlertData={setAlertData} />
      </AlertContext.Provider>
    </>
  );
}

export default App;
