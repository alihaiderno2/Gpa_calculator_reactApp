import React, { useState } from "react";
import FinalGPA from "./FinalGPA";
import Calcu from "./Calcu";
import GradingGuide from "./GradingGuide";
import {useNavigate } from "react-router-dom";

export default function MainBody() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  const addCourse = (newCourse) => {
    setCourses([...courses, { ...newCourse, id: Date.now() }]);
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  const updateCourse = (id, field, value) => {
    setCourses(
      courses.map((c) => (c.id === id ? { ...c, [field]: value } : c)),
    );
  };

  const totalCredits = courses.reduce(
    (sum, c) => sum + Number(c.credits || 0),
    0,
  );
  const totalPoints = courses.reduce(
    (sum, c) => sum + Number(c.grade || 0) * Number(c.credits || 0),
    0,
  );
  const gpa =
    totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";

  return (
    <div
      className="container py-5"
      style={{ minHeight: "100vh", backgroundColor: "#e8e9ea" }}
    >
      <div className="text-center mb-5">
        <h2 style={{ fontWeight: "800", color: "#1a202c" }}>
          <span style={{ color: "#6366f1" }}>🎓</span> GPA Calculator
        </h2>
        <p className="text-secondary" style={{fontSize:"15px"}}>
          Track your courses and calculate your GPA
        </p>
        <button className="btn btn-sm btn-outline-primary mt-2"
              onClick={() =>
                  navigate("/cgpa")}
              >
                  Switch to CGPA Calculator
        </button>
      </div>

      <FinalGPA gpa={gpa} totalCredits={totalCredits} />

      <Calcu onAdd={addCourse} />

      <div
        className="card shadow-sm border-0"
        style={{ borderRadius: "15px", overflow: "hidden" }}
      >
        <table className="table table-hover mb-0">
          <thead className="table-light">
            <tr>
              <th className="ps-4">Course Name</th>
              <th>Credits</th>
              <th>Grade Point</th>
              <th className="text-end pe-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <tr key={c.id}>
                <td className="ps-4">
                  <input
                    className="form-control form-control-sm border-0 bg-transparent"
                    value={c.name}
                    onChange={(e) => updateCourse(c.id, "name", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control form-control-sm border-0 bg-transparent"
                    value={c.credits}
                    onChange={(e) =>
                      updateCourse(c.id, "credits", e.target.value)
                    }
                    style={{ width: "60px" }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control form-control-sm border-0 bg-transparent"
                    value={c.grade}
                    onChange={(e) =>
                      updateCourse(c.id, "grade", e.target.value)
                    }
                    style={{ width: "80px" }}
                  />
                </td>
                <td className="text-end pe-4">
                  <button
                    className="btn btn-sm btn-outline-danger border-0"
                    onClick={() => deleteCourse(c.id)}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <GradingGuide />
    </div>
  );
}
