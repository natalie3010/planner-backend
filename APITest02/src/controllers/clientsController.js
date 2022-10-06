// import { docClient } from "../../dynamoDBconfig";

import AWS from "aws-sdk";
import { awsConfig } from "../awsConfig";

AWS.config.update(awsConfig);

const docClient = new AWS.DynamoDB.DocumentClient();

// const SQL_QUERY_SELECT_ALL_CLIENTS = `select * from 'Clients'`;
// const SQL_QUERY_DELETE_CLIENT_BY_ID = `DELETE FROM 'Clients' WHERE ClientID=?`;
// const SQL_QUERY_INSERT_NEW_CLIENT = `INSERT INTO Clients(ClientID, ClientName) VALUES (?, ?)`;
// const SQL_QUERY_UPDATE_CLIENT_BY_ID = `
// UPDATE Clients
// SET
//     ClientName = ?
// WHERE
//     ClientID = ?
// `;

export const getClientsData = async () => {
  const params = {
    TableName: "Client",
  };

  const data = await docClient.scan(params).promise();
  return data.Items;
};

export const removeClientByID = (clientID) => {
  //   let confirmation = db.prepare(SQL_QUERY_DELETE_CLIENT_BY_ID).run(clientID);
  let confirmation = "confirmation";
  console.log(confirmation);
  return confirmation;
};

export const addNewClient = (client) => {
  console.log(client);
  //   let data = db
  //     .prepare(SQL_QUERY_INSERT_NEW_CLIENT)
  //     .run(client.ClientID, client.ClientName);
  return client;
};

export const updateExistingClient = (client, clientID) => {
  //   let data = db
  //     .prepare(SQL_QUERY_UPDATE_CLIENT_BY_ID)
  //     .run(client.ClientName, clientID);
  return client;
};
