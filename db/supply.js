import AWS from 'aws-sdk'
import { awsConfig } from '../awsConfig'

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
    const {
      id,
      applicantFirstName,
      applicantLastName,
      skillsID,
      applicantStatus,
      notes,
      applicantType,
      location,
    } = supply
    const params = {
      TableName: 'supply',
      Item: {
        id,
        applicantFirstName,
        applicantLastName,
        skillsID,
        applicantStatus,
        notes,
        applicantType,
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
        'set #applicantFirstName=:applicantFirstName, #applicantLastName=:applicantLastName, #skillID=:skillID, #applicantStatus=:applicantStatus, #notes=:notes, #applicantType=:applicantType, #location=:location',
      ExpressionAttributeNames: {
        '#applicantFirstName': 'applicantFirstName',
        '#applicantLastName': 'applicantLastName',
        '#skillID': 'skillID',
        '#applicantStatus': 'applicantStatus',
        '#notes': 'notes',
        '#applicantType': 'applicantType',
        '#location': 'location',
      },
      ExpressionAttributeValues: {
        ':applicantFirstName': supply.applicantFirstName,
        ':applicantLastName': supply.applicantLastName,
        ':skillID': supply.skillID,
        ':applicantStatus': supply.applicantStatus,
        ':notes': supply.notes,
        ':applicantType': supply.applicantType,
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
