import FORM_VALIDATION_CONFIG from '../assets/formValidatorsConfig';

export const checkModelValidity = (modelEntity) => {
    let validationErrors = [];
    let targetedEntity = FORM_VALIDATION_CONFIG[modelEntity.constructor.name];
    for (var x in modelEntity) {
        if (modelEntity.hasOwnProperty(x)) {
            if(targetedEntity[x]) {
                targetedEntity[x].validators.forEach((validator) => {
                    if (((!validator.required || !modelEntity[x]) && (!validator.pattern || !modelEntity[x] || !(new RegExp(validator.pattern).test(modelEntity[x]))))) {
                        validationErrors.push(validator.errorMessage);
                    }
                })
            }
        }
    }
    return validationErrors;
};