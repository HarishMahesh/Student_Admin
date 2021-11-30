import { IoMdMenu, IoMdClose } from "react-icons/io";
import "./Header.css";
import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [isToggeled, SetIsToggeled] = useState(false);
  const [headerName, setHeaderName] = useState("");

  console.log(location);

  useEffect(() => {
    if (location.pathname.includes("/dashboard")) {
      setHeaderName("Dashboard");
    } else if (location.pathname.includes("/add-student")) {
      setHeaderName("Add Student");
    } else if (location.pathname.includes("/all-students")) {
      setHeaderName("All Students");
    } else if (location.pathname.includes("/update-student/")) {
      setHeaderName("Update Student Details");
    } else if (location.pathname.includes("/view-details")) {
      setHeaderName("Student Details");
    }
  }, [location]);

  return (
    <>
      <div className="header">
        {isToggeled ? (
          <IoMdClose
            onClick={() => {
              SetIsToggeled(!isToggeled);
            }}
          />
        ) : (
          <IoMdMenu
            onClick={() => {
              SetIsToggeled(!isToggeled);
            }}
          />
        )}
        <h2>{headerName}</h2>
      </div>
      {isToggeled ? <SideBar changeToggel={SetIsToggeled} /> : ""}
    </>
  );
}

export default Header;
