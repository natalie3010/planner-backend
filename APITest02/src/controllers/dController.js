import sqlite3 from 'better-sqlite3';

const db = new sqlite3("./Workforce_Planning_02.db", {fileMustExist: true});

const SQL_QUERY_GET_DEMAND_BY_SKILLS = `SELECT * FROM 'Demand', 'Skills' WHERE Skills.SkillsID=Demand.SkillsID AND Skills.SkillName=?`;
const SQL_QUERY_GET_DEMAND_BY_ID = `SELECT * FROM 'Demand' WHERE DemandID=?`;
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

export const getDemandData = (req, res) => {
    let data = db.prepare(SQL_QUERY_GET_DEMAND_BY_SKILLS).all(req.selectedSkills);
    console.log(data);
	return data;
}

export const getDemandByID = (selectedSkillsID) => {
    let data = db.prepare(SQL_QUERY_GET_DEMAND_BY_ID).get(selectedSkillsID);
    console.log(data);
	return data;
}

export const deleteDemandByID = (demandID) => {
    let data = db.prepare(SQL_QUERY_DELETE_DEMAND_BY_ID).run(demandID);
    console.log(data);
	return data;
}

export const addNewDemand = (demand) => {
    let data = db.prepare(SQL_QUERY_ADD_NEW_DEMAND).run(demand.codeRequisition, demand.startDate, demand.clientID, demand.originatorName, demand.skillsID, demand.probability, demand.grade, demand.selectedApplicant, demand.status, demand.notes, demand.proposedApplicant, demand.creationDate, demand.location);
    console.log(data);
	return data;
}

export const updateExistingDemand = (demand, demandID) => {
    let data = db.prepare(SQL_QUERY_UPDATE_DEMAND).run(demand.codeRequisition, demand.startDate, demand.clientID, demand.originatorName, demand.skillsID, demand.probability, demand.grade, demand.selectedApplicant, demand.status, demand.notes, demand.proposedApplicant, demand.creationDate, demand.location, demandID);
    console.log(data);
	return data;
}