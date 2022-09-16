import sqlite3 from "better-sqlite3";
import { DemandMapper } from "../helpers/mappers/demandMapper";

const db = new sqlite3("/mnt/sqlite-volume/Workforce_Planning_02.db", {
  fileMustExist: false,
});

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

export const getDemandData = (selectedSkills) => {
  let rowDemands = db
    .prepare(SQL_QUERY_GET_DEMAND_BY_SKILLS)
    .all(selectedSkills || "%");
  console.log(rowDemands);
  return rowDemands;
};

export const getDemandByID = (selectedSkillsID) => {
  let rowDemand = db.prepare(SQL_QUERY_GET_DEMAND_BY_ID).get(selectedSkillsID);
  console.log("getDemandByID", rowDemand);
  return rowDemand;
};

export const deleteDemandByID = (demandID) => {
  let response = db.prepare(SQL_QUERY_DELETE_DEMAND_BY_ID).run(demandID);
  console.log(data);
  return response.changes === 1;
};

export const addNewDemand = (demand) => {
  let data = db
    .prepare(SQL_QUERY_ADD_NEW_DEMAND)
    .run(
      demand.codeRequisition,
      demand.startDate,
      demand.clientID,
      demand.originatorName,
      demand.skillsID,
      demand.probability,
      demand.grade,
      demand.selectedApplicant,
      demand.status,
      demand.notes,
      demand.proposedApplicant,
      demand.creationDate,
      demand.location
    );
  console.log(data);
  return data;
};

export const updateExistingDemand = (demand, demandID) => {
  let data = db
    .prepare(SQL_QUERY_UPDATE_DEMAND)
    .run(
      demand.codeRequisition,
      demand.startDate,
      demand.clientID,
      demand.originatorName,
      demand.skillsID,
      demand.probability,
      demand.grade,
      demand.selectedApplicant,
      demand.status,
      demand.notes,
      demand.proposedApplicant,
      demand.creationDate,
      demand.location,
      demandID
    );
  console.log(data);
  return data;
};

//V2 versions of the controller with the new model, the V1 will be comissioned whenever the switch is done on react app
export const getDemandDataV2 = (selectedSkills) => {
  let rowDemands = db
    .prepare(SQL_QUERY_GET_DEMAND_BY_SKILLS)
    .all(selectedSkills || "%");
  let demands = [];
  rowDemands.forEach((rowDemand) => {
    demands.push(DemandMapper.mapToDemand(rowDemand));
  });
  console.log(demands);
  return demands;
};

export const getDemandDataV2ASC = (selectedSkills, columnName) => {
  columnName = columnName || "DemandID";
  let rowDemands = db
    .prepare(SQL_QUERY_GET_DEMAND_BY_SKILLS + `ORDER BY ${columnName} ASC`)
    .all(selectedSkills || "%");
  let demands = [];
  rowDemands.forEach((rowDemand) => {
    demands.push(DemandMapper.mapToDemand(rowDemand));
  });
  console.log(demands);
  return demands;
};

export const getDemandDataV2DESC = (selectedSkills, columnName) => {
  columnName = columnName || "DemandID";
  let rowDemands = db
    .prepare(SQL_QUERY_GET_DEMAND_BY_SKILLS + `ORDER BY ${columnName} DESC`)
    .all(selectedSkills || "%");
  let demands = [];
  rowDemands.forEach((rowDemand) => {
    demands.push(DemandMapper.mapToDemand(rowDemand));
  });
  console.log(demands);
  return demands;
};

export const getDemandByIDV2 = (selectedSkillsID) => {
  let rowDemand = db.prepare(SQL_QUERY_GET_DEMAND_BY_ID).get(selectedSkillsID);
  let demand = DemandMapper.mapToDemand(rowDemand);
  console.log("getDemandByIDV2", demand);
  return demand;
};

export const addNewDemandV2 = (demand) => {
  let response = db
    .prepare(SQL_QUERY_ADD_NEW_DEMAND)
    .run(
      demand.demandCodeRequisition,
      demand.demandStartDate,
      demand.demandClientID,
      demand.demandOriginatorName,
      demand.demandSkills,
      demand.demandProbability,
      demand.demandGrade,
      demand.demandSelectedApplicant,
      demand.demandStatus,
      demand.demandNotes,
      demand.demandProposedApplicant,
      demand.demandCreationDate,
      demand.demandLocation
    );
  return response.lastInsertRowid || -1;
};

export const updateExistingDemandV2 = (demand, demandID) => {
  let response = db
    .prepare(SQL_QUERY_UPDATE_DEMAND)
    .run(
      demand.demandCodeRequisition,
      demand.demandStartDate,
      demand.demandClientID,
      demand.demandOriginatorName,
      demand.demandSkills,
      demand.demandProbability,
      demand.demandGrade,
      demand.demandSelectedApplicant,
      demand.demandStatus,
      demand.demandNotes,
      demand.demandProposedApplicant,
      demand.demandCreationDate,
      demand.demandLocation,
      demandID
    );
  console.log(response);
  return response.changes >= 1;
};
