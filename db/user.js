import AWS from 'aws-sdk'
import { awsConfig } from '../config/awsConfig'

AWS.config.update(awsConfig)

const docClient = new AWS.DynamoDB.DocumentClient()

export const userDB = {
  getAll: async () => {
    const params = {
      TableName: 'user',
    }
    const data = await docClient.scan(params).promise()
    return data.Items
  },
  getOne: async (id) => {
    const params = {
      TableName: 'user',
      Key: {
        id,
      },
    }
    const data = await docClient.get(params).promise()
    return data.Item
  },
  create: async (user) => {
    const { id, userName, password, role } = user
    const params = {
      TableName: 'user',
      Item: {
        id,
        userName,
        password,
        role,
      },
    }
    const result = await docClient.put(params).promise()
    return result
  },
  update: async (id, user) => {
    const params = {
      TableName: 'user',
      Key: {
        id,
      },
      UpdateExpression:
        'set #userName=:userName, #password=:password, #role=:role',
      ExpressionAttributeNames: {
        '#userName': 'userName',
        '#password': 'password',
        '#role': 'role',
      },
      ExpressionAttributeValues: {
        ':userName': user.userName,
        ':password': user.password,
        ':role': user.role,
      },
      ReturnValues: 'UPDATED_NEW',
    }
    const result = await docClient.update(params).promise()
    return result
  },
  remove: async (id) => {
    const params = {
      TableName: 'user',
      Key: {
        id,
      },
      ReturnValues: 'ALL_OLD',
    }
    const result = await docClient.delete(params).promise()
    return result
  },
}
