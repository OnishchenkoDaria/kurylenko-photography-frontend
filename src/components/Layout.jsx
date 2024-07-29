import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import NavbarHeader from "./NavbarHeader";

export default function Layout() {
  return (
    <>
      <NavbarHeader />
      <main style={{ height: "100vh" }}>
        <Suspense fallback={<div>Loading..</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
