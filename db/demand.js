import AWS from 'aws-sdk'
import { awsConfig } from '../awsConfig'

AWS.config.update(awsConfig)

const docClient = new AWS.DynamoDB.DocumentClient()

// (CodeRequisition, StartDate, ClientID, OriginatorName, SkillsID, Probability, Grade, SelectedApplicant, Status, Notes, ProposedApplicant, CreationDate, Location)

export const demandDB = {
  getAll: async () => {
    const params = {
      TableName: 'Demand',
    }

    const data = await docClient.scan(params).promise()
    return data.Items
  },
  getOne: async (selectedSkillsID) => {},
  create: async (demand) => {},
  update: async (demandID, demand) => {},
  remove: async (DemandID) => {
    const params = {
      TableName: 'Demand',
      Key: {
        DemandID,
      },
    }
    const result = await docClient.delete(params).promise()
    return result
  },
}
