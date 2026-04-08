import React, { useEffect, useState } from "react";
import axios from "axios";

const AddStudent = ({ onAdd, selectedStudent }) => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  useEffect(() => {
    if (selectedStudent) {
      setStudent(selectedStudent);
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (student.id) {
        await axios.put(`http://localhost:8081/students/${student.id}`, student);
      } else {
        await axios.post("http://localhost:8081/students", student);
      }
      setStudent({ name: "", email: "", course: "" });
      onAdd();
    } catch (error) {
      console.error("Error saving student:", error);
    }
  };

  return (
    <div className="container">
      <h2>{student.id ? "Update Student" : "Add Student"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          required
        />
        <input
          name="course"
          value={student.course}
          onChange={handleChange}
          placeholder="Course"
          required
        />
        <button type="submit">
          {student.id ? "Update Student" : "Add Student"}
        </button>
      </form>
    </div>
  );
};

export default AddStudent;