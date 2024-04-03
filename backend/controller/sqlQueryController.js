import pool from '../db/pool.js';


const sqlQueryController = {
  insertData: async (req, res, next) => {

  // const { jobTitle, companyName, location, appStatus, jobType, appDate, method, description, jobSalary, interviewDate, interviewNotes, followUp, addtionalNotes } = req.body;

    const sql = `INSERT INTO applications 
                (jobTitle, companyName, location, appStatus, jobType, appDate, method, description, jobSalary, interviewDate, interviewNotes, followUp, addtionalNotes) 
                VALUES 
                (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    // const values = [jobTitle, companyName, location, appStatus, jobType, appDate, method, description, jobSalary, interviewDate, interviewNotes, followUp, addtionalNotes];
    const values = ['Software Engineer', 'ABC Company', 'New York', 'Pending', 'Full-time', '2024-04-03', 'Online Application', 'Seeking experienced software engineer proficient in Java and Python.', 80000, 'N/A', 'N/A', 'N/A', 'N/A'];


    await pool.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error executing SQL query: ' + err.message);
        res.status(500).json({ error: 'Internal server error' });
        return next(err);
      }

      console.log('Application created successfully');
      res.locals.result = result;
      return next();
    });


  },
  getData: async (req, res, next) => {
    const sql = 'SELECT * FROM applications';

    await pool.query(sql, (err, results) => {
      if (err) {
        console.error('Error executing SQL query: ' + err.message);
        return next(err);
      }

      console.log('Applications fetched successfully');
      res.locals.result = results;
      return next();
    });
  },

  // updateData: (req, res) => {

  //   //UPDATE
  //   //UPDATE cats SET breed='Shorthair'
  //   //WHERE breed='Tabby';
  //   //specify WHERE so you don't update every row/cats breed for every id
  // },
  // deleteData: (req, res) => {
  //   //DELETE
  //   //DELETE FROM cats WHERE name='Egg'
  // }
};


export default sqlQueryController;