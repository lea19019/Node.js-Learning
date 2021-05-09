const routes = require('express').Router();
const teamActivities = require('./routesTeams');
const proveActivities = require('./routesProve');
const project = require('./routesProject');

routes
        .use('/teamActivities', teamActivities)
        .use('/proveActivities', proveActivities)
        .use('/project', project)
        .get('/', (req, res, next) => {
            // This is the primary index, always handled last. 
            res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
        })
        .use((req, res, next) => {
            // 404 page
            res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
        })

module.exports = routes;