import AWS from 'aws-sdk'
import { awsConfig } from '../awsConfig'

AWS.config.update(awsConfig)

const docClient = new AWS.DynamoDB.DocumentClient()

export const demandDB = {
  getAll: async () => {
    const params = {
      TableName: 'demand',
    }

    const data = await docClient.scan(params).promise()
    return data.Items
  },
  getOne: async (id) => {
    const params = {
      TableName: 'demand',
      Key: {
        id,
      },
    }
    const data = await docClient.get(params).promise()
    return data.Item
  },
  getAllBySkill: async (id) => {
    const params = {
      TableName: 'demand',
      IndexName: 'skillID-creationDate-index',
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
  create: async (demand) => {
    const {
      id,
      codeRequisition,
      startDate,
      originatorName,
      skillID,
      probability,
      grade,
      selectedApplicant,
      status,
      notes,
      proposedApplicant,
      creationDate,
      location,
    } = demand
    const params = {
      TableName: 'demand',
      Item: {
        id,
        codeRequisition,
        startDate,
        originatorName,
        skillID,
        probability,
        grade,
        selectedApplicant,
        status,
        notes,
        proposedApplicant,
        creationDate,
        location,
      },
    }
    const result = await docClient.put(params).promise()
    return result
  },
  update: async (id, demand) => {
    const params = {
      TableName: 'demand',
      Key: {
        id,
      },
      UpdateExpression:
        'set #codeRequisition=:codeRequisition, #startDate=:startDate, #originatorName=:originatorName, #skillID=:skillID, #probability=:probability, #grade=:grade, #selectedApplicant=:selectedApplicant, #status=:status, #notes=:notes, #proposedApplicant=:proposedApplicant, #creationDate=:creationDate, #location=:location',
      ExpressionAttributeNames: {
        '#codeRequisition': 'codeRequisition',
        '#startDate': 'startDate',
        '#originatorName': 'originatorName',
        '#skillID': 'skillID',
        '#probability': 'probability',
        '#grade': 'grade',
        '#selectedApplicant': 'selectedApplicant',
        '#status': 'status',
        '#notes': 'notes',
        '#proposedApplicant': 'proposedApplicant',
        '#creationDate': 'creationDate',
        '#location': 'location',
      },
      ExpressionAttributeValues: {
        ':codeRequisition': demand.codeRequisition,
        ':startDate': demand.startDate,
        ':originatorName': demand.originatorName,
        ':skillID': demand.skillID,
        ':probability': demand.probability,
        ':grade': demand.grade,
        ':selectedApplicant': demand.selectedApplicant,
        ':status': demand.status,
        ':notes': demand.notes,
        ':proposedApplicant': demand.proposedApplicant,
        ':creationDate': demand.creationDate,
        ':location': demand.location,
      },
      ReturnValues: 'UPDATED_NEW',
    }
    const result = await docClient.update(params).promise()
    return result
  },
  remove: async (id) => {
    const params = {
      TableName: 'demand',
      Key: {
        id,
      },
      ReturnValues: 'ALL_OLD',
    }
    const result = await docClient.delete(params).promise()
    return result
  },
}
