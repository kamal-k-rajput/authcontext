import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import "./navbar.css";
export const Navbar = () => {
  const { toggleAuth, isAuth } = useContext(AuthContext);
  return (
    <div>
      <nav className="navbar">
        <button
          onClick={() => {
            toggleAuth();
          }}
        >
          {isAuth ? "Log out " : "Log In"}
        </button>
      </nav>
    </div>
  );
};
