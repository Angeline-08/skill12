// frontend/src/App.jsx
import React, { useState } from "react";
import AddStudent from "./AddStudent.jsx";
import StudentList from "./StudentList.jsx";
import "./App.css";

const App = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const handleEditStudent = (student) => {
    setSelectedStudent(student);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRefresh = () => {
    setSelectedStudent(null);
    setRefreshFlag(!refreshFlag);
  };

  return (
    <div>
      <h1 className="app-title">Student Management System</h1>
      <AddStudent selectedStudent={selectedStudent} onSuccess={handleRefresh} />
      <StudentList key={refreshFlag} onEditStudent={handleEditStudent} />
    </div>
  );
};

export default App;