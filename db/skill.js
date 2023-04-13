import AWS from 'aws-sdk'
import { awsConfig } from '../config/aws'

AWS.config.update(awsConfig)

const docClient = new AWS.DynamoDB.DocumentClient()

export const skillDB = {
  getAll: async () => {
    const params = {
      TableName: 'skill',
    }
    const data = await docClient.scan(params).promise()
    return data.Items
  },
  getOne: async (id) => {
    const params = {
      TableName: 'skill',
      Key: {
        id,
      },
    }
    const data = await docClient.get(params).promise()
    return data.Item
  },
  create: async (skill) => {
    const { id, name, priority } = skill
    const params = {
      TableName: 'skill',
      Item: {
        id,
        name,
        priority,
      },
    }
    const result = await docClient.put(params).promise()
    return result
  },
  update: async (id, skill) => {
    const params = {
      TableName: 'skill',
      Key: {
        id,
      },
      UpdateExpression: 'set #name=:name, #priority=:priority',
      ExpressionAttributeNames: {
        '#name': 'name',
        '#priority': 'priority',
      },
      ExpressionAttributeValues: {
        ':name': skill.name,
        ':priority': skill.priority,
      },
      ReturnValues: 'UPDATED_NEW',
    }
    const result = await docClient.update(params).promise()
    return result
  },
  remove: async (id) => {
    const params = {
      TableName: 'skill',
      Key: {
        id,
      },
      ReturnValues: 'ALL_OLD',
    }
    const result = await docClient.delete(params).promise()
    return result
  },
}
