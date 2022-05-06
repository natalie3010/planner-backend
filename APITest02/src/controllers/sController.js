import sqlite3 from 'better-sqlite3';

const db = new sqlite3("./Workforce_Planning_02.db", {fileMustExist: true});

const sql_query = 

`select * from 'Supply', 'Skills', 'Demand' WHERE Skills.SkillsID=Demand.SkillsID AND Skills.SkillName=? AND Demand.SelectedApplicantID=Supply.ApplicantID`;

export const getSupplyData = (req, res) => {
    let data = db.prepare(sql_query).all(req.selectedSkills);
    console.log(data);
	return data;
}