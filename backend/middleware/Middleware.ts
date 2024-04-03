

// Handling global errors...
app.use(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (err: ServerError, req: Request, res: Response, next: NextFunction): Response => {
      const defaultErr: ServerError = {
        log: { err: 'Express error handler caught unknown middleware error' },
        status: 500,
        message: 'internal server error: HELLLO',
      };
      const errorObj: ServerError = Object.assign({}, defaultErr, err);
      console.log(errorObj.log);
      return res.status(errorObj.status).json(errorObj.message);
    }
  );