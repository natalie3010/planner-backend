import sqlite3 from 'better-sqlite3';

const db = new sqlite3("/mnt/sqlite-volume/Workforce_Planning_02.db", {fileMustExist: false});

const sql_query = 

`select * from 'Skills'`;

export const getSkillsData = () => {
    let data = db.prepare(sql_query).all();
    console.log(data);
	return data;
}
