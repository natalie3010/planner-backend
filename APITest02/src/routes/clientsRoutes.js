
import { getClientsData, removeClientByID, addNewClient, updateExistingClient} from '../controllers/clientsController';
import { getApplicationAccessControlDefinition } from '../helpers/accessControlHelper';
import { Router } from 'express';
import { AccessControl } from 'accesscontrol';

const clientsRoutes = Router();

clientsRoutes.get('/', (req, res) => {
        const accessControl = new AccessControl(getApplicationAccessControlDefinition())
        if(accessControl.can(req.decodedToken.role).updateAny('demand').granted) {
            try {
                const data = getClientsData();
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

clientsRoutes.delete('/:clientID', (req, res) => {
    const accessControl = new AccessControl(getApplicationAccessControlDefinition())
    if(accessControl.can(req.decodedToken.role).updateAny('demand').granted) {
        try {
            const data = removeClientByID(req.params.clientID);
            res.status(200).json(data);
        } catch(err) {
            res.status(500).json({ message: `Request failed with ${err}`});
        }
    }
    else {
        res.status(403).json('User not authorised to proceed');
    }
});

clientsRoutes.post('/', (req, res) => {
    const accessControl = new AccessControl(getApplicationAccessControlDefinition())
    if(accessControl.can(req.decodedToken.role).updateAny('demand').granted) {
        try {
            const data = addNewClient(req.body);
            res.status(200).json(data);
        } catch(err) {
            res.status(500).json({ message: `Request failed with ${err}`});
        }
    }
    else {
        res.status(403).json('User not authorised to proceed');
    }
});

clientsRoutes.put('/:clientID', (req, res) => {
    const accessControl = new AccessControl(getApplicationAccessControlDefinition())
    if(accessControl.can(req.decodedToken.role).updateAny('demand').granted) {
        try {
            const data = updateExistingClient(req.body, req.params.clientID);
            res.status(200).json(data);
        } catch(err) {
            res.status(500).json({ message: `Request failed with ${err}`});
        }
    }
    else {
        res.status(403).send('User not authenticated');
    }
});

export default clientsRoutes;