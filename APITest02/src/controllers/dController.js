import { demandData } from "../data";
import AWS from "aws-sdk";
import { awsConfig } from "../awsConfig";

AWS.config.update(awsConfig);

const docClient = new AWS.DynamoDB.DocumentClient();

const SQL_QUERY_GET_DEMAND_BY_SKILLS = `SELECT * FROM 'Demand', 'Skills', 'Clients' WHERE Skills.SkillsID=Demand.SkillsID AND Clients.ClientID=Demand.ClientID AND Skills.SkillName LIKE ?`;
const SQL_QUERY_GET_DEMAND_BY_ID = `SELECT * FROM 'Demand', 'Clients' WHERE Clients.ClientID=Demand.ClientID AND DemandID=?`;
const SQL_QUERY_DELETE_DEMAND_BY_ID = `DELETE FROM 'Demand' WHERE DemandID=?`;
const SQL_QUERY_ADD_NEW_DEMAND = `INSERT INTO Demand(CodeRequisition, StartDate, ClientID, OriginatorName, SkillsID, Probability, Grade, SelectedApplicant, Status, Notes, ProposedApplicant, CreationDate, Location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
const SQL_QUERY_UPDATE_DEMAND = `
    UPDATE Demand 
    SET 
        CodeRequisition = ?, 
        StartDate = ?, 
        ClientID = ?, 
        OriginatorName = ?, 
        SkillsID = ?, 
        Probability = ?, 
        Grade = ?, 
        SelectedApplicant = ?, 
        Status = ?,
        Notes = ?, 
        ProposedApplicant = ?, 
        CreationDate = ?,
        Location = ?
    WHERE
        DemandID = ?
    `;

export const deleteDemandByID = (demandID) => {
  // let response = db.prepare(SQL_QUERY_DELETE_DEMAND_BY_ID).run(demandID);
  // console.log(data);
  // return response.changes === 1;
  return;
};

export const getDemandDataV2 = async (selectedSkills) => {
  const params = {
    TableName: "Demand",
  };

  const data = await docClient.scan(params).promise();
  return data.Items;
  // let rowDemands = db
  //   .prepare(SQL_QUERY_GET_DEMAND_BY_SKILLS)
  //   .all(selectedSkills || "%");
  // let demands = [];
  // const data = demandData;
  return data;
};

export const getDemandByIDV2 = (selectedSkillsID) => {
  // let rowDemand = db.prepare(SQL_QUERY_GET_DEMAND_BY_ID).get(selectedSkillsID);
  // let demand = DemandMapper.mapToDemand(rowDemand);
  // console.log("getDemandByIDV2", demand);
  // return demand;
  return;
};

export const addNewDemandV2 = (demand) => {
  console.log(demand);
  // let response = db
  //   .prepare(SQL_QUERY_ADD_NEW_DEMAND)
  //   .run(
  //     demand.demandCodeRequisition,
  //     demand.demandStartDate,
  //     demand.demandClientID,
  //     demand.demandOriginatorName,
  //     demand.demandSkills,
  //     demand.demandProbability,
  //     demand.demandGrade,
  //     demand.demandSelectedApplicant,
  //     demand.demandStatus,
  //     demand.demandNotes,
  //     demand.demandProposedApplicant,
  //     demand.demandCreationDate,
  //     demand.demandLocation
  //   );
  // return response.lastInsertRowid || -1;
  return;
};

export const updateExistingDemandV2 = (demand, demandID) => {
  // let response = db
  //   .prepare(SQL_QUERY_UPDATE_DEMAND)
  //   .run(
  //     demand.demandCodeRequisition,
  //     demand.demandStartDate,
  //     demand.demandClientID,
  //     demand.demandOriginatorName,
  //     demand.demandSkills,
  //     demand.demandProbability,
  //     demand.demandGrade,
  //     demand.demandSelectedApplicant,
  //     demand.demandStatus,
  //     demand.demandNotes,
  //     demand.demandProposedApplicant,
  //     demand.demandCreationDate,
  //     demand.demandLocation,
  //     demandID
  //   );
  // console.log(response);
  // return response.changes >= 1;
  return;
};
