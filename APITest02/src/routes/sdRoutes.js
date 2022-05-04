import { getSupplyDemandData  } from '../controllers/sdController';
import { verifyToken } from '../helpers/jwtTokenHelper';

const routes = (app) => {
    app.route("/dashboard")
        .get((req, res, next) => {
            const token = req.headers["x-access-token"];
            if(verifyToken(token, process.env.TOKEN_KEY)) {
                next();
            }
            else {
                res.status(401).send('User not authenticated');
            }
        }, (req, res, next) => {
            try {
                const data = getSupplyDemandData();
                res.status(200).json(data);
            } catch(err) {
                res.status(500).json({ message: `Request failed with ${err}`});
            }
        });
    
    app.route("/job/:demandID")
        .put((req, res) =>
        res.send("PUT request successful!"))

        .delete((req, res) =>
        res.send("DELETE request successful!"))
}

export default routes;