CREATE TABLE IF NOT EXISTS customers(
    `id` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `surname` VARCHAR(255) NOT NULL,
    `firstName` VARCHAR(255) NOT NULL,
    `email`  VARCHAR(255),
    `phone` CHAR(20),
    `gender` ENUM('Male','Female') DEFAULT 'Male',
    `dateOfBirth` DATE,
    `nin` VARCHAR(255),
    `password` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS schedules(
    `id` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `distance` FLOAT,
    `stationId` INT, FOREIGN KEY (`stationId`) REFERENCES stations(id),
    `arrivalTime` TIMESTAMP,
    `departureTime` TIMESTAMP,
    `departureStation` VARCHAR(255),
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS seats(
    `id` INT PRIMARY KEY AUTO_INCREMENT ,
    `code` VARCHAR(255),
    `coachId` INT FOREIGN KEY (`coachId`) REFERENCES coaches(id),
    `classId` INT FOREIGN KEY (`classId`) REFERENCES classes(id),
    `status` ENUM('Available','Unavailable') DEFAULT 'Available'
);