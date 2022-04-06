import sqlite3 from 'better-sqlite3';

const db = new sqlite3("../Workforce_Planning_02.db", {fileMustExist: true});

const sql_query = 

`select demand_sq.'skill_name', demand_sq.'demand_count', supply_sq.'supply_count'
from
	(select Skills.SkillName as 'skill_name', count(Demand.SkillsID) as 'demand_count'
	from Skills left join Demand 
	on Skills.SkillsID = Demand.SkillsID
	group by Skills.SkillName) demand_sq,
	(select Skills.SkillName as 'skill_name', count(Supply.SkillsID) as 'supply_count'
	from Skills left outer join Supply
	on Skills.SkillsID = Supply.SkillsID
	group by Skills.SkillName) supply_sq
where demand_sq.'skill_name' = supply_sq.'skill_name'`;

export const getSupplyDemandData = (req, res) => {
    let data = db.prepare(sql_query).all();
    console.log(data);
	return data;
}