
import { getDemandDataV2, getDemandByIDV2, updateExistingDemandV2, deleteDemandByID, addNewDemandV2 } from '../controllers/dController';
import { getApplicationAccessControlDefinition } from '../helpers/accessControlHelper';
import { Router } from 'express';
import { AccessControl } from 'accesscontrol';
import { checkModelValidity } from '../helpers/formValidators';
import { DemandMapper } from '../helpers/mappers/demandMapper';

const demandRoutesV2 = Router();

demandRoutesV2.get('/', (req, res) => {
        const accessControl = new AccessControl(getApplicationAccessControlDefinition())
        if(accessControl.can(req.decodedToken.role).readAny('demand').granted) {
            try {
                const data = getDemandDataV2(req.query.selectedSkills);
                res.status(200).json(data);
            } catch(err) {
                res.status(500).json({ message: `Request failed with ${err}`});
            }
        }
        else {
            res.status(403).json('User not authorised to proceed');
        }
    }
);
    
demandRoutesV2.get('/:demandID', (req, res) => {
    const accessControl = new AccessControl(getApplicationAccessControlDefinition())
    if(accessControl.can(req.decodedToken.role).readAny('demand').granted) {
        try {
            const data = getDemandByIDV2(req.params.demandID);
            res.status(200).json(data);
        } catch(err) {
            res.status(500).json({ message: `Request failed with ${err}`});
        }
    }
    else {
        res.status(403).send('User not authenticated');
    }
}
);
    
demandRoutesV2.put('/:demandID', (req, res) => {
    const accessControl = new AccessControl(getApplicationAccessControlDefinition())
    if(accessControl.can(req.decodedToken.role).updateAny('demand').granted) {
        try {
            const demand = DemandMapper.mapFronRequest(req.body);
            const validationErrors = checkModelValidity(demand);
            if(validationErrors.length === 0) {
                const data = updateExistingDemandV2(demand, req.params.demandID);
                res.status(200).json(data);
            }
            else {
                res.status(400).json(validationErrors);
            }
        } catch(err) {
            res.status(500).json({ message: `Request failed with ${err}`});
        }
    }
    else {
        res.status(403).send('User not authenticated');
    }
});

demandRoutesV2.delete('/:demandID', (req, res) => {
    const accessControl = new AccessControl(getApplicationAccessControlDefinition())
    if(accessControl.can(req.decodedToken.role).deleteAny('demand').granted) {
        try {
            const data = deleteDemandByID(req.params.demandID);
            res.status(200).json(data);
        } catch(err) {
            res.status(500).json({ message: `Request failed with ${err}`});
        }
    }
    else {
        res.status(403).send('User not authenticated');
    }
});

demandRoutesV2.post('/', (req, res) => {
    const accessControl = new AccessControl(getApplicationAccessControlDefinition())
    if(accessControl.can(req.decodedToken.role).updateAny('demand').granted) {
        try {
            const demand = DemandMapper.mapFronRequest(req.body);
            const validationErrors = checkModelValidity(demand);
            if(validationErrors.length === 0) {
                const data = addNewDemandV2(demand);
                res.status(200).json(data);
            }
            else {
                res.status(400).json(validationErrors);
            }
        } catch(err) {
            res.status(500).json({ message: `Request failed with ${err}`});
        }
    }
    else {
        res.status(403).send('User not authenticated');
    }
});

export default demandRoutesV2;