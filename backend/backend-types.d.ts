export interface ServerError {
  log: {
    err: string;
  };
  status: number;
  message: string
}

export interface Users {
  user_id: number;
  username: string;
  first_name: string;
  last_name: string;
}

export interface Jobs {
  job_id: number;
  company_name: string;
  job_title: string;
  job_location: string;
  job_description: string;
  job_url: string;
  job_type: string;
  salary: number;
}

export interface Applications {
  app_id: number;
  user_id: number;
  job_id: number;
  application_date: Date;
  application_method: string;
  application_status: string;
  interview_date: Date;
  interview_notes: string;
  follow_up_actions: string;
  additional_notes: string;
}