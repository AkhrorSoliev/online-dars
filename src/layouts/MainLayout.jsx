import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
