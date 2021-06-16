const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Quadb",
  password: "Admin@123",
  port: 5432,
});

module.exports.pool = pool;
