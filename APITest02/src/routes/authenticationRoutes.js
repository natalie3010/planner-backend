import { getMatchingUser  } from "../controllers/userController"
import { generateToken, verifyToken } from '../helpers/jwtTokenHelper';
import { Router } from 'express';

const authenticationRoutes = Router();

authenticationRoutes.post('/login',(req, res) => {
        try {
            let { username, password } = req.body;
            const user = getMatchingUser(username, password);
            if (user) {
                const token = generateToken(
                    {
                        userId: user.UserId,
                        username: user.Username,
                        role: user.Role
                    }, 
                    process.env.TOKEN_KEY, 
                    '15m'
                );

                const refreshToken = generateToken(
                    {
                        userId: user.UserId,
                        username: user.Username,
                        role: user.Role
                    }, 
                    process.env.REFRESH_TOKEN_KEY, 
                    '4h'
                );
                    
                res.status(200).json({
                    authenticated:true,
                    user: user.Username,
                    token: token,
                    refreshToken: refreshToken
                });
            } else {
                res.status(403).send('Username or password incorrect');
            }
        } catch(err) {
            res.status(500).json({ message: `Request failed with ${err}`});
        }
    }
);

authenticationRoutes.get('/logout',(req, res) => {
    try {
        res.status(200).json({
            authenticated:false
        });
    } catch(err) {
        res.status(500).json({ message: `Request failed with ${err}`});
    }
});

authenticationRoutes.post('/refresh-token',(req, res) => {
    try {
        let { refreshToken } = req.body.body;
        let decodedRefreshToken = verifyToken(refreshToken, process.env.REFRESH_TOKEN_KEY);
            if(decodedRefreshToken) {
                const token = generateToken(
                    {
                        userId: decodedRefreshToken.userId,
                        username: decodedRefreshToken.username,
                        role: decodedRefreshToken.role
                    }, 
                    process.env.TOKEN_KEY, 
                    '15m'
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

export default authenticationRoutes;