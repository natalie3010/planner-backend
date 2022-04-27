import { getDemandData  } from "../controllers/dController"

const routes = (app) => {
    app.route("/demand")
        .get((req, res, next) => {
            // Middleware to Authorize the USER;
            next();
        }, (req, res, next) => {
            try {
                const data = getDemandData(req.query);
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