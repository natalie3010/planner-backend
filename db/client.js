import AWS from 'aws-sdk'
import { awsConfig } from '../awsConfig'

AWS.config.update(awsConfig)

const docClient = new AWS.DynamoDB.DocumentClient()

export const clientDB = {
  getAll: async () => {
    const params = {
      TableName: 'client',
    }
    const data = await docClient.scan(params).promise()
    return data.Items
  },
  getOne: async (id) => {
    const params = {
      TableName: 'client',
      Key: {
        id,
      },
    }
    const data = await docClient.get(params).promise()
    return data.Item
  },
  create: async (client) => {
    const { id, name } = client
    const params = {
      TableName: 'client',
      Item: {
        id,
        name,
      },
    }
    const result = await docClient.put(params).promise()
    return result
  },
  update: async (id, client) => {
    const params = {
      TableName: 'client',
      Key: {
        id,
      },
      UpdateExpression: 'set #name=:name',
      ExpressionAttributeNames: {
        '#name': 'name',
      },
      ExpressionAttributeValues: {
        ':name': client.name,
      },
      ReturnValues: 'UPDATED_NEW',
    }
    const result = await docClient.update(params).promise()
    return result
  },
  remove: async (id) => {
    const params = {
      TableName: 'client',
      Key: {
        id,
      },
    }
    const result = await docClient.delete(params).promise()
    return result
  },
}
