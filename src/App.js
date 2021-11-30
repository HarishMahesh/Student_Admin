import "./App.css";
import Header from "./NavBars/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./Pages/DashBoard";
import AllStudents from "./Pages/AllStudents";
import AddStudent from "./Pages/AddStudent";
import EditStudent from "./Pages/EditStudent";
import ViewDetails from "./Pages/ViewDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/all-students" element={<AllStudents />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/update-student/:studId" element={<EditStudent />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/view-details/:studId" element={<ViewDetails />} />
      </Routes>
    </>
  );
}

export default App;
