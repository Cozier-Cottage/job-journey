CREATE DATABASE IF NOT EXISTS job_journey_db;
USE job_journey_db;

CREATE TABLE IF NOT EXISTS applications (
  app_id INT AUTO_INCREMENT,
  jobTitle VARCHAR(255),
  companyName VARCHAR(255),
  location VARCHAR(255),
  appStatus VARCHAR(255),
  jobType VARCHAR(255),
  appDate VARCHAR(255),
  method VARCHAR(255),
  description TEXT,
  jobSalary INT,
  interviewDate VARCHAR(255),
  interviewNotes TEXT,
  followUp TEXT,
  addtionalNotes TEXT,
  PRIMARY KEY (app_id)
);
