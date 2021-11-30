import { useState, useEffect } from "react";
import "./AllStudents.css";
import { useNavigate } from "react-router-dom";

function AllStudents() {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState([]);

  useEffect(() => getStudentDetails(), []);

  // get student details
  const getStudentDetails = async () => {
    const data = await fetch(
      "https://61a1cc426c3b400017e69da7.mockapi.io/students"
    ).then((res) => res.json());

    setStudentData(data);
  };

  //to delete the data
  let handleDelete = async (id) => {
    await fetch("https://61a1cc426c3b400017e69da7.mockapi.io/students/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        getStudentDetails();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container table-container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Department</th>
                <th scope="col">Degree</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((data, i) => {
                return (
                  <tr key={data.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{data.name}</td>
                    <td>{data.dept}</td>
                    <td>{data.degree}</td>
                    <td className="buttonContainer">
                      <button
                        className="button"
                        onClick={() => navigate("/view-details/" + data.id)}
                      >
                        View
                      </button>
                      <button
                        className="button"
                        onClick={() => navigate("/update-student/" + data.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="button"
                        onClick={() => handleDelete(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default AllStudents;
