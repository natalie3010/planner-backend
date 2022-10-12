import AWS from 'aws-sdk'
import { awsConfig } from '../awsConfig'

AWS.config.update(awsConfig)

const docClient = new AWS.DynamoDB.DocumentClient()

export const demandDB = {
  getAll: async () => {
    const params = {
      TableName: 'Demand',
    }

    const data = await docClient.scan(params).promise()
    return data.Items
  },
  getOne: async (selectedSkillsID) => {},
  create: async (demand) => {
    const params = {
      TableName: 'Demand',
      Item: {
        ClientID: demand.clientID,
        CodeRequisition: demand.codeRequisition,
        StartDate: demand.startDate,
        OriginatorName: demand.originatorName,
        SkillsID: demand.skillsID,
        Probability: demand.probability,
        Grade: demand.grade,
        SelectedApplicant: demand.selectedApplicant,
        Status: demand.status,
        Notes: demand.notes,
        ProposedApplicant: demand.proposedApplicant,
        CreationDate: demand.creationDate,
        Location: demand.location,
      },
    }
    const result = await docClient.put(params).promise()
    return params
  },
  update: async (DemandID, demand) => {
    const params = {
      TableName: 'Demand',
      Key: {
        DemandID,
      },
      UpdateExpression:
        'set #ClientID=:ClientID, #CodeRequisition=:CodeRequisition, #StartDate=:StartDate, #OriginatorName=:OriginatorName, #SkillsID=:SkillsID, #Probability=:Probability, #Grade=:Grade, #SelectedApplicant=:SelectedApplicant, #Status=:Status, #Notes=:Notes, #ProposedApplicant=:ProposedApplicant, #CreationDate=:CreationDate, #Location=:Location',
      ExpressionAttributeNames: {
        '#ClientID': 'ClientID',
        '#CodeRequisition': 'CodeRequisition',
        '#StartDate': 'StartDate',
        '#OriginatorName': 'OriginatorName',
        '#SkillsID': 'SkillsID',
        '#Probability': 'Probability',
        '#Grade': 'Grade',
        '#SelectedApplicant': 'SelectedApplicant',
        '#Status': 'Status',
        '#Notes': 'Notes',
        '#ProposedApplicant': 'ProposedApplicant',
        '#CreationDate': 'CreationDate',
        '#Location': 'Location',
      },
      ExpressionAttributeValues: {
        ':ClientID': demand.clientID,
        ':CodeRequisition': demand.codeRequisition,
        ':StartDate': demand.startDate,
        ':OriginatorName': demand.originatorName,
        ':SkillsID': demand.skillsID,
        ':Probability': demand.probability,
        ':Grade': demand.grade,
        ':SelectedApplicant': demand.selectedApplicant,
        ':Status': demand.status,
        ':Notes': demand.notes,
        ':ProposedApplicant': demand.proposedApplicant,
        ':CreationDate': demand.creationDate,
        ':Location': demand.location,
      },
      ReturnValues: 'UPDATED_NEW',
    }
    const result = await docClient.update(params).promise()
    return result
  },
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
