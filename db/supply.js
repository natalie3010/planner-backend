import AWS from 'aws-sdk'
import { awsConfig } from '../awsConfig'

AWS.config.update(awsConfig)

const docClient = new AWS.DynamoDB.DocumentClient()

export const supplyDB = {
  getAll: async () => {
    const params = {
      TableName: 'Supply',
    }

    const data = await docClient.scan(params).promise()
    return data.Items
  },
  getOne: async (applicantID) => {},
  getOneBySkill: async (selectedSkillsID) => {},
  create: async (supply) => {
    const params = {
      TableName: 'Supply',
      Item: {
        ApplicantFirstName: supply.applicantFirstName,
        ApplicantLastName: supply.applicantLastName,
        SkillsID: supply.skillsID,
        ApplicantStatus: supply.applicantStatus,
        Notes: supply.notes,
        ApplicantType: supply.applicantType,
        Location: supply.location,
      },
    }
    const result = await docClient.put(params).promise()
    return params
  },
  update: async (SupplyID, supply) => {
    const params = {
      TableName: 'Supply',
      Key: {
        SupplyID,
      },
      UpdateExpression:
        'set #ApplicantFirstName=:ApplicantFirstName, #ApplicantLastName=:ApplicantLastName, #SkillsID=:SkillsID, #ApplicantStatus=:ApplicantStatus, #Notes=:Notes, #ApplicantType=:ApplicantType, #Location=:Location',
      ExpressionAttributeNames: {
        '#ApplicantFirstName': 'ApplicantFirstName',
        '#ApplicantLastName': 'ApplicantLastName',
        '#SkillsID': 'SkillsID',
        '#ApplicantStatus': 'ApplicantStatus',
        '#Notes': 'Notes',
        '#ApplicantType': 'ApplicantType',
        '#Location': 'Location',
      },
      ExpressionAttributeValues: {
        ':ApplicantFirstName': supply.applicantFirstName,
        ':ApplicantLastName': supply.applicantLastName,
        ':SkillsID': supply.skillsID,
        ':ApplicantStatus': supply.applicantStatus,
        ':Notes': supply.notes,
        ':ApplicantType': supply.applicantType,
        ':Location': supply.location,
      },
      ReturnValues: 'UPDATED_NEW',
    }
    const result = await docClient.update(params).promise()
    return result
  },
  remove: async (SupplyID) => {
    const params = {
      TableName: 'Supply',
      Key: {
        SupplyID,
      },
    }
    const result = await docClient.delete(params).promise()
    return result
  },
}
