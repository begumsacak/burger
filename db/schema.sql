-- Drops the burgers_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Creating the database burgers_db and specified it for use.
CREATE DATABASE burgers_db;

USE burgers_db;

-- Creating the table burgers.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255),
  devoured BOOLEAN,
  PRIMARY KEY (id)
);

