import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

const PORT = 3005;
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
function getConnection() {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting database connection: ' + err.stack);
    } else {
      console.log('Connected to the database with id ' + connection.threadId);
      connection.release();
    }
  });
}

getConnection();

// Test connection to database
function testConnection() {
  pool.getConnection(async (err, connection) => {
    if (err) {
      console.error('Error getting database connection: ' + err.stack);
    } else {
      console.log('Connected to the database with id ' + connection.threadId);

      // Wrap connection.query() in a Promise
      const queryPromise = new Promise((resolve, reject) => {
        connection.query('SELECT 1', (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });

      try {
        const rows = await queryPromise;
        console.log('Query executed, result:', rows);
      } catch (err) {
        console.error('Error executing query: ' + err.stack);
      }

      connection.release();
    }
  });
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
app.use('/', (req, res) => {
  return res
    .status(404)
    .json({ error: 'Endpoint does not exist' });
});

// Handling global errors...
app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err, req, res, next) => {
    const defaultErr = {
      log: {err:'Express error handler caught unknown middleware error'},
      status: 500,
      message: 'internal server error: HELLLO',
    };

    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  }
);

app.listen(PORT, () => {
  console.log(`Listening on socket: ${PORT}`);
});

export default app;