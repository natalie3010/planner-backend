import { getSupplyDemandData  } from '../controllers/sdController';
import { applicationAccessControlDefinition } from '../helpers/accessControlHelper';
import { AccessControl } from 'accesscontrol';
import { Router } from 'express';

const dashboardRoutes = Router();

dashboardRoutes.get('/', (req, res) => {
        const accessControl = new AccessControl(applicationAccessControlDefinition)
        if(accessControl.can(req.decodedToken.role).readAny('dashboard').granted) {
            try {
                const data = getSupplyDemandData();
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
    
dashboardRoutes.put('/job/:demandID', (req, res) =>
    res.send("PUT request successful!")
).delete((req, res) => res.send("DELETE request successful!"))

export default dashboardRoutes;