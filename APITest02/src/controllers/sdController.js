import sqlite3 from 'better-sqlite3';

const db = new sqlite3("../Workforce_Planning_01.db", {fileMustExist: true});

const sql_query = 

`select * from 'Clients'`;

// `select demand_sq.'Skill Name', demand_sq.'Skill Demand', supply_sq.'Supply of Skill'
// from 
// (	
// 	select s.'Skill Name' as 'Skill Name', count(s.'Skill Name') as 'Skill Demand'
// 	from 'Demand' d, 'Clients-Skills' cs, 'Skills' s
// 	where d.'Client-Skill ID' = cs.'Client-Skill ID'
// 	and cs.'Skill ID' = s.'Skill ID'
// 	group by s.'Skill Name'
// ) as demand_sq,
// (
// 	select s.'Skill Name', count(cs.'Skill ID') as 'Supply of Skill'
// 	from 'Clients-Skills' cs, 'Clients' c, 'Skills' s
// 	where cs.'Client ID' = c.'Client ID'
// 	and s.'Skill ID' = cs.'Skill ID'
// 	group by s.'Skill Name'
// ) as supply_sq
// where demand_sq.'Skill Name' = supply_sq.'Skill Name'`;

// const data = db.prepare(sql_query).all();

export const getSupplyDemandData = (req, res) => {
    let data = db.prepare(sql_query).all();
    console.log(data);
	return data;
}