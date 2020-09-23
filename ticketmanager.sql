-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 23, 2020 at 08:43 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ticketmanager`
--

-- --------------------------------------------------------

--
-- Table structure for table `concerts`
--

CREATE TABLE `concerts` (
  `id` int(11) NOT NULL,
  `band` varchar(40) DEFAULT NULL,
  `place` varchar(40) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `imgSrc` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `concerts`
--

INSERT INTO `concerts` (`id`, `band`, `place`, `date`, `imgSrc`) VALUES
(1, 'Green day', 'DInamo', '2021-01-24', 'https://images-na.ssl-images-amazon.com/images/I/61HZsw4F5VL._SL1425_.jpg'),
(2, 'Jon Bellion', 'DInamo', '2020-11-19', 'https://images-na.ssl-images-amazon.com/images/I/910h0v-R2jL._AC_SL1500_.jpg'),
(3, 'Skillet', 'DInamo', '2021-04-04', 'https://images-na.ssl-images-amazon.com/images/I/81Bvk-ayKGL._SL1448_.jpg'),
(4, 'Tony Igy', 'DInamo', '2021-01-24', 'https://avatars.yandex.net/get-music-content/3318009/545ed104.a.587142-5/m1000x1000'),
(5, 'Twenty one pilots', 'Chizhovka', '2020-10-16', 'https://images-na.ssl-images-amazon.com/images/I/71k-5WHYB9L._AC_SL1425_.jpg'),
(6, 'Sum 41', 'DInamo', '2021-05-07', 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/39/Sum_41_order_in_decline.png/274px-Sum_41_order_in_decline.png'),
(7, 'Awolnation', 'Chizhovka', '2020-12-03', 'https://lastfm.freetls.fastly.net/i/u/500x500/db98a3f967bd4b6b9dc86251801cce60.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `costs`
--

CREATE TABLE `costs` (
  `id` int(11) NOT NULL,
  `sectorId` int(6) DEFAULT NULL,
  `concertId` int(6) DEFAULT NULL,
  `cost` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `costs`
--

INSERT INTO `costs` (`id`, `sectorId`, `concertId`, `cost`) VALUES
(1, 4, 1, 199.99),
(3, 5, 1, 49.99),
(4, 4, 2, 74.99),
(5, 5, 3, 74.99),
(6, 5, 4, 74.99),
(7, 1, 5, 4.99),
(8, 4, 6, 99.99),
(9, 1, 7, 119.99),
(10, 5, 2, 13.99),
(11, 4, 3, 49.99),
(13, 2, 5, 64.99),
(14, 5, 6, 34.99),
(15, 2, 7, 99.99),
(18, 4, 4, 14.99),
(20, 3, 5, 16.99),
(22, 3, 7, 249.99),
(23, 6, 1, 199.99),
(24, 6, 2, 149.99),
(25, 6, 3, 19.99),
(26, 6, 4, 24.99),
(27, 6, 6, 99.99),
(28, 7, 1, 24.99),
(29, 7, 2, 12.99),
(30, 7, 3, 89.89),
(31, 7, 4, 45.99),
(32, 7, 6, 74.99);

-- --------------------------------------------------------

--
-- Table structure for table `halls`
--

CREATE TABLE `halls` (
  `id` int(11) NOT NULL,
  `place` varchar(40) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `img` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `halls`
--

INSERT INTO `halls` (`id`, `place`, `description`, `img`) VALUES
(1, 'DInamo', 'Dinamo description', 'https://www.belarus.by/relimages/002356_978314.jpg'),
(2, 'Chizhovka', 'Chizhovka description', 'https://www.belarus.by/relimages/002356_978314.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `sector`
--

CREATE TABLE `sector` (
  `place` varchar(40) DEFAULT NULL,
  `id` int(4) NOT NULL,
  `name` varchar(40) DEFAULT NULL,
  `numOfSeats` int(4) NOT NULL,
  `features` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `svgCors` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sector`
--

