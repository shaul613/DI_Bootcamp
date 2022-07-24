-- Database: Bootcamp

-- DROP DATABASE IF EXISTS "Bootcamp";

CREATE DATABASE "Bootcamp"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE TABLE students(
  student_id SERIAL PRIMARY KEY,
  last_name VARCHAR(50) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  birth_date DATE NOT NULL
);
