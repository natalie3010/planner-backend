const logoutRoute = (app) => {
    app.route("/logout")
        .get((req, res) => {
            try {
                res.status(200).json({
                    authenticated:false
                });
            } catch(err) {
                res.status(500).json({ message: `Request failed with ${err}`});
            }
        });
}

export default logoutRoute;