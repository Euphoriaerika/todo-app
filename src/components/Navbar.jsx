import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableList } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import "../styles/navbar.css";

// Сomponent representing the website's navigation bar
const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink className="nav-btn nav-btnh logo" to="/">
          <FontAwesomeIcon icon={faTableList} />
          Softwork
        </NavLink>
        <NavLink className="nav-btn nav-btnh" to="/todos">
          Todo List
        </NavLink>
        <NavLink className="nav-btn nav-btnh" to="/timer">
          Work Timer
        </NavLink>
      </nav>
      <NavLink className="circle-btn nav-btnh" to="/profile">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
        />
      </NavLink>
    </header>
  );
};

export default Navbar;
