import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div>
      <div className={`diming ${isOpen ? "open" : ""}`}></div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/timer">Timer</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
