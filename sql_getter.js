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

// Produce the supply and demand information.
let sql_supply_demand = 

`select demand_sq.'Skill Name', demand_sq.'Skill Demand', supply_sq.'Supply of Skill'
from 
(	
	select s.'Skill Name' as 'Skill Name', count(s.'Skill Name') as 'Skill Demand'
	from 'Demand' d, 'Clients-Skills' cs, 'Skills' s
	where d.'Client-Skill ID' = cs.'Client-Skill ID'
	and cs.'Skill ID' = s.'Skill ID'
	group by s.'Skill Name'
) as demand_sq,
(
	select s.'Skill Name', count(cs.'Skill ID') as 'Supply of Skill'
	from 'Clients-Skills' cs, 'Clients' c, 'Skills' s
	where cs.'Client ID' = c.'Client ID'
	and s.'Skill ID' = cs.'Skill ID'
	group by s.'Skill Name'
) as supply_sq
where demand_sq.'Skill Name' = supply_sq.'Skill Name'`

db.all(sql_supply_demand, [], (err, rows) => {
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