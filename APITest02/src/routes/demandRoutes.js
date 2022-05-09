
import { getDemandData  } from '../controllers/dController';
import { applicationAccessControlDefinition } from '../helpers/accessControlHelper';
import { Router } from 'express';
import { AccessControl } from 'accesscontrol';

const demandRoutes = Router();

demandRoutes.get('/', (req, res) => {
        const accessControl = new AccessControl(applicationAccessControlDefinition)
        if(accessControl.can(req.decodedToken.role).readAny('demand').granted) {
            try {
                const data = getDemandData(req.query);
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
    
demandRoutes.put('/job/:demandID', (req, res) =>
    res.send('PUT request successful!')
).delete((req, res) => res.send('DELETE request successful!'))

export default demandRoutes;