import React from 'react';
import Navbar from '../../molecules/NavBar';
import Search from '../../atoms/Search';
import Leader from '../../molecules/Leader';
import Informasi from '../../molecules/Informasi';
import ListKelurahan from '../../molecules/ListKelurahan';
import BeritaBitung from '../../molecules/BeritaBitung';
import Covid from '../../molecules/Covid';
import TentangKami from '../../molecules/Footer';

const Dashboard = (props) => {
  return (
    <div>
      <Navbar />
      <h2 class="titlekelurahan">Portal Kelurahan Hebat</h2>
      <h3 class="titlekelurahan2">Bitung Digital City</h3>
      <Search />
      <Leader />
      <Informasi />
      <ListKelurahan />
      <BeritaBitung />
      <Covid />
      <TentangKami />
    </div>
  );
};

export default Dashboard;