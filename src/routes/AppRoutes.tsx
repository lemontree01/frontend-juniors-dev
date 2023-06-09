import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Main from "../pages/Main/Main";
import Catalog from "../pages/Catalog/Catalog";
import Collections from "../pages/Collections/Collections";
import AnimePage from "../pages/AnimePage/AnimePage";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import TopPage from "../pages/TopPage/TopPage";
import Test from "../pages/Test";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/top-page" element={<TopPage />} />
      <Route path="/anime-page" element={<AnimePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/test-page" element={<Test />} />
      <Route path="*" element={<Navigate to="/main" />} />
    </Routes>
  );
};

export default AppRoutes;
