import { supplyData } from "../data";
import { SupplyMapper } from "../helpers/mappers/supplyMapper";
import AWS from "aws-sdk";
import { awsConfig } from "../awsConfig";

AWS.config.update(awsConfig);

const docClient = new AWS.DynamoDB.DocumentClient();

const SQL_QUERY_GET_SUPPLY_BY_SKILLS = `SELECT * FROM 'Supply', 'Skills' WHERE Skills.SkillsID=Supply.SkillsID AND Skills.SkillName LIKE ?`;
const SQL_QUERY_GET_SUPPLY_BY_ID = `SELECT * FROM 'Supply' WHERE ApplicantID=?`;
const SQL_QUERY_DELETE_SUPPLY_BY_ID = `DELETE FROM 'Supply' WHERE ApplicantID=?`;
const SQL_QUERY_ADD_NEW_SUPPLY = `INSERT INTO Supply(ApplicantFirstName, ApplicantLastName, SkillsID, ApplicantStatus, Notes, ApplicantType, Location) VALUES (?, ?, ?, ?, ?, ?, ?)`;
const SQL_QUERY_UPDATE_SUPPLY = `
    UPDATE Supply 
    SET 
        ApplicantFirstName = ?,
        ApplicantLastName = ?,
        SkillsID = ?,
        ApplicantStatus = ?,
        Notes = ?,
        ApplicantType = ?,
        Location = ?
    WHERE
        ApplicantID = ?
    `;

export const deleteSupplyByID = (supplyID) => {
  // let response = db.prepare(SQL_QUERY_DELETE_SUPPLY_BY_ID).run(supplyID);
  // console.log(response);
  // return response.changes === 1;
  return;
};

//V2 versions of the controller with the new model, the V1 will be comissioned whenever the switch is done on react app
export const getSupplyDataV2 = async (selectedSkills) => {
  const params = {
    TableName: "Supply",
  };

  const data = await docClient.scan(params).promise();
  // console.log(data.Items);
  // console.log(supplyData);
  return data.Items;
  // let rowSupplies = db
  //   .prepare(SQL_QUERY_GET_SUPPLY_BY_SKILLS)
  //   .all(selectedSkills || "%");
  // console.log(rowSupplies);
  // const supplies = [];
  // rowSupplies.forEach((rowSupply) => {
  //   supplies.push(SupplyMapper.mapToSupply(rowSupply));
  // });
  // console.log(supplies);
  // return supplies;
  // const data = supplyData;
  // return data;
};

export const getSupplyByIDV2 = (selectedSkillsID) => {
  // let rowSupply = db.prepare(SQL_QUERY_GET_SUPPLY_BY_ID).get(selectedSkillsID);
  // console.log(rowSupply);
  // return SupplyMapper.mapToSupply(rowSupply);
  return;
};

export const addNewSupplyV2 = (supply) => {
  // let response = db
  //   .prepare(SQL_QUERY_ADD_NEW_SUPPLY)
  //   .run(
  //     supply.applicantFirstName,
  //     supply.applicantLastName,
  //     supply.applicantSkills,
  //     supply.applicantStatus,
  //     supply.applicantNotes,
  //     supply.applicantType,
  //     supply.applicantLocation
  //   );
  // return response.lastInsertRowid || -1;
  return;
};

export const updateExistingSupplyV2 = (supply, applicantID) => {
  // let response = db
  //   .prepare(SQL_QUERY_UPDATE_SUPPLY)
  //   .run(
  //     supply.applicantFirstName,
  //     supply.applicantLastName,
  //     supply.applicantSkills,
  //     supply.applicantStatus,
  //     supply.applicantNotes,
  //     supply.applicantType,
  //     supply.applicantLocation,
  //     applicantID
  //   );
  // console.log(response);
  // return response.changes >= 1;
  return;
};
