const express = require('express')
const path = require('path')
var request = require('request')
var _ = require('lodash')
const ejsLint = require('ejs-lint')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function (req, res) {
    var city = 'Lisbon';

    if (req.query.city == null) {
        res.render('pages/index', { reports: [] })
    } else {
        city = req.query.city;
    }
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
