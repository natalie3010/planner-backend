import { Demand } from "../../models/demand";

export class DemandMapper {
    static mapToDemand(rowData) {
        return new Demand(rowData.DemandID, rowData.CodeRequisition, rowData.StartDate, rowData.ClientID, rowData.OriginatorName, rowData.SkillsID, rowData.Probability, rowData.Grade, rowData.SelectedApplicant, rowData.Status, rowData.Notes, rowData.ProposedApplicant, rowData.CreationDate, rowData.Location);
    }

    static mapFronRequest(rowData) {
        return new Demand(rowData.demandID, rowData.demandCodeRequisition, rowData.demandStartDate, rowData.demandClientID, rowData.demandOriginatorName, rowData.demandSkills, rowData.demandProbability, rowData.demandGrade, rowData.demandSelectedApplicant, rowData.demandStatus, rowData.demandNotes, rowData.demandProposedApplicant, rowData.demandCreationDate, rowData.demandLocation);
    }
}