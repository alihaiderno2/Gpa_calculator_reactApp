import React, { Component } from "react";

export default class Semi extends Component {
  state = { number: "", grade: "4.0", credits: "15" };

  render() {
    return (
      <div
        className="card shadow-sm p-4 mb-4 border-0"
        style={{ borderRadius: "15px" }}
      >
        <h5 className="mb-3" style={{ fontWeight: "700", color: "#2d3748" }}>
          Add Semester
        </h5>
        <div className="row g-3 align-items-end">
          <div className="col-md-5">
            <label className="form-label small fw-bold">Semester Number</label>
            <input
              className="form-control"
              placeholder="e.g., Semester 1"
              value={this.state.number}
              onChange={(e) => this.setState({ number: e.target.value })}
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
            <input
                type="number"
                className="form-control"
                value={this.state.grade}
                onChange={(e)=>this.setState({grade: e.target.value})}
            />
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
                if (this.state.number) {
                  this.props.onAdd(this.state);
                  this.setState({ number: "" });
                }
              }}
            >
              + Add Semester
            </button>
          </div>
        </div>
      </div>
    );
  }
}
