// import express, { NextFunction, Request, Response } from 'express';
// import bodyParser from 'body-parser';
// import cookieParser from 'cookie-parser';
// import { ServerError } from './backend-types';
// import { getData, createData } from './controller/sqlQueryController'; // Import SQL controller functions
// import { middlewareFunctions } from './middleware/Middleware'; // Import middleware functions
// // import mysql from 'mysql';
// import mysql from 'mysql2/promise';
// import dotenv from 'dotenv';
// dotenv.config();


// const app: Application = express();
// const PORT = process.env.PORT || 3000;

// // Apply middleware functions
// app.use(middlewareFunctions.logger); // Example: Use logging middleware
// app.use(middlewareFunctions.errorHandler); // Example: Use error handling middleware

// // Define routes and use SQL controller functions
// app.get('/api/data', sqlControllerFunctions.getData); // Example route
// app.post('/api/data', sqlControllerFunctions.createData); // Example route

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// export const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });