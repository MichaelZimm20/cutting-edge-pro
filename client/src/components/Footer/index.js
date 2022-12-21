import { FaGithub } from "react-icons/fa";
import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }

  return (
    <footer className="bg-light py-3 mt-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-auto">
            <p className="text-muted">&copy; Cutting Edge</p>
          </div>
          <div className="col-auto">
            <p className="text-muted">
              Made with love by Michael, Pat, Justin, and Brayden
            </p>
          </div>
          <div className="col-auto">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  href="https://github.com/MichaelZimm20/cutting-edge-pro"
                  title="Github"
                >
                  Click here for our GitHub <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
