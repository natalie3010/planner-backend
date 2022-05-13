import { getSupplyData, getSupplyByID, deleteSupplyByID, addNewSupply, updateExistingSupply } from '../controllers/sController';
import { Router } from 'express';
import { AccessControl } from 'accesscontrol';
import { getApplicationAccessControlDefinition } from '../helpers/accessControlHelper';

const supplyRoutes = Router();

supplyRoutes.get('/', (req, res) => {
        const accessControl = new AccessControl((getApplicationAccessControlDefinition()))
        if(accessControl.can(req.decodedToken.role).readAny('supply').granted) {
            try {
                const data = getSupplyData(req.query.selectedSkills);
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

supplyRoutes.get('/:applicantID', (req, res) => {
    const accessControl = new AccessControl(getApplicationAccessControlDefinition())
    if(accessControl.can(req.decodedToken.role).readAny('supply').granted) {
        try {
            const data = getSupplyByID(req.params.applicantID);
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
    
supplyRoutes.put('/:applicantID', (req, res) => {
    const accessControl = new AccessControl(getApplicationAccessControlDefinition())
    if(accessControl.can(req.decodedToken.role).updateAny('supply').granted) {
        try {
            const data = updateExistingSupply(req.body, req.params.applicantID);
            res.status(200).json(data);
        } catch(err) {
            res.status(500).json({ message: `Request failed with ${err}`});
        }
    }
    else {
        res.status(403).send('User not authenticated');
    }
});

supplyRoutes.delete('/:applicantID', (req, res) => {
    const accessControl = new AccessControl(getApplicationAccessControlDefinition())
    if(accessControl.can(req.decodedToken.role).deleteAny('supply').granted) {
        try {
            console.log(req.params);
            const data = deleteSupplyByID(req.params.applicantID);
            res.status(200).json(data);
        } catch(err) {
            res.status(500).json({ message: `Request failed with ${err}`});
        }
    }
    else {
        res.status(403).send('User not authenticated');
    }
});

supplyRoutes.post('/', (req, res) => {
    const accessControl = new AccessControl(getApplicationAccessControlDefinition())
    if(accessControl.can(req.decodedToken.role).updateAny('supply').granted) {
        try {
            const data = addNewSupply(req.body);
            res.status(200).json(data);
        } catch(err) {
            res.status(500).json({ message: `Request failed with ${err}`});
        }
    }
    else {
        res.status(403).send('User not authenticated');
    }
});

export default supplyRoutes;