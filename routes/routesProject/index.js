const routes = require('express').Router();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const cors = require('cors')
const mongoose = require('mongoose');
const User = require('./models/user');

routes.use((req, res, next) => {
    User.findById('609f3e00b31cad22bc4a070a')
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
});

routes.use('/admin', adminRoutes);
routes.use(shopRoutes);



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

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb+srv://vicente:Ackerman1@cse341-node.1oyuy.mongodb.net/shop?retryWrites=true&w=majority';

mongoose
    .connect(
        MONGODB_URL, options
    )
    .then(result => {
        User.findOne().then(user => {
            if (!user) {
                const user = new User({
                    name: 'vicente',
                    email: 'vic@test.com',
                    cart: {
                        items: []
                    }
                });
                user.save();
            }
        });
    })
    .catch(err => {
        console.log(err);
    });

module.exports = routes;
