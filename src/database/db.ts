import mysql from 'mysql2';
import 'dotenv/config'


export const db = mysql.createConnection({
host: process.env.MYSQL_HOST,
user: process.env.MYSQL_USER,
password: process.env.MYSQL_SECRET,
port: Number(process.env.MYSQL_PORT),
database: process.env.MYSQL_DATABASE});

console.log(process.env);