import AWS from 'aws-sdk'
import { awsConfig } from '../awsConfig'

AWS.config.update(awsConfig)

const docClient = new AWS.DynamoDB.DocumentClient()

// (ApplicantFirstName, ApplicantLastName, SkillsID, ApplicantStatus, Notes, ApplicantType, Location) applicantID

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
  create: async (supply) => {},
  update: async (applicantID, supply) => {},
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
