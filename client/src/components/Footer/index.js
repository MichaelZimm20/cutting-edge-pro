
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light py-3 mt-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-auto">
            <p className="text-muted">&copy; Cutting Edge</p>
          </div>
          <div className="col-auto">
            <p className="text-muted">Made with love by Michael, Pat, Justin, and Brayden</p>
          </div>
          <div className="col-auto">
            <ul className="list-inline">
              <li className="list-inline-item">
              <a href="#" className="mr-3" title="Facebook"><FaFacebookF /></a>
              </li>
              <li className="list-inline-item">
              <a href="#" className="mr-3" title="Twitter"><FaTwitter /></a>
              </li>
              <li className="list-inline-item">
              <a href="#" title="Instagram"><FaInstagram /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

