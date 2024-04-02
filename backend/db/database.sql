CREATE DATABASE jobJourneyDB;
USE jobJourneyDB;

CREATE TABLE users (
  user_id INT AUTO_INCREMENT,
  username VARCHAR(255),
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  PRIMARY KEY (user_id)
);

CREATE TABLE application (
  app_id INT AUTO_INCREMENT,
  user_id INT,
  posting_id INT,
  application_date DATE,
  application_method VARCHAR(255),
  application_status VARCHAR(255),
  intervview_date DATE,
  interview_notes TEXT,
  follow_up_actions TEXT,
  additional_notes TEXT,
  PRIMARY KEY (app_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (job_id) REFERENCES job(job_id)
);

CREATE TABLE job (
  job_id INT AUTO_INCREMENT,
  company_id INT,
  job_title VARCHAR(255),
  job_location VARCHAR(255),
  job_description TEXT,
  job_url VARCHAR(2083),
  job_type VARCHAR(255),
  salary INT,
  PRIMARY KEY (app_id),
  FOREIGN KEY (company_id) REFERENCES company(company)
);

CREATE TABLE company (
  company_id INT AUTO_INCREMENT,
  company_name VARCHAR(255),
  PRIMARY KEY (company_id)
);