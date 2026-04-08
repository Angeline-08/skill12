import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentList = ({ refresh, onEdit }) => {
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    axios.get("http://localhost:8081/students")
      .then(res => setStudents(res.data));
  };

  useEffect(() => {
    fetchStudents();
  }, [refresh]);

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:8081/students/${id}`)
      .then(fetchStudents);
  };

  return (
    <div className="container">
  <h2>Student List</h2>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Course</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {students.map((student) => (
        <tr key={student.id}>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.email}</td>
          <td>{student.course}</td>
          <td>
            <button className="edit" onClick={() => onEditStudent(student)}>Edit</button>
            <button className="delete" onClick={() => handleDelete(student.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
};

export default StudentList;