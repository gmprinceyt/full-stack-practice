import { Link } from "react-router-dom";

const Landing = () => {
  return <div>
    <nav>Landing Page</nav>
    <Link to={"/dashboard"}>Dashboard</Link>
  </div>;
};

export default Landing;
