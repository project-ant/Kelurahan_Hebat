import React from 'react';
import App from '../../../App.css';
import Covid19 from '../../../assets/images/Covid.svg'
import More from '../../../assets/icons/more.svg'

const BeritaBitung = (props) => {
  return (
    <div>
      <h1 class="covid">Informasi Covid-19</h1>
      <img src={Covid19} className="corona-svg"/>
      <p className="corona-text">Koronavirus atau coronavirus (istilah populernya: virus korona, virus corona, atau virus Corona) adalah sekumpulan virus dari subfamili Orthocoronavirinae dalam keluarga Coronaviridae dan ordo Nidovirales. Kelompok virus ini yang dapat menyebabkan penyakit pada burung dan mamalia (termasuk manusia).</p>
      <a href="#"> <img src={More} className="more" /> </a>
    </div>
  );
};

export default BeritaBitung;