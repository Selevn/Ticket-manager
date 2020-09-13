-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Сен 14 2020 г., 00:29
-- Версия сервера: 10.4.11-MariaDB
-- Версия PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `ticketmanager`
--

-- --------------------------------------------------------

--
-- Структура таблицы `concerts`
--

CREATE TABLE `concerts` (
  `id` int(11) NOT NULL,
  `band` varchar(40) DEFAULT NULL,
  `place` varchar(40) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `imgSrc` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `concerts`
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
-- Структура таблицы `costs`
--

CREATE TABLE `costs` (
  `id` int(11) NOT NULL,
  `sectorId` int(6) DEFAULT NULL,
  `concertId` int(6) DEFAULT NULL,
  `cost` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `costs`
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
(22, 3, 7, 249.99);

-- --------------------------------------------------------

--
-- Структура таблицы `halls`
--

CREATE TABLE `halls` (
  `id` int(11) NOT NULL,
  `place` varchar(40) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `img` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `halls`
--

INSERT INTO `halls` (`id`, `place`, `description`, `img`) VALUES
(1, 'DInamo', 'Dinamo description', 1234),
(2, 'Chizhovka', 'Chizhovka description', 1235);

-- --------------------------------------------------------

--
-- Структура таблицы `sector`
--

CREATE TABLE `sector` (
  `place` varchar(40) DEFAULT NULL,
  `id` int(4) NOT NULL,
  `name` varchar(40) DEFAULT NULL,
  `numOfSeats` int(4) NOT NULL,
  `features` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `sector`
--

INSERT INTO `sector` (`place`, `id`, `name`, `numOfSeats`, `features`) VALUES
('Chizhovka', 1, 'Left', 200, 'Photozone'),
('Chizhovka', 2, 'right', 200, 'Smth'),
('Chizhovka', 3, 'center', 1000, 'Smth2'),
('DInamo', 4, 'centre', 30, 'Фич нет'),
('DInamo', 5, 'backend', 10, 'none');

-- --------------------------------------------------------

--
-- Структура таблицы `ticket`
--

CREATE TABLE `ticket` (
  `id` int(8) NOT NULL,
  `userId` int(4) DEFAULT NULL,
  `concertId` int(6) DEFAULT NULL,
  `sectorId` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `ticket`
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
-- Структура таблицы `users`
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
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `sname`, `password`, `isApproved`, `userType`) VALUES
(1, 'van000200136@gmail.com', NULL, NULL, '123456', 1, 'admin'),
(10, 'van000222001362@gmail.com', NULL, NULL, '123456', 0, 'user'),
(11, 'van00020013123136@gmail.com', NULL, NULL, '1234123412312', 0, '0'),
(12, 'v@gmail.com', NULL, NULL, '123456', 1, 'user');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `concerts`
--
ALTER TABLE `concerts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `place` (`place`);

--
-- Индексы таблицы `costs`
--
ALTER TABLE `costs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `concertId` (`concertId`),
  ADD KEY `sectorId` (`sectorId`);

--
-- Индексы таблицы `halls`
--
ALTER TABLE `halls`
  ADD PRIMARY KEY (`id`),
  ADD KEY `place` (`place`);

--
-- Индексы таблицы `sector`
--
ALTER TABLE `sector`
  ADD PRIMARY KEY (`id`),
  ADD KEY `place` (`place`);

--
-- Индексы таблицы `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `sector` (`sectorId`),
  ADD KEY `concertId` (`concertId`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `concerts`
--
ALTER TABLE `concerts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `costs`
--
ALTER TABLE `costs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT для таблицы `halls`
--
ALTER TABLE `halls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `sector`
--
ALTER TABLE `sector`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `concerts`
--
ALTER TABLE `concerts`
  ADD CONSTRAINT `concerts_ibfk_1` FOREIGN KEY (`place`) REFERENCES `halls` (`place`);

--
-- Ограничения внешнего ключа таблицы `costs`
--
ALTER TABLE `costs`
  ADD CONSTRAINT `costs_ibfk_1` FOREIGN KEY (`concertId`) REFERENCES `concerts` (`id`),
  ADD CONSTRAINT `costs_ibfk_2` FOREIGN KEY (`sectorId`) REFERENCES `sector` (`id`);

--
-- Ограничения внешнего ключа таблицы `sector`
--
ALTER TABLE `sector`
  ADD CONSTRAINT `sector_ibfk_1` FOREIGN KEY (`place`) REFERENCES `halls` (`place`);

--
-- Ограничения внешнего ключа таблицы `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `ticket_ibfk_3` FOREIGN KEY (`sectorId`) REFERENCES `sector` (`id`),
  ADD CONSTRAINT `ticket_ibfk_4` FOREIGN KEY (`concertId`) REFERENCES `concerts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
