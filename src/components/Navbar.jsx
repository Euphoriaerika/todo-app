import { NavLink } from "react-router-dom";

// Сomponent representing the website's navigation bar
const Navbar = () => {
  return (
    <header>
      <NavLink className="nav-btn" to="/">
        Euphoria
      </NavLink>
      <nav>
        <NavLink className="nav-btn" to="/todos">
          Todo List
        </NavLink>
        <NavLink className="nav-btn" to="/work-timer">
          Work Timer
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
