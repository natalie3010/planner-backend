
import { getSkillsData  } from '../controllers/skillsController';
import { getApplicationAccessControlDefinition } from '../helpers/accessControlHelper';
import { Router } from 'express';
import { AccessControl } from 'accesscontrol';

const skillsRoutes = Router();

skillsRoutes.get('/', (req, res) => {
        const accessControl = new AccessControl(getApplicationAccessControlDefinition())
        if(accessControl.can(req.decodedToken.role).updateAny('demand').granted
            || accessControl.can(req.decodedToken.role).updateAny('supply').granted) {
            try {
                const data = getSkillsData();
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

export default skillsRoutes;