import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");
  const [mobileNo, setMob] = useState("");
  const [year, setYear] = useState("");
  const [degree, setDegree] = useState("");
  const params = useParams();

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
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 form-container">
          <div className="row inp-container">
            <div className="col-4">
              <label htmlFor="name">Name :</label>
            </div>
            <div className="col-8">
              <p>{name}</p>
            </div>
          </div>
          <div className="row inp-container">
            <div className="col-4">
              <label>Email :</label>
            </div>
            <div className="col-8">
              <p>{email}</p>
            </div>
          </div>
          <div className="row inp-container">
            <div className="col-4">
              <label>Department :</label>
            </div>
            <div className="col-8">
              <p>{dept}</p>
            </div>
          </div>
          <div className="row inp-container">
            <div className="col-4">
              <label>Degree :</label>
            </div>
            <div className="col-8">
              <p>{degree}</p>
            </div>
          </div>
          <div className="row inp-container">
            <div className="col-4">
              <label>Mobile Number :</label>
            </div>
            <div className="col-8">
              <p>{mobileNo}</p>
            </div>
          </div>
          <div className="row inp-container">
            <div className="col-4">
              <label>Current Year :</label>
            </div>
            <div className="col-8">
              <p>{year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;
