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
      key: {
        id,
      },
    }
    const data = await docClient.get(params).promise()
    return data
  },
  create: async (supply) => {
    const {
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
        'set #applicantFirstName=:applicantFirstName, #applicantLastName=:applicantLastName, #skillsID=:skillsID, #applicantStatus=:applicantStatus, #notes=:notes, #applicantType=:applicantType, #location=:location',
      ExpressionAttributeNames: {
        '#applicantFirstName': 'applicantFirstName',
        '#applicantLastName': 'applicantLastName',
        '#skillsID': 'skillsID',
        '#applicantStatus': 'applicantStatus',
        '#notes': 'notes',
        '#applicantType': 'applicantType',
        '#location': 'location',
      },
      ExpressionAttributeValues: {
        ':applicantFirstName': supply.applicantFirstName,
        ':applicantLastName': supply.applicantLastName,
        ':skillsID': supply.skillsID,
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
    }
    const result = await docClient.delete(params).promise()
    return result
  },
}
