import AWS from 'aws-sdk'
import { awsConfig } from '../awsConfig'

AWS.config.update(awsConfig)

const docClient = new AWS.DynamoDB.DocumentClient()

export const skillDB = {
  getAll: async () => {
    const params = {
      TableName: 'Skill',
    }

    const data = await docClient.scan(params).promise()
    return data.Items
  },
}
