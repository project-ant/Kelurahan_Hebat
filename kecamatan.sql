-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 30, 2021 at 01:01 PM
-- Server version: 10.3.29-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bitungserver_smart`
--

-- --------------------------------------------------------

--
-- Table structure for table `kecamatan`
--

CREATE TABLE IF NOT EXISTS `kecamatan` (
  `id_kecamatan` int(5) NOT NULL,
  `nama_kecamatan` varchar(50) NOT NULL,
  `id_kabkota` int(5) NOT NULL,
  `id_propinsi` int(5) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=6643 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kecamatan`
--

INSERT INTO `kecamatan` (`id_kecamatan`, `nama_kecamatan`, `id_kabkota`, `id_propinsi`) VALUES
(5191, 'AERTEMBAGA (BITUNG TIMUR)', 372, 28),
(5192, 'GIRIAN', 372, 28),
(5193, 'LEMBEH SELATAN (BITUNG SELATAN)', 372, 28),
(5194, 'LEMBEH UTARA', 372, 28),
(5195, 'MADIDIR (BITUNG TENGAH)', 372, 28),
(5196, 'MAESA', 372, 28),
(5197, 'MATUARI (BITUNG BARAT)', 372, 28),
(5198, 'RANOWULU (BITUNG UTARA)', 372, 28);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kecamatan`
--
ALTER TABLE `kecamatan`
  ADD PRIMARY KEY (`id_kecamatan`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kecamatan`
--
ALTER TABLE `kecamatan`
  MODIFY `id_kecamatan` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6643;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
