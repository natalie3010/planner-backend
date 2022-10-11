import AWS from 'aws-sdk'
import { awsConfig } from '../awsConfig'

AWS.config.update(awsConfig)

const docClient = new AWS.DynamoDB.DocumentClient()

export const userDB = {
  getOne: async (username) => {
    const data = {
      UserId: 1,
      Password: 'cGFzc3dvcmQ=',
      Role: 'admin',
      Username: 'user',
    }
    return data
  },
  create: async (username, password, role) => {
    const params = {
      TableName: 'User',
      Item: {
        username,
        password,
        role,
      },
    }
    const result = await docClient.put(params).promise()
    return result
  },
}
