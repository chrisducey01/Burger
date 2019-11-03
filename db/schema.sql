-- Run this section to create the database on a localhost
-- If hosting mysql on Heroku you can skip this step since 
--   db is already created for you there
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

-- Run the SQL below regardless of where the db is hosted
-- to create the table needed for the app to run

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar(50) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY(id)
);
