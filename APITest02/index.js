import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/sdRoutes';
import loginRoute from './src/routes/loginRoute';

const app = express();
app.use(bodyParser.json());
const PORT = 4000;

routes(app); 
loginRoute(app);   

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);