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
-- Table structure for table `kabkota`
--

CREATE TABLE IF NOT EXISTS `kabkota` (
  `id_kabkota` int(5) NOT NULL,
  `nama_kabkota` varchar(50) NOT NULL,
  `id_propinsi` int(5) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=476 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kabkota`
--

INSERT INTO `kabkota` (`id_kabkota`, `nama_kabkota`, `id_propinsi`) VALUES
(372, 'BITUNG', 28);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kabkota`
--
ALTER TABLE `kabkota`
  ADD PRIMARY KEY (`id_kabkota`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kabkota`
--
ALTER TABLE `kabkota`
  MODIFY `id_kabkota` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=476;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
