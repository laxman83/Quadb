const { pool } = require("../config/db");

const getData = (request, response) => {
  console.log("response");
  pool.query("SELECT * FROM tickers LIMIT 10", (error, results) => {
    if (error) {
      throw error;
    }
    
    response.status(200).json(results.rows);
  });
};

module.exports.getData = getData;
