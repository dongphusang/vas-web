import express from 'express';
import cors from 'cors'; 
import mysql from 'mysql2';
import 'dotenv/config'

const app = express();
const port = 8000;

const db = mysql.createConnection({
host: process.env.MYSQL_HOST,
user: process.env.MYSQL_USER,
password: process.env.MYSQL_SECRET,
port: Number(process.env.MYSQL_PORT),
database: process.env.MYSQL_DATABASE});

app.use(express.json());
app.use(cors());

app.get("/api/events", (req,res) => {
    const query = "SELECT * FROM event"
    db.query(query, (err, data) => {
        if (err) return res.json({ message: "Server Error: "+err})
        return res.json(data);
    });
});

app.get("/api/event/:id", (req,res) => {
    const id = req.params.id;
    const query = "SELECT * FROM event WHERE `id` = ?";
    db.query(query, [id], (err, data) => {
        if (err) res.json({ message: "Server error" + err});
        return res.json(data);
    });
});

app.listen(port, () => {
    console.log("listening on port 8000");
});
