import React from 'react';
import App from '../../../App.css';
import LogoSearch from '../../../assets/icons/SearchIcon.svg';

const Search = (props) => {
  return (
    <div>
      <input type="text" placeholder="Cari Informasi . . ." class="search"/>
      <button type="button" class="btn">
        <img src={LogoSearch} />
      </button>
    </div>
  );
};

export default Search;