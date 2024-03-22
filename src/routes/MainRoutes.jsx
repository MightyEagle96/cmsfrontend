import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { loggedInUser } from "../httpService";
function MainRoutes() {
  const privateRoutes = [{ path: "/", page: HomePage }];
  const publicRoutes = [{ path: "/", page: HomePage }];
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
