


SKILLS
"SkillsID"	INTEGER,
"SkillName"	TEXT,
"Priority"	INTEGER

USERS
"UserId"	INTEGER,
"Username"	TEXT,
"Password"	TEXT,
"Role"	TEXT,
PRIMARY KEY("UserId")

CLIENTS
"ClientID"	TEXT,
"ClientName"	TEXT


SUPPLY
"ApplicantID"	INTEGER,
"ApplicantFirstName"	TEXT,
"ApplicantLastName"	TEXT,
"SkillsID"	INTEGER,
"ApplicantStatus"	TEXT,
"Notes"	TEXT,
"ApplicantType"	TEXT,
"Location"	TEXT,
PRIMARY KEY("ApplicantID" AUTOINCREMENT)


DEMAND
"DemandID"	INTEGER,
"CodeRequisition"	INTEGER,
"StartDate"	TEXT,
"ClientID"	TEXT,
"OriginatorName"	TEXT,
"SkillsID"	INTEGER,
"Probability"	TEXT,
"Grade"	TEXT,
"SelectedApplicant"	TEXT,
"Status"	TEXT,
"Notes"	TEXT,
"ProposedApplicant"	TEXT,
"CreationDate"	TEXT,
"Location"	TEXT,
PRIMARY KEY("DemandID" AUTOINCREMENT)
