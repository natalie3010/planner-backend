const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("Skills_Supply_And_Demand.accdb", (err) => {
    if(err) {
        return console.error(err.message);
    }
    console.log("Connected to in-memory SQlite database.")
});

// Code that does something.

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});