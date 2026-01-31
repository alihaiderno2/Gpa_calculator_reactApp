import React from "react";

const NavBar = () => {
  return (
    <>
      <style>{`
        .navbar-custom {
          background-color: #212529; /* Dark background matching footer */
          border-bottom-left-radius: 1.5rem;
          border-bottom-right-radius: 1.5rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
        
        .nav-link {
          transition: color 0.3s ease;
          font-weight: 500;
        }

        .nav-link:hover {
          color: #8c68cd !important; /* Light Purple hover effect */
        }
        
        .brand-icon {
          color: #8c68cd; /* Matching the purple button in your screenshot */
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom mb-5 shadow-sm">
        <div className="container">
          <a
            className="navbar-brand fw-bold d-flex align-items-center gap-2"
            href="https://pu.edu.pk/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="bg-light rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: "40px", height: "40px" }}
            >
              <i className="fas fa-graduation-cap brand-icon fa-lg"></i>
            </div>
            <span>
              PUCIT <span className="text-white-50 fw-light">Grades</span>
            </span>
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <a
                  href="https://github.com/alihaiderno2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-sm rounded-pill px-3"
                >
                  <i className="fab fa-github me-1"></i> Ali haider
                </a>
              </li>
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <a
                  href="https://github.com/M-Abdullah-Jamshaid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-sm rounded-pill px-3"
                >
                  <i className="fab fa-github me-1"></i> Abdullah Jamshaid
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
