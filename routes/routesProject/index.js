const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const session = require('express-session');
const mongoDBStore = require('connect-mongodb-session')(session);

const cors = require('cors')
const csrf = require('csurf');
const flash = require('connect-flash');
const multer = require('multer');

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb+srv://vicente:Ackerman1@cse341-node.1oyuy.mongodb.net/shop?retryWrites=true&w=majority';

const store = new mongoDBStore({
    uri: MONGODB_URL,
    collection: 'sessions'
});
const csrfProtection = csrf();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

const routes = express.Router();
// routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);
// routes.use('/images', express.static(path.join(__dirname, 'images')));
routes.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
}));
routes.use(csrfProtection);
routes.use(flash());
routes.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
})
routes.use((req, res, next) => {
    if (!req.session.user) {
        return next();
    }
    User.findById(req.session.user._id)
        .then(user => {
            if (!user) {
                return next();
            }
            req.user = user;
            next();
        })
        .catch(err => { next(new Error(err)) });
});




routes.use('/admin', adminRoutes);
routes.use(shopRoutes);
routes.use(authRoutes);

routes.get('/500', errorController.get500);
routes.use(errorController.get404);
routes.use((error, req, res, next) => {
    res.status(500).render('project/500', {
        pageTitle: 'Error!',
        path: '/500',
        isAuthenticated: req.session.isLoggedIn
    });
})



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
        // console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

module.exports = routes;
