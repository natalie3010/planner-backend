import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/sdRoutes';
import supplyRoute from './src/routes/sRoutes';
import loginRoute from './src/routes/loginRoute';
import logoutRoute from './src/routes/logoutRoute';
import demandRoute from './src/routes/dRoutes';
import securityRoute from './src/routes/securityRoute'
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const COOKIE_MAX_AGE = 1000 * 60 * 60 * 2;

const OPTIONS = {
    origin: ['http://localhost:4200','https://wpp.capdigiops.com']
}

dotenv.config();

app.use(cors(OPTIONS));
app.use(bodyParser.json());

const PORT = process.env.PORT;

// Is this the best way of doing this (i.e. passing the app to each individual route?)
routes(app); 
loginRoute(app);
logoutRoute(app);
supplyRoute(app);
demandRoute(app);
securityRoute(app);

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);