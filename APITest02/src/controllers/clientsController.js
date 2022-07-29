import sqlite3 from 'better-sqlite3';

const db = new sqlite3("./Workforce_Planning_02.db", {fileMustExist: false});

const sql_query = 

`select * from 'Clients'`;
const SQL_QUERY_DELETE_CLIENT_BY_ID = `DELETE FROM 'Clients' WHERE ClientID=?`;

export const getClientsData = () => {
    let data = db.prepare(sql_query).all();
    console.log(data);
	return data;
}

export const removeClientByID = (clientID) => {
    let confirmation = db.prepare(SQL_QUERY_DELETE_CLIENT_BY_ID).run(clientID);
    console.log(confirmation);
	return confirmation;
}