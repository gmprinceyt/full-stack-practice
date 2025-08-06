import type { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>LOGO.</h1>
      <ul style={styles.ul}>
        <button
          style={{ textDecoration: "none", color: "black", fontWeight: 500 }}
          onClick={() => {
            navigate("/", {
              viewTransition: true,
            });
          }}
        >
          Home
        </button>
        <button
          style={{ textDecoration: "none", color: "black", fontWeight: 500 }}
          onClick={() => {
            navigate("/dashboard", {
              viewTransition: true,
            });
          }}
        >
          Dashboard
        </button>
        <button
          style={{ textDecoration: "none", color: "black", fontWeight: 500 }}
          onClick={() => {
            navigate("/*", {
              viewTransition: true,
            });
          }}
        >
          Not Found
        </button>
      </ul>
    </nav>
  );
};

const styles: { nav: CSSProperties; logo: CSSProperties; ul: CSSProperties } = {
  nav: {
    width: "100%",
    height: "50px",
    backgroundColor: "#f1f1dfff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4px 10px",
  },
  logo: {
    color: "black",
    fontFamily: "fantasy",
  },
  ul: {
    display: "flex",
    gap: "10px",
    textTransform: "capitalize",
  },
};

export default Header;
