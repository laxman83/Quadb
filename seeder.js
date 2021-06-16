const { pool } = require("./config/db");
const axios = require("axios").default;
const importData = async () => {
  try {
    const dataArray = [];
    const { data: tickersData } = await axios.get(
      "https://api.wazirx.com/api/v2/tickers"
    );
    const tickersKeyData = Object.keys(tickersData);
    for (const index in tickersKeyData) {
      dataArray.push(tickersData[tickersKeyData[index]]);
    }
    dataArray.sort(function (a, b) {
      return b.buy - a.buy;
    });
    const data = dataArray.slice(0, 10);
    for (const key in data) {
      const { name, last, buy, sell, volume, base_unit } = data[key];
      pool.query(
        "INSERT INTO tickers (name,last,buy,sell,volume,base_unit) VALUES ($1, $2 ,$3,$4,$5,$6)",
        [name, last, buy, sell, volume, base_unit],
        (error, results) => {
          if (error) {
            throw error;
          }
          if (key === data.length - 1) {
            process.exit();
          }
        }
      );
    }
    console.log("Data imported ");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const deleteData = () => {
  try {
    pool.query("Delete from tickers ", (error, results) => {
      if (error) {
        throw error;
      }

      console.log("Data deleted");
      process.exit();
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  deleteData();
} else {
  importData();
}
