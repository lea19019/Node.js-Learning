const routes = require('express').Router();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');
const cors = require('cors')
const mongoose = require('mongoose');
const User = require('./models/user');
const session = require('express-session');
const mongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');


const MONGODB_URL = process.env.MONGODB_URL || 'mongodb+srv://vicente:Ackerman1@cse341-node.1oyuy.mongodb.net/shop?retryWrites=true&w=majority';

const store = new mongoDBStore({
    uri: MONGODB_URL,
    collection: 'sessions'
});
const csrfProtection = csrf();

routes.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
}));

routes.use(csrfProtection);
routes.use(flash());

routes.use((req, res, next) => {
    if (!req.session.user) {
        return next();
    }
    User.findById(req.session.user._id)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
});

routes.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
})


routes.use('/admin', adminRoutes);
routes.use(shopRoutes);
routes.use(authRoutes);



const corsOptions = {
    origin: "https://cse341-node-lea19019.herokuapp.com/",
    optionsSuccessStatus: 200
};
routes.use(cors(corsOptions));

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};



mongoose
    .connect(
        MONGODB_URL, options
    )
    .then(result => {
        // User.findOne().then(user => {
        //     if (!user) {
        //         const user = new User({
        //             name: 'vicente',
        //             email: 'vic@test.com',
        //             cart: {
        //                 items: []
        //             }
        //         });
        //         user.save();
        //     }
        // });
        //routes.listen(5000)
    })
    .catch(err => {
        console.log(err);
    });

module.exports = routes;
