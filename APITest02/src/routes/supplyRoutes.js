import { getSupplyData  } from '../controllers/sController';
import { Router } from 'express';
import { AccessControl } from 'accesscontrol';
import { applicationAccessControlDefinition } from '../helpers/accessControlHelper';

const supplyRoutes = Router();

supplyRoutes.get('/', (req, res) => {
        const accessControl = new AccessControl(applicationAccessControlDefinition)
        if(accessControl.can(req.decodedToken.role).readAny('supply').granted) {
            try {
                const data = getSupplyData(req.query);
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
    
supplyRoutes.put('/job/:supplyID', (req, res) =>
    res.send("PUT request successful!")
).delete((req, res) => res.send("DELETE request successful!"))

export default supplyRoutes;