import sqlite3 from 'better-sqlite3';

const db = new sqlite3("./Workforce_Planning_02.db", {fileMustExist: true});

const SQL_QUERY_GET_SUPPLY_BY_SKILLS = `SELECT * FROM 'Supply', 'Skills' WHERE Skills.SkillsID=Supply.SkillsID AND Skills.SkillName=?`;
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

export const getSupplyData = (selectedSkills) => {
    let data = db.prepare(SQL_QUERY_GET_SUPPLY_BY_SKILLS).all(selectedSkills);
    console.log(data);
	return data;
}

export const getSupplyByID = (selectedSkillsID) => {
    let data = db.prepare(SQL_QUERY_GET_SUPPLY_BY_ID).get(selectedSkillsID);
    console.log(data);
	return data;
}

export const deleteSupplyByID = (supplyID) => {
    console.log(supplyID);
    let data = db.prepare(SQL_QUERY_DELETE_SUPPLY_BY_ID).run(supplyID);
    console.log(data);
	return data;
}

export const addNewSupply = (supply) => {
    console.log(supply);
    let data = db.prepare(SQL_QUERY_ADD_NEW_SUPPLY).run(supply.applicantFirstName, supply.applicantLastName, supply.skillsID, supply.applicantStatus, supply.notes, supply.applicantType, supply.location);
    console.log(data);
	return data;
}

export const updateExistingSupply = (supply, applicantID) => {
    let data = db.prepare(SQL_QUERY_UPDATE_SUPPLY).run(supply.applicantFirstName, supply.applicantLastName, supply.skillsID, supply.applicantStatus, supply.notes, supply.applicantType, supply.location, applicantID);
    console.log(data);
	return data;
}