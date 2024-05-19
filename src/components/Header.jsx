import { NavLink } from "react-router-dom";
import { bars } from "../assets/icons";

// Сomponent representing the website's navigation bar
const Header = ({ toggleSidebar }) => {
  return (
    <header>
      <div className="flex-row gap-10">
        <div className="box-40 flex-center pointer" onClick={toggleSidebar}>
          <img className="circle-32 white" src={bars} alt="bars" />
        </div>
        <NavLink className="flex-center p-h-12 font-16" to="/">
          Soft<span className="col-neon-violet">Work</span>
        </NavLink>
      </div>

      <NavLink className="box-40 flex-center" to="/profile">
          <img
            className="circle-32"
            src="https://avatars.githubusercontent.com/u/55585048?v=4"
            alt="profile"
          />
      </NavLink>
    </header>
  );
};

export default Header;
