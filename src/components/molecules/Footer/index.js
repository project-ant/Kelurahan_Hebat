import React from 'react';
import App from '../../../App.css';
import Garis from '../../../assets/icons/Line.svg';
import GarisAkhir from '../../../assets/icons/Line(end).svg';
import Logo from '../../../assets/images/logo_kotabitung.svg';
import Call from '../../../assets/icons/Call.svg';
import Location from '../../../assets/icons/Location.svg';
import Message from '../../../assets/icons/Message.svg';
import Facebook from '../../../assets/icons/Facebook.svg';
import Twitter from '../../../assets/icons/Twitter.svg';
import Instagram from '../../../assets/icons/Instagram.svg';
import Youtube from '../../../assets/icons/Youtube.svg';

const TentangKami = (props) => {
  return(
    <div>
      <div>
        <h1 className="tentang">Tentang Kami</h1>
        <img src={Garis} className="lineleft" />
        <img src={Garis} className="lineright" />
      </div>
      <div className="main-footer">
      <img src={Logo} className="LogoKotaBitung" />
        <div className="container">
          <div className="row">
            {/* {Column1} */}
            <div className="col">
              <h4 className="title-footer">Kelurahan Hebat</h4>
              <p className="text-portal">Portal Resmi Kelurahan Hebat Kota Bitung</p>
            </div>
            <ul className="list-unstyled text">
                <li><img src={Location} />   Pemerintahan Kota Bitung, Sulawesi Utara Jl. Sam Ratulangi No.45</li>
                <li className="styling2"><img src={Call} />     +0123 xxx xxxx</li>
                <li className="styling3"><img src={Message} /> pemkotbitung@bitungkota.go.id</li>
                <div className="medsos">
                  <p className="sosmed">Media Social</p>
                  <img className="fb" src={Facebook} />
                  <img className="twitt" src={Twitter} />
                  <img className="ig" src={Instagram} />
                  <img className="yt" src={Youtube} />
                </div>
            </ul>
            <img src={GarisAkhir} className="end"/>
          </div>
        </div>
      </div>
      <div className="row">
            <p className="col-sm text-akhir" >
              Copyright &copy;{new Date().getFullYear()} Pemerintah Kota Bitung. Kominfo. All Rights Reserved.
            </p>
      </div>
    </div>
  )
}

export default TentangKami; 