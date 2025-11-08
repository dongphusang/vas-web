import express from 'express';
import cors from 'cors'; 
import { db } from './src/database/db.ts'; 

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.get("/api/events", (req,res) => {
    const query = "SELECT * FROM event"
    db.query(query, (err, data: any[]) => {
        if (err) return res.json({ message: "Server Error: "+err})
        return res.json(data);
    });
});

app.get("/api/event/:id", (req,res) => {
    const id = req.params.id;
    const query = "SELECT * FROM event WHERE `id` = ?";
    db.query(query, [id], (err, data: any[]) => {
        if (err) res.json({ message: "Server error" + err});
        return res.json(data);
    });
});

app.listen(port, () => {
    console.log("listening on port 8000");
});
