import React from 'react';
import App from '../../../App.css';
import Kotak from '../../../assets/icons/Rectanglee.svg'

const Card = ({props}) => {
  return (
    <div>
      <div class="card1">
        <img src={Kotak} class="rectangle" />
        <p class="kelurahan-text">Kelurahan Paceda</p>
        <p class="kecamatan-text">Madidir</p>
      </div>
      <div class="card2">
        <img src={Kotak} class="rectangle" />
        <p class="kelurahan-text">Kelurahan Girian Indah</p>
        <p class="kecamatan-text">Girian</p>
      </div>
      <div class="card3">
        <img src={Kotak} class="rectangle" />
        <p class="kelurahan-text">Kelurahan Mawali</p>
        <p class="kecamatan-text">Lembeh Selatan</p>
      </div>
    </div>
  );
};



export default Card;