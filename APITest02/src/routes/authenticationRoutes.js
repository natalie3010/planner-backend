import { getMatchingUserV2 } from "../controllers/userController"
import { generateToken, verifyToken } from '../helpers/jwtTokenHelper';
import { Router } from 'express';
import { LoginUser } from '../models/loginUser';
import { checkModelValidity } from '../helpers/formValidators';

const authenticationRoutes = Router();

authenticationRoutes.post('/login',(req, res) => {
        try {
            const loginUser = new LoginUser(req.body.username, req.body.password);
            let errorMessages = checkModelValidity(loginUser);
            if(errorMessages.length === 0) {
                const user = getMatchingUserV2(loginUser);
                if (user) {
                    const token = generateToken(
                        {
                            userId: user.UserId,
                            username: user.Username,
                            role: user.Role
                        }, 
                        process.env.TOKEN_KEY, 
                        process.env.TOKEN_EXPIRES_IN
                    );

                    const refreshToken = generateToken(
                        {
                            userId: user.UserId,
                            username: user.Username,
                            role: user.Role
                        }, 
                        process.env.REFRESH_TOKEN_KEY, 
                        process.env.REFRESH_TOKEN_EXPIRES_IN
                    );
                        
                    res.status(200).json({
                        authenticated:true,
                        user: user.Username,
                        token: token,
                        refreshToken: refreshToken
                    });
                } 
                else {
                    res.status(403).send('Username or password incorrect');
                }
            }
            else {
                res.status(400).send(errorMessages);
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
        let { refreshToken } = req.body;
        let decodedRefreshToken = verifyToken(refreshToken, process.env.REFRESH_TOKEN_KEY);
            if(decodedRefreshToken) {
                const token = generateToken(
                    {
                        userId: decodedRefreshToken.userId,
                        username: decodedRefreshToken.username,
                        role: decodedRefreshToken.role
                    }, 
                    process.env.TOKEN_KEY, 
                    process.env.TOKEN_EXPIRES_IN
                );

                res.status(200).json({
                    token: token,
                });
            } else {
                res.status(401).send('User logged out');
            }
    } catch(err) {
        res.status(500).json({ message: `Request failed with ${err}`});
    }
});

export default authenticationRoutes;