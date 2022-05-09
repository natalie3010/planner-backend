import { addNewUser  } from "../controllers/userController"
import { applicationAccessControlDefinition } from '../helpers/accessControlHelper';
import { Router } from 'express';
import { AccessControl } from 'accesscontrol';

const userRoutes = Router();

userRoutes.post('/', (req, res) => {
        const accessControl = new AccessControl(applicationAccessControlDefinition)
        if(accessControl.can(req.decodedToken.role).createAny('user').granted) {
            try {
                const data = addNewUser(req.body.body);
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

export default userRoutes;