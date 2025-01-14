import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({path: './.env'});

const sequelize = new Sequelize({
  dialect: "postgres",
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

export default sequelize;