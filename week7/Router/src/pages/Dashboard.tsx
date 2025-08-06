import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Inside in Dashboard Page</h1>
      <Link to={"/"}>Home</Link>
      <p>Dashboard</p>
    </div>
  );
};

export default Dashboard;
