import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/sdRoutes';
import supplyRoute from './src/routes/sRoutes';
import loginRoute from './src/routes/loginRoute';
import demandRoute from './src/routes/dRoutes';

const app = express();
app.use(bodyParser.json());
const PORT = 4001;

// Is this the best way of doing this (i.e. passing the app to each individual route?)
routes(app); 
loginRoute(app);
supplyRoute(app);
demandRoute(app);

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);