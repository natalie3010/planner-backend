import sqlite3 from 'better-sqlite3';

const db = new sqlite3("./Workforce_Planning_02.db", {fileMustExist: true});

const matching_user_sql_query = `SELECT UserId, Username, Role FROM Users WHERE Username=? AND Password=?`;
const insert_user_sql_query = `INSERT INTO Users VALUES (?, ?, ?)`;

export const getMatchingUser = (username, password) => {
    let data = db.prepare(matching_user_sql_query).get(username, password);
    console.log(data);
	return data;
}

export const addNewUser = (newUser) => {
    let data = db.prepare(insert_user_sql_query).run(newUser.username, newUser.password, newUser.role);
    console.log(data);
	return data;
}