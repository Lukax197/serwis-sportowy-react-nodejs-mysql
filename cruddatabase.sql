-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 14 Kwi 2022, 10:07
-- Wersja serwera: 10.4.21-MariaDB
-- Wersja PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `cruddatabase`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `komentarze`
--

CREATE TABLE `komentarze` (
  `id` int(11) NOT NULL,
  `nick` text NOT NULL,
  `tresc` text NOT NULL,
  `data_wstawienia` datetime NOT NULL DEFAULT current_timestamp(),
  `plusy` int(11) NOT NULL,
  `minusy` int(11) NOT NULL,
  `post_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `komentarze`
--

INSERT INTO `komentarze` (`id`, `nick`, `tresc`, `data_wstawienia`, `plusy`, `minusy`, `post_id`) VALUES
(11, 'Jan Kowalski', 'awawefgagweaeg', '2022-04-13 04:37:33', 42, 35, 41),
(19, 'daw', 'aa', '2022-04-13 12:02:49', 25, 0, 41),
(20, 'admin', 'gdrgsg', '2022-04-13 12:45:52', 0, 1, 41);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `movie_reviews`
--

CREATE TABLE `movie_reviews` (
  `id` int(11) NOT NULL,
  `movieName` varchar(200) NOT NULL,
  `movieReview` text NOT NULL,
  `zdjecie` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `movie_reviews`
--

INSERT INTO `movie_reviews` (`id`, `movieName`, `movieReview`, `zdjecie`) VALUES
(41, 'Bayern Monachium odpadł z Ligi Mistrzów! Villarreal sprawił kolejną sensację!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere, erat nec tincidunt efficitur, massa quam mollis nulla, ac commodo turpis dui a lorem. Cras pulvinar a tortor ac imperdiet. Nunc nec massa quam. Quisque convallis, metus quis blandit porttitor, nulla lorem pulvinar ante, quis pharetra magna arcu vel libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eleifend hendrerit orci, id auctor purus dictum id. Aliquam dignissim elit leo, nec tempus tellus tempus id. Fusce a pulvinar nunc. Nunc dapibus dignissim faucibus. Morbi eu euismod lorem. Cras et imperdiet leo. Sed lorem justo, efficitur id leo sit amet, tristique pharetra nibh. Praesent maximus, lectus nec tempor viverra, libero arcu lobortis velit, sed pulvinar est orci in mauris. Proin sagittis elit sed semper elementum. Donec cursus ultrices lacus eget accumsan. Maecenas et erat congue, gravida dui at, dapibus erat.\r\n\r\nAliquam fringilla augue nec orci auctor, ac lobortis dui accumsan. Cras ac dui ex. In sit amet diam sit amet diam pulvinar laoreet ut ac ex. Sed quis fermentum odio. Duis egestas malesuada purus eget faucibus. Aenean quis egestas orci. Sed viverra arcu tortor, venenatis molestie massa egestas ut. Suspendisse et sem nec lectus finibus lacinia eget in quam. Mauris viverra diam dolor, in ullamcorper ante egestas vel. Phasellus eu lacus purus. Mauris porttitor ultricies nunc quis auctor. Donec dapibus nulla sed tellus faucibus, sit amet venenatis massa vestibulum.\r\n\r\nNullam congue blandit lectus sit amet vehicula. Sed semper porttitor ligula, mattis congue leo. Maecenas dictum nulla eget nunc elementum euismod. Vestibulum condimentum pellentesque nulla, a efficitur neque. In vitae sapien condimentum, lacinia sem eget, pharetra magna. Vestibulum pharetra velit vel aliquet pellentesque. Nunc blandit mattis quam vel suscipit. Mauris semper felis in viverra egestas. Morbi varius pellentesque interdum. Maecenas augue justo, maximus eu mi et, sollicitudin viverra velit.', 'zdj1.jpg'),
(42, 'Oliver Kahn wykluczył transfer Roberta Lewandowskiego z Bayernu Monachium. \"Nie jesteśmy szaleni\"', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere, erat nec tincidunt efficitur, massa quam mollis nulla, ac commodo turpis dui a lorem. Cras pulvinar a tortor ac imperdiet. Nunc nec massa quam. Quisque convallis, metus quis blandit porttitor, nulla lorem pulvinar ante, quis pharetra magna arcu vel libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eleifend hendrerit orci, id auctor purus dictum id. Aliquam dignissim elit leo, nec tempus tellus tempus id. Fusce a pulvinar nunc. Nunc dapibus dignissim faucibus. Morbi eu euismod lorem. Cras et imperdiet leo. Sed lorem justo, efficitur id leo sit amet, tristique pharetra nibh. Praesent maximus, lectus nec tempor viverra, libero arcu lobortis velit, sed pulvinar est orci in mauris. Proin sagittis elit sed semper elementum. Donec cursus ultrices lacus eget accumsan. Maecenas et erat congue, gravida dui at, dapibus erat.\r\n\r\nAliquam fringilla augue nec orci auctor, ac lobortis dui accumsan. Cras ac dui ex. In sit amet diam sit amet diam pulvinar laoreet ut ac ex. Sed quis fermentum odio. Duis egestas malesuada purus eget faucibus. Aenean quis egestas orci. Sed viverra arcu tortor, venenatis molestie massa egestas ut. Suspendisse et sem nec lectus finibus lacinia eget in quam. Mauris viverra diam dolor, in ullamcorper ante egestas vel. Phasellus eu lacus purus. Mauris porttitor ultricies nunc quis auctor. Donec dapibus nulla sed tellus faucibus, sit amet venenatis massa vestibulum.\r\n\r\nNullam congue blandit lectus sit amet vehicula. Sed semper porttitor ligula, mattis congue leo. Maecenas dictum nulla eget nunc elementum euismod. Vestibulum condimentum pellentesque nulla, a efficitur neque. In vitae sapien condimentum, lacinia sem eget, pharetra magna. Vestibulum pharetra velit vel aliquet pellentesque. Nunc blandit mattis quam vel suscipit. Mauris semper felis in viverra egestas. Morbi varius pellentesque interdum. Maecenas augue justo, maximus eu mi et, sollicitudin viverra velit.', 'zdj3.jpg'),
(43, ' Geniusz Modricia i Benzemy uratował Real Madryt! Waleczna Chelsea odpadła po dogrywce', 'da', 'zdj1.jpg'),
(54, 'Nowy post', 'xgdxdgxd', 'zdj4.jpg');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `komentarze`
--
ALTER TABLE `komentarze`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `movie_reviews`
--
ALTER TABLE `movie_reviews`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `komentarze`
--
ALTER TABLE `komentarze`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT dla tabeli `movie_reviews`
--
ALTER TABLE `movie_reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
