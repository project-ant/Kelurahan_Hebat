import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../../assets/images/logo_kotabitung.svg"

const Navbar = () => {
  
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg">
      <div class="container">
      <a class="navbar-brand" href="#">
        <img src={Logo} alt="Kelurahan Hebat"/>
      </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <p className="title">Kelurahan Hebat</p>
          <h4 className="titled">Portal Resmi Kelurahan Kota Bitung</h4>
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Menu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Informasi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Kontak</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;