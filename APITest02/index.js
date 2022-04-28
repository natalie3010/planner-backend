import express from 'express';
import sessions from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import routes from './src/routes/sdRoutes';
import supplyRoute from './src/routes/sRoutes';
import loginRoute from './src/routes/loginRoute';
import logoutRoute from './src/routes/logoutRoute';
import demandRoute from './src/routes/dRoutes';

const app = express();
const cookieMaxAge = 1000 * 60 * 60 * 2;
app.use(bodyParser.json());
app.use(sessions({
    secret: "capgemini2022NGTApp",
    saveUninitialized:true,
    cookie: { maxAge: cookieMaxAge },
    resave: false 
}));
app.use(cookieParser());
const PORT = 4001;

// Is this the best way of doing this (i.e. passing the app to each individual route?)
routes(app); 
loginRoute(app);
logoutRoute(app);
supplyRoute(app);
demandRoute(app);

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);