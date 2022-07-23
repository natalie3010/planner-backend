import sqlite3 from 'better-sqlite3';

const db = new sqlite3("/mnt/sqlite-volume/Workforce_Planning_02.db", {fileMustExist: false});

const sql_query = 

`SELECT demand_sq.'skill_name', demand_sq.'demand_count', supply_sq.'supply_count'
	FROM
		(SELECT Skills.SkillName as 'skill_name', count(Demand.SkillsID) as 'demand_count'
		FROM Skills LEFT JOIN Demand 
		ON Skills.SkillsID = Demand.SkillsID  AND Demand.Status NOT IN ('Resource Identified', 'Demand Validation')
		GROUP BY Skills.SkillName) demand_sq,
		(SELECT Skills.SkillName as 'skill_name', count(Supply.SkillsID) as 'supply_count'
		FROM Skills LEFT OUTER JOIN Supply
		ON Skills.SkillsID = Supply.SkillsID AND Supply.ApplicantStatus NOT IN ('Rejected', 'Offered')
		group by Skills.SkillName) supply_sq
	WHERE demand_sq.'skill_name' = supply_sq.'skill_name'`;

export const getSupplyDemandData = (req, res) => {
    let data = db.prepare(sql_query).all();
    console.log(data);
	return data;
}
