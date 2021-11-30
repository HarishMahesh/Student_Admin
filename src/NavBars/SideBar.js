import "./SideBar.css";
import { NavLink } from "react-router-dom";

function SideBar(props) {
  function clickHandeler() {
    props.changeToggel((prev) => !prev);
  }

  return (
    <>
      <div className="sidebar">
        <ul>
          <NavLink
            to="/dashboard"
            className={(navdata) => (navdata.isActive ? "active" : "")} //to check the link is active
            onClick={() => clickHandeler()} // close the side bar when the link is clicked
          >
            <li>Dashboard</li>
          </NavLink>
          <NavLink
            to="/all-students"
            className={(navdata) => (navdata.isActive ? "active" : "")}
            onClick={() => clickHandeler()}
          >
            <li>All Students</li>
          </NavLink>
          <NavLink
            to="/add-student"
            className={(navdata) => (navdata.isActive ? "active" : "")}
            onClick={() => clickHandeler()}
          >
            <li>Add Student</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
