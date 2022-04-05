import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../.env" });
export default {
    database: {
        host: 'localhost',
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    }
}