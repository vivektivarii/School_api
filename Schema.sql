CREATE DATABASE schools_app;
USE schools_app;


CREATE TABLE schools (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT,
    longitude FLOAT,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


 INSERT INTO schools (name, address, latitude, longitude)
 VALUES
 ('vivek', 'mehsana', 90.2222222, -28.8983492);
 