import React from 'react';
import App from '../../../App.css';
import Card from '../../atoms/Card';

const ListKelurahan = (props) => {
  return (
    <div>
      <h1 class="JudulList">Kelurahan di kota Bitung</h1>
      <h2 class="IsiList">Daftar kelurahan yang ada di kota Bitung</h2>
      <Card />
      <p class="selengkapnya2">Selengkapnya</p>
    </div>
  );
};

export default ListKelurahan;