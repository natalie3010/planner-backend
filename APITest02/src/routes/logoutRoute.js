const logoutRoute = (app) => {
    app.route("/logout")
        .get((req, res) => {
            try {
                req.session.destroy();
                res.status(200);
            } catch(err) {
                res.status(500).json({ message: `Request failed with ${err}`});
            }
        });
}

export default logoutRoute;