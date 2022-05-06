import sqlite3 from 'better-sqlite3';

const db = new sqlite3("./Workforce_Planning_02.db", {fileMustExist: true});

const sql_query = 

`select * from 'Demand', 'Skills' WHERE Skills.SkillsID=Demand.SkillsID AND Skills.SkillName=?`;

export const getDemandData = (req, res) => {
    let data = db.prepare(sql_query).all(req.selectedSkills);
    console.log(data);
	return data;
}