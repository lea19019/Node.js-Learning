const express = require('express');
const router = express.Router();

// Path to your JSON file, although it can be hardcoded in this file.
const dummyData = {
    "avengers": [
        {
            "name": "Tony Stark",
            "heroName": "Iron Man"
        },
        {
            "name": "Steve Rogers",
            "heroName": "Captain America"
        },
        {
            "name": "Thor Odinson",
            "heroName": "Thor xD"
        },
        {
            "name": "Bruce Banner",
            "heroName": "Hulk"
        },
        {
            "name": "Natasha Romanova",
            "heroName": "Black Widow"
        },
        {
            "name": "Clint Barton",
            "heroName": "Hawkeye"
        }
    ]
}

router.get('/', (req, res, next) => {
    res.render('prove11/index', {
        title: 'Prove 11',
        path: '/teamActivities/11',
    });
});

router.get('/fetchAll', (req, res, next) => {
    res.json(dummyData);
});

router.post('/insert', (req, res, next) => {
    if (req.body.newName && req.body.newHero) {
        const newName = req.body.newName;
        const newHero = req.body.newHero;

        if (!dummyData.avengers.some(h => h.name === newName) && !dummyData.avengers.some(h => h.heroName === newHero)) {
            const newName = req.body.newName;
            const newHero = req.body.newHero;
            dummyData.avengers.push({ name: newName, heroName: newHero });
            res.sendStatus(200);
        }
    } else {
        res.sendStatus(400);
    }
});

module.exports = router;