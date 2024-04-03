const pool = require('./database-connection');





const controllers = {
  insertData: async (req, res) => {

    //INSERT DATA
    // INSERT INTO cats(name,age)
    // VALUES ('turkey', 5),

  },
  getData: async (req, res) => {

    // READ
    // SELECT name, status, application, FROM user
    // SELECT * FROM application WHERE company_id=whatever user clicks

    try {
      //Find the application data
      //return that data
      const connection = await pool.getConnection();
      const [rows] = await connection.query('SELECT * FROM table_name');
      connection.release();
      return res.json(rows);
    } catch (err) {
      console.error('Error querying database:', err);
      return res.status(500).json({ error: 'Error querying database' });
    }
  },
  updateData: (req, res) => {

    //UPDATE
    //UPDATE cats SET breed='Shorthair'
    //WHERE breed='Tabby';
    //specify WHERE so you don't update every row/cats breed for every id
  },
  deleteData: (req, res) => {
    //DELETE
    //DELETE FROM cats WHERE name='Egg'
  }

//   createData: async (req, res) => {
//     // Implement the create data functionality here
//   },


};








module.exports = controllers;