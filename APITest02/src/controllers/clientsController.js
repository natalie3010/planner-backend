import sqlite3 from 'better-sqlite3';

const db = new sqlite3("/mnt/sqlite-volume/Workforce_Planning_02.db", {fileMustExist: false});

const SQL_QUERY_SELECT_ALL_CLIENTS = `select * from 'Clients'`;
const SQL_QUERY_DELETE_CLIENT_BY_ID = `DELETE FROM 'Clients' WHERE ClientID=?`;
const SQL_QUERY_INSERT_NEW_CLIENT = `INSERT INTO Clients(ClientID, ClientName) VALUES (?, ?)`;
const SQL_QUERY_UPDATE_CLIENT_BY_ID = `
UPDATE Clients 
SET 
    ClientName = ?
WHERE
    ClientID = ?
`;

export const getClientsData = () => {
    let data = db.prepare(SQL_QUERY_SELECT_ALL_CLIENTS).all();
    console.log(data);
	return data;
}

export const removeClientByID = (clientID) => {
    let confirmation = db.prepare(SQL_QUERY_DELETE_CLIENT_BY_ID).run(clientID);
    console.log(confirmation);
	return confirmation;
}

export const addNewClient = (client) => {
    console.log(client);
    let data = db.prepare(SQL_QUERY_INSERT_NEW_CLIENT).run(client.ClientID, client.ClientName);
    console.log(data);
	return data;
}

export const updateExistingClient = (client, clientID) => {
    let data = db.prepare(SQL_QUERY_UPDATE_CLIENT_BY_ID).run(client.ClientName, clientID);
    console.log(data);
	return data;
}
