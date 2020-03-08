-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 08, 2020 at 07:37 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rest_api_book`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `released_date` varchar(255) NOT NULL,
  `imageURL` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `available` varchar(255) NOT NULL,
  `genre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `released_date`, `imageURL`, `description`, `available`, `genre`) VALUES
(1, 'Anne of Green Gables 2', '06/09/1908', 'https://images-na.ssl-images-amazon.com/images/I/51X09FpauIL._SX331_BO1,204,203,200_.jpg', 'As soon as Anne Shirley arrives at the snug white farmhouse called Green Gables, she is sure she wants to stay forever . . . but will the Cuthberts send her back to to the orphanage? Anne knows she\'s not what they expected—a skinny girl with fiery red hair and a temper to match. If only she can convince them to let her stay, she\'ll try very hard not to keep rushing headlong into scrapes and blurting out the first thing that comes to her mind. Anne is not like anyone else, the Cuthberts agree; she is special—a girl with an enormous imagination. This orphan girl dreams of the day when she can call herself Anne of Green Gables.', 'true', 1),
(2, 'Adventure Time', '04/05/2010', 'https://www.mainmain.id/uploads/post/2019/10/25/Adventure_Times_-_mainmain.id_3_.jpg', 'Twelve- year-old Finn battles evil in the Land of Ooo. Assisted by his magical dog, Jake, Finn roams the Land of Ooo righting wrongs and battling evil. Usually that evil comes in the form of the Ice King, who is in search of a wife.', 'true', 2),
(3, 'Gravity Falls', '06/15/2012', 'https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_.jpg', 'Gravity Falls is an American animated mystery comedy television series created by Alex Hirsch for Disney Channel and Disney XD. ', 'true', 2),
(4, 'Barakamon', '02/14/2009', 'https://m.media-amazon.com/images/M/MV5BYWM4YThiZGItMzUxNi00ZjllLWI0OWMtMjFhZTQxYjM4NDQ4XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SY1000_CR0,0,759,1000_AL_.jpg', 'Barakamon is a Japanese manga series written and illustrated by Satsuki Yoshino. It started serialization in Square Enix\'s Gangan Online February 2009 issue.', 'true', 3),
(5, 'Dilan 1990', '01/25/2018', 'https://pastelbooks.id/wp-content/uploads/2019/12/DILAN-REPUBLISHED.png', 'Dilan 1990 is a 2018 Indonesian romantic drama film. The film is based on the novel Dilan: Dia adalah Dilanku Tahun 1990 by Pidi Baiq.', 'true', 6),
(6, 'Laskar Pelangi', '09/25/2008', 'https://pastelbooks.id/wp-content/uploads/2019/12/DILAN-REPUBLISHED.png', 'Two Indonesian teachers embrace an inspiring crop of gifted young students who\'ve come to study at their crumbling Islamic primary school.', 'true', 2),
(7, 'The Tiger Rising', '03/10/2001', 'https://images-na.ssl-images-amazon.com/images/I/51QYYWNZ3JL.jpg', 'The Tiger Rising is a 2001 children\'s book written by Newbery Medal winning author Kate DiCamillo. It is about a 12-year-old named Rob Horton who finds a caged tiger in the center of the woods near his home. The book was a National Book Award Finalist.', 'true', 2),
(8, 'Demon Slayer', '04/06/2019', 'https://images-na.ssl-images-amazon.com/images/I/812KqwwGENL.jpg', 'Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotōge. The story follows Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered and his younger sister Nezuko is turned into a demon. ', 'true', 2),
(9, 'Harry Potter and the Philosopher\'s Stone', '06/26/1997', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTh5qS4am_HSTXMrQwVWiCpUOkq01ro3A2eiW8jCtknO1wj2cxu', 'Harry Potter and the Philosopher\'s Stone is a fantasy novel written by British author J. K. Rowling.', 'true', 1),
(10, 'Harry Potter and the Chamber of Secrets', '07/02/1998', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQST4RqUo1XVzOZ7lpPLCU-2H2KLgTmHkCAwYjF4QZjXegrCps0', 'Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. ', 'true', 1),
(11, 'Harry Potter and the Prisoner of Azkaban', '07/08/1999', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRP_GCIkWz_J3LMpJimw-0dLfNrwJwCgQjL0FK-JyioX8JywC-2', 'Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J.K. Rowling and is the third in the Harry Potter series. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry.', 'true', 1),
(12, 'Harry Potter and the Goblet of Fire', '07/08/2000', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZVWqrjBTKXnWqh9_g1OZKm3fE9m7A60gLOkGNVEWys4RA-QkT', 'Harry Potter and the Goblet of Fire is a fantasy book written by British author J. K. Rowling and the fourth novel in the Harry Potter series.', 'true', 1),
(13, 'Harry Potter and the Order of the Phoenix', '06/21/2003', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQObuT55P9VXFKFRvzvsR5f5cWQAStJsCV6DyHPhZNePsqTxGsN', 'Harry Potter and the Order of the Phoenix is a fantasy novel written by British author J. K. Rowling and the fifth novel in the Harry Potter series.', 'false', 1),
(14, 'Harry Potter and the Half-Blood Prince', '07/16/2005', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuy_N2pJ7FBSQ43ejLR9hfCq1rWjKmDYHbjwFT2q2mozxhJDCR', 'Harry Potter and the Half-Blood Prince is a fantasy novel written by British author J.K. Rowling and the sixth and penultimate novel in the Harry Potter series.', 'true', 1),
(15, 'Harry Potter and the Deathly Hallows', '07/21/2007', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XoZNx9LXpdfaLpviuFxF2lddhDCVNhuHwLPxDnLr112smMKK', 'Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel of the Harry Potter series. It was released on 21 July 2007 in the United Kingdom by Bloomsbury Publishing, in the United States by Scholastic, and in Canada by Raincoast Books.', 'true', 1),
(16, 'Lord of the Rings', '07/29/1954', 'https://images-na.ssl-images-amazon.com/images/I/8134AkhQJgL.jpg', 'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien\'s 1937 fantasy novel The Hobbit, but eventually developed into a much larger work.', 'true', 2),
(17, 'Harry Potter and the Cursed Child', '07/30/2016', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5CpGujutz87g2V3NJgu-Db1HwVOnDQ0uWq45xE2_5l-UqDmP', 'Harry Potter and the Cursed Child is a 2016 British two-part play written by Jack Thorne based on an original story by J. K. Rowling, John Tiffany, and Thorne. Previews of the play began at the Palace Theatre, London on 7 June 2016, and it premiered on 30 July 2016.', 'true', 1),
(18, 'Divergent', '04/26/2011', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQKhTkFFwrwGI1oakJjVzINbqGaPurBxGWG-h1jVBuQIXTY-aaC', 'Divergent is the debut novel of American novelist Veronica Roth, published by Harper Collins Children\'s Books in 2011. The novel is the first of the Divergent trilogy, a series of young adult dystopian novels set in a Divergent Universe.', 'true', 4),
(19, 'The Hunger Games', '09/14/2008', 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/The_Hunger_Games.jpg/220px-The_Hunger_Games.jpg', 'The Hunger Games is a series of young adult dystopian novels written by American novelist Suzanne Collins. The series is set in The Hunger Games universe, and follows young Katniss Everdeen. The novels in the trilogy are titled The Hunger Games, Catching Fire, and Mockingjay.', 'true', 1),
(20, 'Twilight', '10/05/2005', 'https://images-na.ssl-images-amazon.com/images/I/41K99%2BcInvL._SX326_BO1,204,203,200_.jpg', 'Twilight is a 2005 young adult vampire-romance novel by author Stephenie Meyer. It is the first book in the Twilight series, and introduces seventeen-year-old Isabella \"Bella\" Swan, who moves from Phoenix, Arizona to Forks, Washington. She is endangered after falling in love with Edward Cullen, a vampire. ', 'true', 5),
(21, 'New moon', '09/06/2006', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Newmooncover.jpg/220px-Newmooncover.jpg', 'New Moon is a 2006 romantic fantasy novel by author Stephenie Meyer, and is the second novel in the Twilight series. The novel continues the story of Bella Swan and vampire Edward Cullen\'s relationship.', 'true', 5),
(22, 'Eclipse', '08/07/2007', 'https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Eclipsecover.jpg/220px-Eclipsecover.jpg', 'Eclipse is the third novel in the Twilight Saga by Stephenie Meyer. It continues the story of Bella Swan and her vampire love, Edward Cullen.', 'true', 5),
(23, 'Breaking Dawn', '08/02/2008', 'https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Breaking_Dawn_cover.jpg/220px-Breaking_Dawn_cover.jpg', 'Breaking Dawn is the 2008 fourth and final novel in The Twilight Saga by American author Stephenie Meyer. Divided into three parts, the first and third sections are written from Bella Swan\'s perspective and the second is written from the perspective of Jacob Black.', 'false', 5),
(24, 'Ender\'s Game', '01/15/1985', 'https://vignette.wikia.nocookie.net/ansible/images/8/8e/Ender%27sGameCoverMain.jpg/revision/latest/top-crop/width/360/height/450?cb=20160608184731', 'Ender\'s Game is a 1985 military science fiction novel by American author Orson Scott Card. Set at an unspecified date in Earth\'s future, the novel presents an imperiled humankind after two conflicts with the Formics, an insectoid alien species they dub the \"buggers\".', 'false', 4),
(25, 'Sword Art Online', '12/13/2013', 'https://vignette.wikia.nocookie.net/swordartonline/images/9/90/Sword_Art_Online_Volume_18.png/revision/latest?cb=20160911131352', 'Sword Art Online is a Japanese light novel series written by Reki Kawahara and illustrated by abec. The series takes place in the near future and focuses on protagonist Kazuto \"Kirito\" Kirigaya and Asuna Yuuki as they play through various virtual reality MMORPG worlds.', 'true', 2),
(28, 'The Immortal Life of Henrietta Lacks', '02/02/2010', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThF3c0UdqFID9CiRmeZjZW7GTveVV8yWFVk2mzksXkE90V3mPp', 'The Immortal Life of Henrietta Lacks is a non-fiction book by American author Rebecca Skloot. It was the 2011 winner of the National Academies Communication Award for best creative work that helps the public understanding of topics in science, engineering or medicine.', 'true', 1),
(29, 'The Immortal Life of Henrietta Lacks', '02/02/2010', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThF3c0UdqFID9CiRmeZjZW7GTveVV8yWFVk2mzksXkE90V3mPp', 'The Immortal Life of Henrietta Lacks is a non-fiction book by American author Rebecca Skloot. It was the 2011 winner of the National Academies Communication Award for best creative work that helps the public understanding of topics in science, engineering or medicine.', 'true', 3),
(30, 'The Immortal Life of Henrietta Lacks', '02/02/2010', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThF3c0UdqFID9CiRmeZjZW7GTveVV8yWFVk2mzksXkE90V3mPp', 'The Immortal Life of Henrietta Lacks is a non-fiction book by American author Rebecca Skloot. It was the 2011 winner of the National Academies Communication Award for best creative work that helps the public understanding of topics in science, engineering or medicine.', 'true', 3),
(31, 'The Immortal Life of Henrietta Lacks', '02/02/2010', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThF3c0UdqFID9CiRmeZjZW7GTveVV8yWFVk2mzksXkE90V3mPp', 'The Immortal Life of Henrietta Lacks is a non-fiction book by American author Rebecca Skloot. It was the 2011 winner of the National Academies Communication Award for best creative work that helps the public understanding of topics in science, engineering or medicine.', 'true', 3),
(32, 'The Immortal Life of Henrietta Lacks', '02/02/2010', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThF3c0UdqFID9CiRmeZjZW7GTveVV8yWFVk2mzksXkE90V3mPp', 'The Immortal Life of Henrietta Lacks is a non-fiction book by American author Rebecca Skloot. It was the 2011 winner of the National Academies Communication Award for best creative work that helps the public understanding of topics in science, engineering or medicine.', 'true', 3),
(33, 'The Immortal Life of Henrietta Lacks', '02/02/2010', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThF3c0UdqFID9CiRmeZjZW7GTveVV8yWFVk2mzksXkE90V3mPp', 'The Immortal Life of Henrietta Lacks is a non-fiction book by American author Rebecca Skloot. It was the 2011 winner of the National Academies Communication Award for best creative work that helps the public understanding of topics in science, engineering or medicine.', 'true', 3),
(34, 'The Immortal Life of Henrietta Lacks', '02/02/2010', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThF3c0UdqFID9CiRmeZjZW7GTveVV8yWFVk2mzksXkE90V3mPp', 'The Immortal Life of Henrietta Lacks is a non-fiction book by American author Rebecca Skloot. It was the 2011 winner of the National Academies Communication Award for best creative work that helps the public understanding of topics in science, engineering or medicine.', 'true', 3),
(35, 'The Immortal Life of Henrietta Lacks', '02/02/2010', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThF3c0UdqFID9CiRmeZjZW7GTveVV8yWFVk2mzksXkE90V3mPp', 'The Immortal Life of Henrietta Lacks is a non-fiction book by American author Rebecca Skloot. It was the 2011 winner of the National Academies Communication Award for best creative work that helps the public understanding of topics in science, engineering or medicine.', 'true', 3),
(36, 'The Immortal Life of Henrietta Lacks', '02/02/2010', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThF3c0UdqFID9CiRmeZjZW7GTveVV8yWFVk2mzksXkE90V3mPp', 'The Immortal Life of Henrietta Lacks is a non-fiction book by American author Rebecca Skloot. It was the 2011 winner of the National Academies Communication Award for best creative work that helps the public understanding of topics in science, engineering or medicine.', 'true', 3);

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `name`) VALUES
(3, 'Comedy'),
(7, 'Mystery'),
(2, 'Non-Fiction'),
(1, 'Novel'),
(6, 'Romance'),
(4, 'Sci-Fi'),
(5, 'Supernatural');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `registered_at` varchar(255) NOT NULL,
  `salt` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `registered_at`, `salt`) VALUES
(1, 'dzaky.badawi@gmail.com', '1d02d0fc6086754d7ff19202f7d0cffccc95f9fadd3e764a4e5c450b37a2c804', '03/06/2020', '865acf17f552cd7b84a8'),
(6, 'den.badawi@gmail.com', 'd3e78d49822cb885dac76418af071e1c5685e585861040b8c3b8e192d772bef8', '03/08/2020', '18a09832d8301a8869d7');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genre` (`genre`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`genre`) REFERENCES `genres` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
