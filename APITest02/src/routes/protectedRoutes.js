import { Router } from 'express';
import dashboardRoutes from './dashboardRoutes';
import supplyRoutes from './supplyRoutes';
import demandRoutes from './demandRoutes';
import userRoutes from './userRoutes';
import { verifyToken } from '../helpers/jwtTokenHelper';

const protectedRoutes = Router();

protectedRoutes.route('/*').all(function (req, res, next) {
    const token = req.headers['x-access-token'];
    let decodedToken = verifyToken(token, process.env.TOKEN_KEY);
    if(decodedToken) {
        req.decodedToken = decodedToken
        next();
    }
    else {
        res.status(401).send('User not authenticated');
    }
});

protectedRoutes.use('/dashboard', dashboardRoutes);
protectedRoutes.use('/supply', supplyRoutes);
protectedRoutes.use('/demand', demandRoutes);
protectedRoutes.use('/user', userRoutes)

export default protectedRoutes;