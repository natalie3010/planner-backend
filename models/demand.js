export class Demand {
  constructor(
    demandID,
    codeRequisition,
    startDate,
    clientID,
    originatorName,
    skillsID,
    probability,
    grade,
    selectedApplicant,
    status,
    notes,
    proposedApplicant,
    creationDate,
    location,
    clientName
  ) {
    this.demandID = demandID
    this.demandCodeRequisition = codeRequisition
    this.demandStartDate = startDate
    this.demandClientID = clientID
    this.demandOriginatorName = originatorName
    this.demandSkills = skillsID
    this.demandProbability = probability
    this.demandGrade = grade
    this.demandSelectedApplicant = selectedApplicant
    this.demandStatus = status
    this.demandNotes = notes
    this.demandProposedApplicant = proposedApplicant
    this.demandCreationDate = creationDate
    this.demandLocation = location
    this.demandClientName = clientName
  }
}
