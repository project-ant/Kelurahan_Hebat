import React from 'react';
import App from '../../../App.css';
import Walikota from '../../../assets/images/Walikota.svg';
import Wakil from '../../../assets/images/Wakil.svg';
import VisiMisi from '../../../assets/images/VisiMisi.svg'

const Leader = (props) => {
  return (
    <div>
      <h1 class="leader">Pemimpin Kota</h1>
      <img class="Walikota-pic" src={Walikota} />
      <img class="Wakil-pic" src={Wakil} />
      <h1 class="Walikota-name">Ir. Maurits Mantiri, MM</h1>
      <h1 class="Wakil-name">Hengki Honandar, SE</h1>
      <h2 className="Jabatan1">Walikota Bitung</h2>
      <h2 className="Jabatan2">Wakil Walikota Bitung</h2>
      <img class="visiMisi" src={VisiMisi} />
      <h2 class="selengkapnya">Selengkapnya</h2>
    </div>
  );
};

export default Leader;