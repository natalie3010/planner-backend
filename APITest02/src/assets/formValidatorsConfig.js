export default {
	"Supply": {
			"applicantFirstName": {
				"validators": [
					{
						"errorMessage": "Please put a first name",
						"required": true
					}
				]
			},
			"applicantLastName": {
				"validators": [
					{
						"errorMessage": "Please put a last name",
						"required": true
					}
				]
			},
			"applicantStatus": {
				"validators": [
					{
						"errorMessage": "Please select a status",
						"required": true
					}
				]
			},
			"applicantSkills": {
				"validators": [
					{
						"errorMessage": "Please select a skill",
						"required": true
					}
				]
			},
			"applicantNotes": {
				"validators": []
			},
			"applicantType": {
				"validators": [
					{
						"errorMessage": "Please select a type",
						"required": true
					}
				]
			},
			"applicantLocation": {
				"validators": []
			}
	},

	"Demand": {
			"demandCodeRequisition": {
				"validators": []
			},
			"demandStartDate": {
				"validators": [
					{
						"errorMessage": "Please put a valid date following the pattern dd/MM/yyyy",
						"pattern": "(([12][0-9]{1})|(0[1-9]{1})|(3[01]{1}))\/((0[1-9])|(1[012]))\/(2([0-9]{3}))"
					}
				]
			},
			"demandOriginator": {
				"validators": []
			},
			"demandProbability": {
				"validators": []
			},
			"demandSelectedApplicant": {
				"validators": []
			},
			"demandNotes": {
				"validators": []
			},
			"demandProposedApplicant": {
				"validators": []
			},
			"demandCreationDate": {
				"validators": [
					{
						"errorMessage": "The date format must follow the pattern dd/MM/yyyy",
						"pattern": "(([12][0-9]{1})|(0[1-9]{1})|(3[01]{1}))\/((0[1-9])|(1[012]))\/(2([0-9]{3}))"
					},
					{
						"errorMessage": "Please put a creation date",
						"required": true
					}
				]
			},
			"demandLocation": {
				"validators": []
			},
			"demandStatus": {
				"validators": [
					{
						"errorMessage": "Please select a status",
						"required": true
					}
				]
			},
			"demandGrade": {
				"validators": [
					{
						"errorMessage": "Please select a grade",
						"required": true
					}
				]
			},
			"demandSkills": {
				"validators": [
					{
						"errorMessage": "Please select a skill",
						"required": true
					}
				]
			},
			"demandClient": {
				"validators": [
					{
						"errorMessage": "Please select a client",
						"required": true
					}
				]
			}
	},
	"LoginUser": {
			"usernameLogin": {
				"validators": [
					{
						"required": true
					}
				]
			},
			"passwordLogin": {
				"validators": [
					{
						"required": true
					}
				]
			}
	}
}