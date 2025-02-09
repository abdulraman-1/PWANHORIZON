import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Approute = () => {
  return (
    <>
        <Header />
        <Sidebar />

        <Outlet />
    </>
  )
}

export default Approute