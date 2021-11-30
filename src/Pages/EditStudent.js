import "./AddStudent.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
  const params = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");
  const [mobileNo, setMob] = useState("");
  const [year, setYear] = useState("");
  const [degree, setDegree] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    {
      if (params.studId) {
        getData();
      }
    }
  }, []);

  let getData = async () => {
    await fetch(
      "https://61a1cc426c3b400017e69da7.mockapi.io/students/" + params.studId,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
        setDept(data.dept);
        setMob(data.mobile);
        setYear(data.year);
        setDegree(data.degree);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formSaveHandeler = async (event) => {
    event.preventDefault();

    await fetch(
      "https://61a1cc426c3b400017e69da7.mockapi.io/students/" + params.studId,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name,
          degree: degree,
          mobile: mobileNo,
          dept: dept,
          year: +year,
        }),
      }
    )
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
                <input
                  value={name}
                  required
                  type="text"
                  id="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
            </div>
            <div className="row inp-container">
              <div className="col-4">
                <label htmlFor="email">Email</label>
              </div>
              <div className="col-8">
                <input
                  value={email}
                  type="text"
                  id="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div className="row inp-container">
              <div className="col-4">
                <label required htmlFor="dept">
                  Department
                </label>
              </div>
              <div className="col-8">
                <input
                  value={dept}
                  type="text"
                  id="dept"
                  onChange={(event) => setDept(event.target.value)}
                />
              </div>
            </div>
            <div className="row inp-container">
              <div className="col-4">
                <label required htmlFor="deg">
                  Degree
                </label>
              </div>
              <div className="col-8">
                <input
                  value={degree}
                  type="text"
                  id="deg"
                  onChange={(event) => setDegree(event.target.value)}
                />
              </div>
            </div>
            <div className="row inp-container">
              <div className="col-4">
                <label required htmlFor="mobile">
                  Mobile Number
                </label>
              </div>
              <div className="col-8">
                <input
                  value={mobileNo}
                  type="number"
                  id="mobile"
                  onChange={(event) => setMob(event.target.value)}
                />
              </div>
            </div>
            <div className="row inp-container">
              <div className="col-4">
                <label htmlFor="year">Current Year</label>
              </div>
              <div className="col-8">
                <select
                  value={year}
                  required
                  name="current-year"
                  id="year"
                  onChange={(event) => setYear(event.target.value)}
                >
                  <option value="1">1 (First Year)</option>
                  <option value="2">2 (Second Year)</option>
                  <option value="3">3 (Third Year)</option>
                  <option value="4">4 (Fourth Year)</option>
                  <option value="5">5 (Fifth Year)</option>
                </select>
              </div>
            </div>
            <div className="bttn">
              <button>Update Details</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditStudent;
