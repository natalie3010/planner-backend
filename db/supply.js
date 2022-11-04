import AWS from 'aws-sdk'
import { awsConfig } from '../config/aws'

AWS.config.update(awsConfig)

const docClient = new AWS.DynamoDB.DocumentClient()

export const supplyDB = {
  getAll: async () => {
    const params = {
      TableName: 'supply',
    }
    const data = await docClient.scan(params).promise()
    return data.Items
  },
  getOne: async (id) => {
    const params = {
      TableName: 'supply',
      Key: {
        id,
      },
    }
    const data = await docClient.get(params).promise()
    return data.Item
  },
  getAllBySkill: async (id) => {
    const params = {
      TableName: 'supply',
      IndexName: 'skillID-id-index',
      KeyConditionExpression: '#skillID = :skillID',
      ExpressionAttributeNames: {
        '#skillID': 'skillID',
      },
      ExpressionAttributeValues: {
        ':skillID': id,
      },
    }
    const data = await docClient.query(params).promise()
    return data.Items
  },
  create: async (supply) => {
    const { id, firstName, lastName, skillID, status, notes, type, location } =
      supply
    const params = {
      TableName: 'supply',
      Item: {
        id,
        firstName,
        lastName,
        skillID,
        status,
        notes,
        type,
        location,
      },
    }
    const result = await docClient.put(params).promise()
    return result
  },
  update: async (id, supply) => {
    const params = {
      TableName: 'supply',
      Key: {
        id,
      },
      UpdateExpression:
        'set #firstName=:firstName, #lastName=:lastName, #skillID=:skillID, #status=:status, #notes=:notes, #type=:type, #location=:location',
      ExpressionAttributeNames: {
        '#firstName': 'firstName',
        '#lastName': 'lastName',
        '#skillID': 'skillID',
        '#status': 'status',
        '#notes': 'notes',
        '#type': 'type',
        '#location': 'location',
      },
      ExpressionAttributeValues: {
        ':firstName': supply.firstName,
        ':lastName': supply.lastName,
        ':skillID': supply.skillID,
        ':status': supply.status,
        ':notes': supply.notes,
        ':type': supply.type,
        ':location': supply.location,
      },
      ReturnValues: 'UPDATED_NEW',
    }
    const result = await docClient.update(params).promise()
    return result
  },
  remove: async (id) => {
    const params = {
      TableName: 'supply',
      Key: {
        id,
      },
      ReturnValues: 'ALL_OLD',
    }
    const result = await docClient.delete(params).promise()
    return result
  },
}
