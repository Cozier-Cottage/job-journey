import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { ServerError } from './backend-types';

const PORT = 3000;
const app = express();
app.use(bodyParser.json({ limit: '50mb' })); // set file size limit to 50mb

app.use(cookieParser());
app.use(express.json({ limit: '50mb' })); // set file size limit to 50mb
app.use(express.urlencoded({ extended: true, limit: '50mb' })); // set file size limit to 50mb


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