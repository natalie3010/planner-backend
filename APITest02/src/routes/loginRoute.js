import { getMatchingUser  } from "../controllers/loginController"
import { generateToken } from '../helpers/jwtTokenHelper';

const loginRoute = (app) => {
    app.route("/login")
        .post((req, res) => {
            try {
                let { username, password } = req.body.body;
                const users = getMatchingUser(username, password);
                if (users.length === 1) {
                    const token = generateToken(
                        {
                            username: users[0].Username
                        }, 
                        process.env.TOKEN_KEY, 
                        '1m'
                    );

                    const refreshToken = generateToken(
                        {
                            username: users[0].Username
                        }, 
                        process.env.REFRESH_TOKEN_KEY, 
                        '2h'
                    );
                    
                    res.status(200).json({
                        authenticated:true,
                        user: users[0].Username,
                        token: token,
                        refreshToken: refreshToken
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