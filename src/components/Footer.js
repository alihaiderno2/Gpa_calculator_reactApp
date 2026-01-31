import React from "react";

const Footer = () => {
  return (
    <>
      <style>{`
        .footer-custom {
          border-top-left-radius: 2rem;
          border-top-right-radius: 2rem;
        }
        
        .social-link {
          color: #adb5bd; /* Default text-secondary color */
          transition: transform 0.2s ease, color 0.3s ease;
        }

        /* Hover: Gmail Red */
        .social-link.email:hover {
          color: #EA4335 !important;
          transform: translateY(-3px);
        }

        /* Hover: GitHub White */
        .social-link.github:hover {
          color: #ffffff !important;
          transform: translateY(-3px);
        }
      `}</style>

      <footer className="bg-dark text-light py-4 mt-auto footer-custom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0 text-center text-lg-start">
              <h5 className="text-uppercase fw-bold text-primary mb-1">
                GPA and CGPA Calculator
              </h5>
              <h6 className="text-white-50 mb-3" style={{ fontSize: "0.9rem" }}>
                Punjab University College of Information Technology
              </h6>
              <p className="small text-secondary mb-0">
                &copy; {new Date().getFullYear()} All Rights Reserved.
              </p>
            </div>

            <div className="col-lg-7">
              <div className="row justify-content-center justify-content-lg-end">
                <div className="col-sm-6 text-center text-lg-start mb-3 mb-sm-0">
                  <p className="fw-bold text-white mb-1">Abdullah Jamshaid</p>
                  <p className="fw-bold text-white mb-1">BITF24M031</p>

                  <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                    <a
                      href="mailto:mabdullahjamshaid31@gmail.com"
                      className="text-decoration-none social-link email"
                    >
                      <i className="fas fa-envelope fa-lg"></i>
                    </a>
                    <a
                      href="https://github.com/M-Abdullah-Jamshaid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none social-link github"
                    >
                      <i className="fab fa-github fa-lg"></i>
                    </a>
                  </div>
                </div>

                <div className="col-sm-6 text-center text-lg-start">
                  <p className="fw-bold text-white mb-1">Ali Haider</p>
                  <p className="fw-bold text-white mb-1">BITF24M004</p>
                  <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                    <a
                      href="mailto:alihaiderno2@gmail.com"
                      className="text-decoration-none social-link email"
                    >
                      <i className="fas fa-envelope fa-lg"></i>
                    </a>
                    <a
                      href="https://github.com/alihaiderno2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none social-link github"
                    >
                      <i className="fab fa-github fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
