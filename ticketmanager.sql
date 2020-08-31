-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Авг 31 2020 г., 12:58
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
  `img` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `concerts`
--

INSERT INTO `concerts` (`id`, `band`, `place`, `date`, `img`) VALUES
(1, 'Green day', 'DInamo', '2021-01-24', 1234),
(2, 'Jon Bellion', 'DInamo', '2020-11-19', 99),
(3, 'Skillet', 'DInamo', '2021-04-04', 90),
(4, 'Tony Igy', 'DInamo', '2021-01-24', 123),
(5, 'Twenty one pilots', 'Chizhovka', '2020-10-16', 56),
(6, 'Sum 41', 'DInamo', '2021-05-07', 32),
(7, 'Awolnation', 'Chizhovka', '2020-12-03', 67);

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
(12, 'v@gmail.com', NULL, NULL, '123456', 0, 'user');

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
-- Индексы таблицы `halls`
--
ALTER TABLE `halls`
  ADD PRIMARY KEY (`id`),
  ADD KEY `place` (`place`);

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
-- AUTO_INCREMENT для таблицы `halls`
--
ALTER TABLE `halls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
