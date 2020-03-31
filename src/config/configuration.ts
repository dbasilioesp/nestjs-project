import * as dotenv from "dotenv";

dotenv.config();

export default {
  database: process.env.DATABASE_URL
};
