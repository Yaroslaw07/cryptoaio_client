import useAuth from "../hooks/useAuth";

export const DashboardPage = () => {
  const { logOut } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};
