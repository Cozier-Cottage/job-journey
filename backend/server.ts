import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { ServerError } from './backend-types';
// import mysql from 'mysql';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const PORT = 3000;
const app = express();
app.use(bodyParser.json({ limit: '50mb' })); // set file size limit to 50mb

app.use(cookieParser());
app.use(express.json({ limit: '50mb' })); // set file size limit to 50mb
app.use(express.urlencoded({ extended: true, limit: '50mb' })); // set file size limit to 50mb

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Connect to database
async function getConnection(): Promise<void> {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to the database with id ' + connection.threadId);
    connection.release();
  } catch (err) {
    console.error('Error getting database connection: ' + err.stack);
  }
}
console.log('HELLO ALEX')
getConnection();

// Test connection to database
async function testConnection(): Promise<void> {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to the database with id ' + connection.threadId);

    const [rows] = await connection.query('SELECT 1');
    console.log('Query executed, result:', rows);

    connection.release();
  } catch (err) {
    console.error('Error getting database connection: ' + err.stack);
  }
}

testConnection();

// Get request to users table
app.get('/api/users', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM users');
  res.json(rows);
});

// Get request to jobs table
app.get('/api/jobs', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM jobs');
  res.json(rows);
});

// Get request to applications table
app.get('/api/applications', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM applications');
  res.json(rows);
});



// Handling requests to unknown endpoints...
app.use('/', (req: Request, res: Response): Response => {
  return res
    .status(404)
    .json({ error: 'Endpoint does not exist' });
});

// Handling global errors...
app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: ServerError, req: Request, res: Response, next: NextFunction): Response => {
    const defaultErr: ServerError = {
      log: {err:'Express error handler caught unknown middleware error'},
      status: 500,
      message: 'internal server error: HELLLO',
    };

    const errorObj: ServerError = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  }
);

app.listen(PORT, (): void => {
  console.log(`Listening on socket: ${PORT}`);
});

module.exports = app;