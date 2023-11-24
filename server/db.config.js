const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
);

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("database has been established successfully ...");
  } catch (error) {
    console.log("unable to connect with database", error);
  }
};
module.exports = {
  sequelize,
  connect,
};