INSERT INTO `sector` (`place`, `id`, `name`, `numOfSeats`, `features`, `svgCors`) VALUES
('Chizhovka', 1, 'Left', 200, 'Photozone', ''),
('Chizhovka', 2, 'right', 200, 'Smth', ''),
('Chizhovka', 3, 'center', 1000, 'Smth2', ''),
('DInamo', 4, 'A', 2000, 'Фич нет', 'M159.69 134.64C176.68 119.39 201.08 106.54 232.89 96.08L230.28 72.55L253.81 66.67L261.65 90.85L389.76 90.85L393.68 60.78L411.98 60.78L415.9 90.85L559.04 96.08C584.74 98.26 612.2 111.11 641.39 134.64C670.58 158.17 689.97 185.84 699.56 217.65L767.53 190.2C759.69 161.87 739.65 128.76 707.4 90.85C675.16 52.94 621.56 28.54 546.62 17.65L230.28 20.91C177.12 29.63 132.89 50.76 97.6 84.31C62.3 117.86 40.52 153.16 32.24 190.2L102.17 219.61C123.52 178.21 142.7 149.89 159.69 134.64Z'),
('DInamo', 5, 'B', 500, 'none', 'M18.51 243.14C16.77 265.36 16.77 288.89 18.51 313.73C26.79 359.04 42.26 400.22 64.92 437.25C87.58 474.29 135.29 505.66 208.06 531.37L233.55 458.17L208.06 449.67C161 426.14 128.75 395.21 111.32 356.86C93.9 318.52 91.06 271.9 102.83 216.99L30.28 188.89C24.18 202.83 20.26 220.91 18.51 243.14Z'),
('DInamo', 6, 'C', 500, 'none', 'M212.46 529.85L246.8 535.91L566.67 535.91L589.56 527.83L566.67 457.8L537.71 463.19L262.29 463.19L234.68 459.14L212.46 529.85Z'),
('DInamo', 7, 'D', 1500, 'd sec', 'M744.66 419.61C707.62 478.43 655.77 515.47 589.1 530.72L567.53 459.48L606.1 444.44L617.21 459.48L626.36 452.29L617.21 437.25L647.93 415.69L673.42 386.93L696.29 354.25L725.05 367.97L735.51 341.83L698.91 331.37C700.21 328.32 703.05 316.56 707.4 296.08C711.76 275.6 708.93 250.11 698.91 219.61L769.49 192.16C789.97 284.97 781.69 360.78 744.66 419.61Z');

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE `ticket` (
  `id` int(8) NOT NULL,
  `userId` int(4) DEFAULT NULL,
  `concertId` int(6) DEFAULT NULL,
  `sectorId` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ticket`
--

INSERT INTO `ticket` (`id`, `userId`, `concertId`, `sectorId`) VALUES
(114, 12, 3, 4),
(115, 12, 3, 4),
(116, 12, 3, 4),
(117, 12, 3, 4),
(118, 12, 3, 4),
(119, 12, 1, 4),
(120, 12, 1, 4),
(121, 12, 1, 4),
(122, 12, 1, 4),
(123, 12, 1, 4),
(124, 12, 1, 4),
(125, 12, 1, 4),
(126, 12, 1, 4),
(127, 12, 1, 4),
(128, 12, 1, 4),
(129, 12, 5, 1),
(130, 12, 5, 1),
(131, 12, 5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(3) NOT NULL,
  `email` varchar(35) CHARACTER SET utf8 DEFAULT NULL,
  `name` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `sname` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `password` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `isApproved` tinyint(1) NOT NULL DEFAULT 0,
  `userType` varchar(10) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `sname`, `password`, `isApproved`, `userType`) VALUES
(1, 'van000200136@gmail.com', NULL, NULL, '123456', 1, 'admin'),
(10, 'van000222001362@gmail.com', NULL, NULL, '123456', 0, 'user'),
(11, 'van00020013123136@gmail.com', NULL, NULL, '1234123412312', 0, '0'),
(12, 'v@gmail.com', NULL, NULL, '123456', 1, 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `concerts`
--
ALTER TABLE `concerts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `place` (`place`);

--
-- Indexes for table `costs`
--
ALTER TABLE `costs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `concertId` (`concertId`),
  ADD KEY `sectorId` (`sectorId`);

--
-- Indexes for table `halls`
--
ALTER TABLE `halls`
  ADD PRIMARY KEY (`id`),
  ADD KEY `place` (`place`);

--
-- Indexes for table `sector`
--
ALTER TABLE `sector`
  ADD PRIMARY KEY (`id`),
  ADD KEY `place` (`place`);

--
-- Indexes for table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `sector` (`sectorId`),
  ADD KEY `concertId` (`concertId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `concerts`
--
ALTER TABLE `concerts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `costs`
--
ALTER TABLE `costs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `halls`
--
ALTER TABLE `halls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sector`
--
ALTER TABLE `sector`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `concerts`
--
ALTER TABLE `concerts`
  ADD CONSTRAINT `concerts_ibfk_1` FOREIGN KEY (`place`) REFERENCES `halls` (`place`);

--
-- Constraints for table `costs`
--
ALTER TABLE `costs`
  ADD CONSTRAINT `costs_ibfk_1` FOREIGN KEY (`concertId`) REFERENCES `concerts` (`id`),
  ADD CONSTRAINT `costs_ibfk_2` FOREIGN KEY (`sectorId`) REFERENCES `sector` (`id`);

--
-- Constraints for table `sector`
--
ALTER TABLE `sector`
  ADD CONSTRAINT `sector_ibfk_1` FOREIGN KEY (`place`) REFERENCES `halls` (`place`);

--
-- Constraints for table `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `ticket_ibfk_3` FOREIGN KEY (`sectorId`) REFERENCES `sector` (`id`),
  ADD CONSTRAINT `ticket_ibfk_4` FOREIGN KEY (`concertId`) REFERENCES `concerts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
