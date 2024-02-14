-- -- phpMyAdmin SQL Dump
-- -- version 5.2.1
-- -- https://www.phpmyadmin.net/
-- --
-- -- Host: 127.0.0.1
-- -- Generation Time: Feb 14, 2024 at 08:05 AM
-- -- Server version: 10.4.32-MariaDB
-- -- PHP Version: 8.2.12

-- SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
-- START TRANSACTION;
-- SET time_zone = "+00:00";


-- /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
-- /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
-- /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
-- /*!40101 SET NAMES utf8mb4 */;

-- --
-- -- Database: `train_ticketing`
-- --

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `amounts`
-- --

-- CREATE TABLE `amounts` (
--   `id` int(10) UNSIGNED NOT NULL,
--   `amount` float DEFAULT NULL,
--   `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
--   `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `bookedseats`
-- --

-- CREATE TABLE `bookedseats` (
--   `id` int(10) UNSIGNED NOT NULL,
--   `bookingId` int(10) UNSIGNED NOT NULL,
--   `seatId` int(11) DEFAULT NULL,
--   `passengerType` enum('Adult','Child') DEFAULT 'Adult',
--   `phone` varchar(255) DEFAULT NULL,
--   `email` varchar(255) DEFAULT NULL,
--   `nin` varchar(25) DEFAULT NULL,
--   `amount` float DEFAULT NULL,
--   `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
--   `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `bookings`
-- --

-- CREATE TABLE `bookings` (
--   `id` int(10) UNSIGNED NOT NULL,
--   `date` date DEFAULT NULL,
--   `arrivalTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
--   `departureTime` timestamp NOT NULL DEFAULT current_timestamp(),
--   `scheduleId` int(10) UNSIGNED NOT NULL,
--   `customerId` int(10) UNSIGNED NOT NULL,
--   `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
--   `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `coaches`
-- --

-- CREATE TABLE `coaches` (
--   `id` int(10) UNSIGNED NOT NULL,
--   `code` varchar(255) DEFAULT NULL,
--   `trainId` int(10) UNSIGNED NOT NULL,
--   `travelClassId` int(10) UNSIGNED NOT NULL,
--   `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
--   `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `customers`
-- --

-- CREATE TABLE `customers` (
--   `id` int(10) UNSIGNED NOT NULL,
--   `surname` varchar(255) NOT NULL,
--   `firstName` varchar(255) NOT NULL,
--   `email` varchar(255) DEFAULT NULL,
--   `phone` varchar(225) DEFAULT NULL,
--   `gender` enum('Male','Female') DEFAULT 'Male',
--   `dob` date DEFAULT NULL,
--   `password` varchar(255) NOT NULL,
--   `nin` varchar(25) DEFAULT NULL,
--   `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
--   `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `fares`
-- --

-- CREATE TABLE `fares` (
--   `id` int(10) UNSIGNED NOT NULL,
--   `passengerType` enum('Adult','Child') NOT NULL,
--   `travelClassId` int(10) UNSIGNED NOT NULL,
--   `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
--   `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `schedules`
-- --

-- CREATE TABLE `schedules` (
--   `id` int(10) UNSIGNED NOT NULL,
--   `name` varchar(255) NOT NULL,
--   `distance` float DEFAULT NULL,
--   `stationId` int(10) UNSIGNED NOT NULL,
--   `arrivalTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
--   `departureTime` timestamp NOT NULL DEFAULT current_timestamp(),
--   `departureStation` varchar(255) DEFAULT NULL,
--   `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
--   `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `seats`
-- --

-- CREATE TABLE `seats` (
--   `id` int(11) NOT NULL,
--   `code` varchar(255) DEFAULT NULL,
--   `coachId` int(10) UNSIGNED NOT NULL,
--   `customerId` int(10) UNSIGNED NOT NULL,
--   `travelClassId` int(10) UNSIGNED NOT NULL,
--   `status` enum('Available','Unavailable') DEFAULT 'Available',
--   `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
--   `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `stations`
-- --

-- CREATE TABLE `stations` (
--   `id` int(10) UNSIGNED NOT NULL,
--   `stationCode` varchar(255) NOT NULL,
--   `name` varchar(255) NOT NULL,
--   `city` varchar(255) NOT NULL,
--   `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
--   `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `trains`
-- --

-- CREATE TABLE `trains` (
--   `id` int(10) UNSIGNED NOT NULL,
--   `code` varchar(255) NOT NULL,
--   `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
--   `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `travelclasses`
-- --

-- CREATE TABLE `travelclasses` (
--   `id` int(10) UNSIGNED NOT NULL,
--   `name` varchar(255) NOT NULL,
--   `description` text DEFAULT NULL,
--   `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
--   `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --
-- -- Indexes for dumped tables
-- --

-- --
-- -- Indexes for table `amounts`
-- --
-- ALTER TABLE `amounts`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- Indexes for table `bookedseats`
-- --
-- ALTER TABLE `bookedseats`
--   ADD PRIMARY KEY (`id`),
--   ADD KEY `bookingId` (`bookingId`),
--   ADD KEY `seatId` (`seatId`);

-- --
-- -- Indexes for table `bookings`
-- --
-- ALTER TABLE `bookings`
--   ADD PRIMARY KEY (`id`),
--   ADD KEY `scheduleId` (`scheduleId`),
--   ADD KEY `customerId` (`customerId`);

-- --
-- -- Indexes for table `coaches`
-- --
-- ALTER TABLE `coaches`
--   ADD PRIMARY KEY (`id`),
--   ADD KEY `trainId` (`trainId`),
--   ADD KEY `travelClassId` (`travelClassId`);

-- --
-- -- Indexes for table `customers`
-- --
-- ALTER TABLE `customers`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- Indexes for table `fares`
-- --
-- ALTER TABLE `fares`
--   ADD PRIMARY KEY (`id`),
--   ADD KEY `travelClassId` (`travelClassId`);

-- --
-- -- Indexes for table `schedules`
-- --
-- ALTER TABLE `schedules`
--   ADD PRIMARY KEY (`id`),
--   ADD KEY `stationId` (`stationId`);

-- --
-- -- Indexes for table `seats`
-- --
-- ALTER TABLE `seats`
--   ADD PRIMARY KEY (`id`),
--   ADD KEY `coachId` (`coachId`),
--   ADD KEY `customerId` (`customerId`),
--   ADD KEY `travelClassId` (`travelClassId`);

-- --
-- -- Indexes for table `stations`
-- --
-- ALTER TABLE `stations`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- Indexes for table `trains`
-- --
-- ALTER TABLE `trains`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- Indexes for table `travelclasses`
-- --
-- ALTER TABLE `travelclasses`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- AUTO_INCREMENT for dumped tables
-- --

-- --
-- -- AUTO_INCREMENT for table `amounts`
-- --
-- ALTER TABLE `amounts`
--   MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

-- --
-- -- AUTO_INCREMENT for table `bookedseats`
-- --
-- ALTER TABLE `bookedseats`
--   MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

-- --
-- -- AUTO_INCREMENT for table `bookings`
-- --
-- ALTER TABLE `bookings`
--   MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

-- --
-- -- AUTO_INCREMENT for table `coaches`
-- --
-- ALTER TABLE `coaches`
--   MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

-- --
-- -- AUTO_INCREMENT for table `customers`
-- --
-- ALTER TABLE `customers`
--   MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

-- --
-- -- AUTO_INCREMENT for table `fares`
-- --
-- ALTER TABLE `fares`
--   MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

-- --
-- -- AUTO_INCREMENT for table `schedules`
-- --
-- ALTER TABLE `schedules`
--   MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

-- --
-- -- AUTO_INCREMENT for table `seats`
-- --
-- ALTER TABLE `seats`
--   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

-- --
-- -- AUTO_INCREMENT for table `stations`
-- --
-- ALTER TABLE `stations`
--   MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

-- --
-- -- AUTO_INCREMENT for table `trains`
-- --
-- ALTER TABLE `trains`
--   MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

-- --
-- -- AUTO_INCREMENT for table `travelclasses`
-- --
-- ALTER TABLE `travelclasses`
--   MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

-- --
-- -- Constraints for dumped tables
-- --

-- --
-- -- Constraints for table `bookedseats`
-- --
-- ALTER TABLE `bookedseats`
--   ADD CONSTRAINT `bookedseats_ibfk_1` FOREIGN KEY (`bookingId`) REFERENCES `bookings` (`id`),
--   ADD CONSTRAINT `bookedseats_ibfk_2` FOREIGN KEY (`seatId`) REFERENCES `seats` (`id`);

-- --
-- -- Constraints for table `bookings`
-- --
-- ALTER TABLE `bookings`
--   ADD CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`scheduleId`) REFERENCES `schedules` (`id`),
--   ADD CONSTRAINT `bookings_ibfk_2` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`);

-- --
-- -- Constraints for table `coaches`
-- --
-- ALTER TABLE `coaches`
--   ADD CONSTRAINT `coaches_ibfk_1` FOREIGN KEY (`trainId`) REFERENCES `trains` (`id`),
--   ADD CONSTRAINT `coaches_ibfk_2` FOREIGN KEY (`travelClassId`) REFERENCES `travelclasses` (`id`);

-- --
-- -- Constraints for table `fares`
-- --
-- ALTER TABLE `fares`
--   ADD CONSTRAINT `fares_ibfk_1` FOREIGN KEY (`travelClassId`) REFERENCES `travelclasses` (`id`);

-- --
-- -- Constraints for table `schedules`
-- --
-- ALTER TABLE `schedules`
--   ADD CONSTRAINT `schedules_ibfk_1` FOREIGN KEY (`stationId`) REFERENCES `stations` (`id`);

-- --
-- -- Constraints for table `seats`
-- --
-- ALTER TABLE `seats`
--   ADD CONSTRAINT `seats_ibfk_1` FOREIGN KEY (`coachId`) REFERENCES `coaches` (`id`),
--   ADD CONSTRAINT `seats_ibfk_2` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`),
--   ADD CONSTRAINT `seats_ibfk_3` FOREIGN KEY (`travelClassId`) REFERENCES `travelclasses` (`id`);
-- COMMIT;

-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


CREATE TABLE IF NOT EXISTS customers (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    surname VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(225),
    gender ENUM('Male','Female') DEFAULT 'Male',
    dob DATE,
    password VARCHAR(255) NOT NULL,
    nin VARCHAR(25),
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS stations (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    stationCode VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS schedules (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    distance FLOAT(2),
    stationId INT UNSIGNED NOT NULL,
    FOREIGN KEY (stationId) REFERENCES stations(id),
    arrivalTime TIMESTAMP NOT NULL,
    departureTime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    departureStation VARCHAR(255),
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS travelClasses (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS fares (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    passengerType ENUM('Adult', 'Child') NOT NULL,
    travelClassId INT UNSIGNED NOT NULL,
    FOREIGN KEY (travelClassId) REFERENCES travelClasses(id),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS bookings (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    date DATE,
    arrivalTime TIMESTAMP,
   departureTime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    scheduleId INT UNSIGNED NOT NULL,
    FOREIGN KEY (scheduleId) REFERENCES schedules(id),
    customerId INT UNSIGNED NOT NULL,
    FOREIGN KEY (customerId) REFERENCES customers(id),
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS trains (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS coaches (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(255),
    trainId INT UNSIGNED NOT NULL,
    FOREIGN KEY (trainId) REFERENCES trains(id),
    travelClassId INT UNSIGNED NOT NULL,
    FOREIGN KEY (travelClassId) REFERENCES travelClasses(id),
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS seats (
    id INT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(255),
    coachId INT UNSIGNED NOT NULL, -- Assuming this is the correct column name
    FOREIGN KEY (coachId) REFERENCES coaches(id),
    customerId INT UNSIGNED NOT NULL,
    FOREIGN KEY (customerId) REFERENCES customers(id),
    travelClassId INT UNSIGNED NOT NULL,
    FOREIGN KEY (travelClassId) REFERENCES travelClasses(id),
    status ENUM('Available','Unavailable') DEFAULT 'Available',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS bookedSeats (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    bookingId INT UNSIGNED NOT NULL,
    FOREIGN KEY (bookingId) REFERENCES bookings(id),
    seatId INT ,
    FOREIGN KEY (seatId) REFERENCES seats(id),
    passengerType ENUM('Adult', 'Child') DEFAULT 'Adult',
    phone VARCHAR(255),
    email VARCHAR(255),
    nin VARCHAR(25),
    amount FLOAT(2),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS amounts (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    amount FLOAT(2),
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);