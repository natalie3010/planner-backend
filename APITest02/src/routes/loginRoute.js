import { getMatchingUser  } from "../controllers/loginController"

const loginRoute = (app) => {
    app.route("/login")
        .post((req, res) => {
            try {
                let { username, password } = req.body.body;
                const users = getMatchingUser(username, password);
                if (users.length === 1) {
                    req.session.authenticated = true;
                    res.status(200).json({
                        authenticated:true,
                        user: users[0].username,
                    });
                    } else {
                        res.status(403).send('Username or password incorrect');
                    }
            } catch(err) {
                res.status(500).json({ message: `Request failed with ${err}`});
            }
        });
}

export default loginRoute;