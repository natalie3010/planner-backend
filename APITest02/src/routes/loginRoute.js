const users = [ // Put this in the database.
    {
        username: 'tomj',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'tomjames',
        password: 'password123member',
        role: 'member'
    }
];

const loginRoute = (app) => {
    app.route("/login")
        .post((req, res) => {
            try {
                const { username, password } = req.body;
                const user = users.find(u => { return u.username === username && u.password === password });
                if (user) {
                    res.status(200).json({
                        authenticated:true,
                        user: user.username,
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