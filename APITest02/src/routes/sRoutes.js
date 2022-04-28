import { getSupplyData  } from "../controllers/sController"

const routes = (app) => {
    app.route("/supply")
        .get((req, res, next) => {
            if(req.session.authenticated) {
                next();
            }
            else {
                res.status(401).send('User not authenticated');
            }
        }, (req, res, next) => {
            console.log(req);
            console.log(req.query);
            try {
                const data = getSupplyData(req.query);
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