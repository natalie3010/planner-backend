
import { getDemandData, getDemandByID, updateExistingDemand, deleteDemandByID, addNewDemand } from '../controllers/dController';
import { getApplicationAccessControlDefinition } from '../helpers/accessControlHelper';
import { Router } from 'express';
import { AccessControl } from 'accesscontrol';

const demandRoutes = Router();

demandRoutes.get('/', (req, res) => {
        const accessControl = new AccessControl(getApplicationAccessControlDefinition())
        if(accessControl.can(req.decodedToken.role).readAny('demand').granted) {
            try {
                const data = getDemandData(req.query.selectedSkills);
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
    
demandRoutes.get('/:demandID', (req, res) => {
    const accessControl = new AccessControl(getApplicationAccessControlDefinition())
    if(accessControl.can(req.decodedToken.role).readAny('demand').granted) {
        try {
            const data = getDemandByID(req.params.demandID);
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
    
demandRoutes.put('/:demandID', (req, res) => {
    const accessControl = new AccessControl(getApplicationAccessControlDefinition())
    if(accessControl.can(req.decodedToken.role).updateAny('demand').granted) {
        try {
            const data = updateExistingDemand(req.body, req.params.demandID);
            res.status(200).json(data);
        } catch(err) {
            res.status(500).json({ message: `Request failed with ${err}`});
        }
    }
    else {
        res.status(403).send('User not authenticated');
    }
});

demandRoutes.delete('/:demandID', (req, res) => {
    const accessControl = new AccessControl(getApplicationAccessControlDefinition())
    if(accessControl.can(req.decodedToken.role).deleteAny('demand').granted) {
        try {
            console.log(req.params);
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

demandRoutes.post('/', (req, res) => {
    const accessControl = new AccessControl(getApplicationAccessControlDefinition())
    if(accessControl.can(req.decodedToken.role).updateAny('demand').granted) {
        try {
            const data = addNewDemand(req.body);
            res.status(200).json(data);
        } catch(err) {
            res.status(500).json({ message: `Request failed with ${err}`});
        }
    }
    else {
        res.status(403).send('User not authenticated');
    }
});

export default demandRoutes;