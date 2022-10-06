import { skillsData } from "../data";
import AWS from "aws-sdk";
import { awsConfig } from "../awsConfig";

AWS.config.update(awsConfig);

const docClient = new AWS.DynamoDB.DocumentClient();

export const getSkillsData = async () => {
  const params = {
    TableName: "Skill",
  };

  const data = await docClient.scan(params).promise();
  return data.Items;
  // const data = skillsData;
  // return data;
};
