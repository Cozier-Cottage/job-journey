import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from 'path';
import fs from 'fs';
import mysql from "mysql";
dotenv.config();

const PORT = 3005;
const app = express();
app.use(bodyParser.json({ limit: "50mb" })); // set file size limit to 50mb

app.use(cookieParser());
app.use(express.json({ limit: "50mb" })); // set file size limit to 50mb
app.use(express.urlencoded({ extended: true, limit: "50mb" })); // set file size limit to 50mb

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  multipleStatements: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error getting database connection: ' + err.stack);
    return;
  }

  const sqlScriptPath = 'backend/db/database.sql';
  const sqlScript = fs.readFileSync(sqlScriptPath, 'utf8');

  connection.query(sqlScript, (err, results) => {
    if (err) {
      console.error('Error executing SQL script:', err);
      return;
    }
    console.log('SQL script executed successfully');
  });

  connection.release();
});

// Get the Data
app.get("/api/applications", async (req, res) => {
  const sql = "SELECT * FROM applications";

  await pool.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing SQL query: " + err.message);
    }
    console.log("results is ", results);
    return res.status(200).json(results);
  });
});

// Post request to add data to applications table
app.post("/api/applications", async (req, res) => {

  const {jobTitle, companyName, location, appStatus, jobType, appDate, method, description, jobSalary, interviewDate, interviewNotes, followUp, addtionalNotes} = req.body;
  console.log("REQ.BODY ", JSON.stringify(req.body));

  const sql = `INSERT INTO applications 
                (jobTitle, companyName, location, appStatus, jobType, appDate, method, description, jobSalary, interviewDate, interviewNotes, followUp, addtionalNotes) 
                VALUES 
                (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [jobTitle, companyName, location, appStatus, jobType, appDate, method, description, jobSalary, interviewDate, interviewNotes, followUp, addtionalNotes];

  await pool.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error executing SQL query: ' + err.message);
      return res.status(500).json({ error: 'Internal server error' });
    }
    console.log('New INSERT: ', result);
  });
  return res.status(200).json(res.locals.result);
});

// Handling requests to unknown endpoints...
app.use("/", (req, res) => {
  return res.status(404).json({ error: "Endpoint does not exist" });
});

// Handling global errors...
app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err, req, res, next) => {
    const defaultErr = {
      log: { err: "Express error handler caught unknown middleware error" },
      status: 500,
      message: "internal server error: HELLLO",
    };

    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  }
);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

export default app;
