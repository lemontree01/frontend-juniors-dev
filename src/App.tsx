import React from "react";
import "./styles/index.scss";
import Navbar from "./components/Navbar/NavBar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;

const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;
