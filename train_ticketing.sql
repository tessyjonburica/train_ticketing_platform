
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




CREATE TABLE IF NOT EXISTS fares (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    passengerType ENUM('Adult', 'Child') NOT NULL,
    travelClassId INT UNSIGNED NOT NULL,
    FOREIGN KEY (travelClassId) REFERENCES travelClasses(id),


CREATE TABLE IF NOT EXISTS bookings (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    date DATE,
    arrivalTime TIMESTAMP,
   departureTime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    scheduleId INT UNSIGNED NOT NULL,
    FOREIGN KEY (scheduleId) REFERENCES schedules(id),
    customerId INT UNSIGNED NOT NULL,
    FOREIGN KEY (customerId) REFERENCES customers(id),



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

CREATE TABLE admins(
    `name` VARCHAR(255) NOT NULL, 
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    `role` VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);