import { Supply } from "../../models/supply";

export class SupplyMapper {
    static mapToSupply(rowData) {
        return new Supply(rowData.ApplicantID, rowData.ApplicantFirstName, rowData.ApplicantLastName, rowData.SkillsID, rowData.ApplicantStatus, rowData.Notes, rowData.ApplicantType, rowData.Location);
    }

    static mapFronRequest(rowData) {
        return new Supply(rowData.applicantID, rowData.applicantFirstName, rowData.applicantLastName, rowData.applicantSkills, rowData.applicantStatus, rowData.applicantNotes, rowData.applicantType, rowData.applicantLocation);
    }
}