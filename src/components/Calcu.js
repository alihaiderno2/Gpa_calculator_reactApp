import React, { Component } from "react";

export default class Calcu extends Component {
  state = { name: "", grade: "4.0", credits: "3" };

  render() {
    return (
      <div
        className="card shadow-sm p-4 mb-4 border-0"
        style={{ borderRadius: "15px" }}
      >
        <h5 className="mb-3" style={{ fontWeight: "700", color: "#2d3748" }}>
          Add Course
        </h5>
        <div className="row g-3 align-items-end">
          <div className="col-md-5">
            <label className="form-label small fw-bold">Course Name</label>
            <input
              className="form-control"
              placeholder="e.g., Calculus I"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label small fw-bold">Credits</label>
            <input
              type="number"
              className="form-control"
              value={this.state.credits}
              onChange={(e) => this.setState({ credits: e.target.value })}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label small fw-bold">Grade</label>
            <select
              className="form-select"
              value={this.state.grade}
              onChange={(e) => this.setState({ grade: e.target.value })}
            >
              <option value="4.0">A+ / A (4.00)</option>
              <option value="3.7">A- (3.70)</option>
              <option value="3.3">B+ (3.30)</option>
              <option value="3.0">B (3.00)</option>
              <option value="2.7">B- (2.70)</option>
              <option value="2.3">C+ (2.30)</option>
              <option value="2.0">C (2.00)</option>
              <option value="1.7">C- (1.70)</option>
              <option value="1.0">D (1.00)</option>
              <option value="0.0">F (0.00)</option>
            </select>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-primary w-100"
              style={{
                backgroundColor: "#6366f1",
                border: "none",
                fontWeight: "600",
              }}
              onClick={() => {
                if (this.state.name) {
                  this.props.onAdd(this.state);
                  this.setState({ name: "" });
                }
              }}
            >
              + Add Course
            </button>
          </div>
        </div>
      </div>
    );
  }
}
