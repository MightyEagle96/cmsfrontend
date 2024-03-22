import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { loggedInUser } from "../httpService";
import Dashboard from "../pages/private/Dashboard";
import NavigationBar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
function MainRoutes() {
  const privateRoutes = [{ path: "/", page: Dashboard }];
  const publicRoutes = [{ path: "/", page: HomePage }];
  return (
    <BrowserRouter>
      {loggedInUser && <NavigationBar />}

      {loggedInUser ? (
        <>
          <div className="row">
            <div className="col-lg-2 sideMenu">
              <SideMenu />
            </div>
            <div className="col-lg-10">
              <Routes>
                {privateRoutes.map((c, i) => (
                  <Route key={i} path={c.path} element={<c.page />} />
                ))}
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <>
          <Routes>
            {publicRoutes.map((c, i) => (
              <Route key={i} path={c.path} element={<c.page />} />
            ))}
          </Routes>
        </>
      )}
      {/* <Routes>
        {loggedInUser ? (
          <>
            {privateRoutes.map((c, i) => (
              <Route key={i} path={c.path} element={<c.page />} />
            ))}
          </>
        ) : (
          <>
            {publicRoutes.map((c, i) => (
              <Route key={i} path={c.path} element={<c.page />} />
            ))}
          </>
        )}
      </Routes> */}
    </BrowserRouter>
  );
}

export default MainRoutes;
