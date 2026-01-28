import React from "react";

export default function FinalGPA({ gpa, totalCredits }) {
  return (
    <div
      className="card shadow-sm border-0 p-5 text-center mb-4"
      style={{ borderRadius: "20px" }}
    >
      <p className="text-secondary mb-1 fw-bold">Current GPA</p>
      <h1 style={{ fontWeight: "800", color: "#6366f1", fontSize:"35px"}}>
        {gpa}
      </h1>
      <p className="text-muted">{totalCredits.toFixed(1)} Total Credits</p>
    </div>
  );
}
