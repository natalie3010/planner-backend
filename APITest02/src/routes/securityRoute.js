import { verifyToken, generateToken } from "../helpers/jwtTokenHelper";


const securityRoute = (app) => {
    app.route("/refresh-token")
        .post((req, res) => {
            try {
                let { refreshToken } = req.body.body;
                let decodedRefreshToken = verifyToken(refreshToken, process.env.REFRESH_TOKEN_KEY);
                    if(decodedRefreshToken) {
                        const token = generateToken(
                            {
                                username: decodedRefreshToken.username
                            }, 
                            process.env.TOKEN_KEY, 
                            '1m'
                        );

                        res.status(200).json({
                            token: token,
                        });
                    } else {
                        res.status(403).send('Username or password incorrect');
                    }
            } catch(err) {
                res.status(500).json({ message: `Request failed with ${err}`});
            }
        });
}

export default securityRoute;