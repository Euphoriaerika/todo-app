import { NavLink } from "react-router-dom";
import { links } from "../constants";
/**
 * A React component for rendering a sidebar
 *
 * @param {Object} props - Props for the component
 * @param {boolean} props.isOpen - Whether the sidebar is currently open or closed
 * @param {Function} props.toggleSidebar - A function that toggles the sidebar's open state
 */
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div>
      {/* A background that dims behind the sidebar, which is clicked to close */}
      <div
        className={`dimming ${isOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      ></div>

      {/* The actual sidebar content */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* A list of navigation links */}
        <ul className="list">
          <p className="p-h-12 border-b-1">Work utils</p>
          {links.map((link, index) => (
            <li
              className="flex flex-start hover-grey"
              key={index}
              onClick={toggleSidebar}
            >
              <NavLink
                className="flex flex-start gap-12 full-size p-h-12"
                to={link.path}
              >
                <img className="box-24" src={link.icon} alt={link.label}></img>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
