import React from 'react';
import App from '../../../App.css';
import Kelurahan1 from '../../../assets/images/Kelurahan.svg';
import Kelurahan2 from '../../../assets/images/Manfaat.svg';


const Informasi = (props) => {
  return (
    <div>
      <img className="kelurahan1-svg" src={Kelurahan1}/>
      <h1 className="Bold1">Kelurahan Hebat</h1>
      <p className="p1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      <img className="kelurahan2-svg" src={Kelurahan2}/>
      <h1 className="Bold2">Manfaat Kelurahan Hebat</h1>
      <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
  );

};

export default Informasi;