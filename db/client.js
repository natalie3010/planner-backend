import AWS from 'aws-sdk'
import { awsConfig } from '../awsConfig'

AWS.config.update(awsConfig)

const docClient = new AWS.DynamoDB.DocumentClient()

export const clientDB = {
  getAll: async () => {
    const params = {
      TableName: 'Client',
    }
    const data = await docClient.scan(params).promise()
    console.log(data)
    return data.Items
  },
  create: async (ClientID, ClientName) => {
    const params = {
      TableName: 'Client',
      Item: {
        ClientID,
        ClientName,
      },
    }
    const result = await docClient.put(params).promise()
    return params
  },
  update: async (ClientID, client) => {
    const params = {
      TableName: 'Client',
      Key: {
        ClientID,
      },
      UpdateExpression: 'set #ClientName=:ClientName',
      ExpressionAttributeNames: {
        '#ClientName': 'ClientName',
      },
      ExpressionAttributeValues: {
        ':ClientName': client.ClientName,
      },
      ReturnValues: 'UPDATED_NEW',
    }
    const result = await docClient.update(params).promise()
    return result
  },
  remove: async (ClientID) => {
    const params = {
      TableName: 'Client',
      Key: {
        ClientID,
      },
    }
    const result = await docClient.delete(params).promise()
    return result
  },
}
