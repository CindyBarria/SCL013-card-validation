import { Outlet } from "react-router-dom";

import "../molecules";

export default function Layout() {
  return (
    <div className="borde">
      <banner-top alt="logo" />
      <Outlet />
    </div>
  );
}
