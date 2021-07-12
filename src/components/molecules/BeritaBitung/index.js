import React from 'react';
import App from '../../../App.css';
import News from '../../atoms/News';
import More from '../../../assets/icons/more.svg'

const BeritaBitung = (props) => {
  return (
    <div>
    <h1 class="Tag">Berita Bitung</h1>
    <News />
    <a href="#"> <img src={More} className="more" /> </a>
    </div>
  );
};

export default BeritaBitung;