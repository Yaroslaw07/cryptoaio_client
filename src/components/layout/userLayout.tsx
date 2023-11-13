import { Outlet } from "react-router-dom";
const UserLayout = () => {
  return (
    <div>
      <h1>user layout</h1>
      <Outlet />
    </div>
  );
};

export default UserLayout;
