import React from "react";

export default function GradingGuide() {
  const grades = [
    { marks: "85+", letter: "A+", points: "4.00" },
    { marks: "80-84", letter: "A-", points: "3.70" },
    { marks: "75-79", letter: "B+", points: "3.30" },
    { marks: "70-74", letter: "B", points: "3.00" },
    { marks: "65-69", letter: "B-", points: "2.70" },
    { marks: "61-64", letter: "C+", points: "2.30" },
    { marks: "58-60", letter: "C", points: "2.00" },
    { marks: "55-57", letter: "C-", points: "1.70" },
    { marks: "50-54", letter: "D", points: "1.00" },
    { marks: "Less than 50", letter: "F", points: "0.00" },
  ];

  return (
    <div
      className="card shadow-sm border-0 mt-5"
      style={{ borderRadius: "15px" }}
    >
      <div
        className="card-header bg-dark text-white text-center py-3"
        style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
      >
        <h5 className="mb-0">PUCIT GRADING SYSTEM</h5>
      </div>
      <div className="card-body p-0">
        <table className="table table-striped table-hover mb-0 text-center">
          <thead className="table-secondary text-uppercase small">
            <tr>
              <th>Marks in Percent</th>
              <th>Letter Grade</th>
              <th>Grade Point</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((g, index) => (
              <tr key={index}>
                <td className="fw-bold text-secondary">{g.marks}</td>
                <td>
                  <span className="badge text-center bg-primary px-3">
                    {g.letter}
                  </span>
                </td>
                <td className="fw-bold text-dark">{g.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
