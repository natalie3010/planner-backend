const sqlite3 = require("sqlite3").verbose();

// Open the database.
let db = new sqlite3.Database("Workforce_Planning_01.db", (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to in-memory SQlite database.")
});

// Query the skills list table.
let sql_skills = "select * from Skills";

db.all(sql_skills, [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((row) => {
        console.log(row);
    });
});

// Close the database.
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});