import AWS from "aws-sdk";

const awsConfig = {
  region: "eu-west-2",
  endpoint: "dynamodb.eu-west-2.amazonaws.com",
  accessKeyId: "",
  secretAccessKey: "",
};

AWS.config.update(awsConfig);

export const docClient = new AWS.DynamoDB.DocumentClient();

// const params = {
//   TableName: "Clients",
// };

// export const getClients = async () => {
//   const data = await docClient.scan(params).promise();
//   console.log(data);
// };
