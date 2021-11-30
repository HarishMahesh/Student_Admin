import "./AddStudent.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const name = useRef();
  const email = useRef();
  const dept = useRef();
  const mobileNo = useRef();
  const year = useRef();
  const degree = useRef();
  const navigate = useNavigate();

  const formSaveHandeler = async (event) => {
    event.preventDefault();

    await fetch("https://61a1cc426c3b400017e69da7.mockapi.io/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.current.value,
        name: name.current.value,
        degree: degree.current.value,
        mobile: mobileNo.current.value,
        dept: dept.current.value,
        year: +year.current.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });

    navigate("/all-students");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 form-container">
          <form onSubmit={formSaveHandeler}>
            <div className="row inp-container">
              <div className="col-4">
                <label htmlFor="name">Name</label>
              </div>
              <div className="col-8">
                <input ref={name} required type="text" id="name" />
              </div>
            </div>
            <div className="row inp-container">
              <div className="col-4">
                <label htmlFor="email">Email</label>
              </div>
              <div className="col-8">
                <input ref={email} type="text" id="email" />
              </div>
            </div>
            <div className="row inp-container">
              <div className="col-4">
                <label htmlFor="dept">Department</label>
              </div>
              <div className="col-8">
                <input required ref={dept} type="text" id="dept" />
              </div>
            </div>
            <div className="row inp-container">
              <div className="col-4">
                <label htmlFor="deg">Degree</label>
              </div>
              <div className="col-8">
                <input required ref={degree} type="text" id="deg" />
              </div>
            </div>
            <div className="row inp-container">
              <div className="col-4">
                <label htmlFor="mobile">Mobile Number</label>
              </div>
              <div className="col-8">
                <input required ref={mobileNo} type="number" id="mobile" />
              </div>
            </div>
            <div className="row inp-container">
              <div className="col-4">
                <label htmlFor="year">Current Year</label>
              </div>
              <div className="col-8">
                <select ref={year} required name="current-year" id="year">
                  <option value="1">1 (First Year)</option>
                  <option value="2">2 (Second Year)</option>
                  <option value="3">3 (Third Year)</option>
                  <option value="4">4 (Fourth Year)</option>
                  <option value="5">5 (Fifth Year)</option>
                </select>
              </div>
            </div>
            <div className="bttn">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
