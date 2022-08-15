export class Supply {
    constructor(applicantID, applicantFirstName, applicantLastName, skillsID, applicantStatus, notes, applicantType, location) {
        this.applicantID = applicantID; 
        this.applicantFirstName = applicantFirstName; 
        this.applicantLastName = applicantLastName;
        this.applicantSkills = skillsID; 
        this.applicantStatus = applicantStatus;
        this.applicantNotes = notes;
        this.applicantType = applicantType;
        this.applicantLocation = location;
    }
}