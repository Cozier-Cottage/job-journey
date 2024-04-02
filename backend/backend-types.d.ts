export interface ServerError {
    log: {
      err: string;
    };
    status: number;
    message: string
  }