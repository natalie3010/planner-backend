import sqlite3 from 'better-sqlite3';

const db = new sqlite3("./Workforce_Planning_02.db", {fileMustExist: true});

const sql_query = 

`SELECT Username FROM Users WHERE Username=? AND Password=?`;

export const getMatchingUser = (username, password) => {
    let data = db.prepare(sql_query).all(username, password);
    console.log(data);
	return data;
}