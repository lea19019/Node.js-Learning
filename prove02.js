const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const books = require('./routes/books');
const index = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', books.routes);
app.use(index);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});


app.listen(process.env.PORT || 3000);
