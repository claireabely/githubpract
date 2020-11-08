// ___________________
// Dependencies
// ___________________
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()
const db = mongoose.connection

// ___________________
// Port (set up for hosting w. heroku)
// ___________________
const PORT = process.env.PORT || 7000

// ___________________
// Database
// ___________________
const mongoURI = process.env.MONGODBURI || 'mongodb://localhost:27017/marathontrain'



// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log('MongoDB connection established:', mongoURI)
)

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod running?'))
db.on('disconnected', () => console.log('mongo is not running'))

// ___________________
// Controllers
// ___________________
// Step 1/3 require the controller to be able to use the schedules routes
const schedulesController = require('./controllers/schedules')


// ___________________
// Middleware
// ___________________

// use morgan
app.use(morgan('dev'))

// use [public] folder for static assets
app.use(express.static('public'))

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false })) // extended: false - does not allow nested objects in query strings
app.use(express.json()) // returns middleware that only parses JSON

// use method override
app.use(methodOverride('_method')) // allow POST, PUT and DELETE from a form

// Step 2/3 app.use this controller and when `/schedules` is visted

// Must put below any middleware that you want to have access to on this route
// Note, step 3 is in controllers/schedules.js
app.use('/schedules', schedulesController)

// ___________________
// Routes
// ___________________
// localhost:4000  - this will reroute to `schedules`
app.get('/', (req, res) => {
  res.redirect('/schedules')
})
app.get('/', (req, res) => {
    res.redirect('/stats')
  })
// app.get('/seed', (req, res) => {
//     res.render('pokedex.ejs', {
//       // sends pokemon data into the pokedex.ejs page under the variable 'data'
//       data: schedule
//     });
//   })

// 404 errors!
// this will catch any route that doesn't exist
app.get('*', (req, res) => {
    res.render('./four-oh-four/index.ejs')
  })
  app.get('*', (req, res) => {
    res.render('./stats/index.ejs')
  })
// ___________________
// Listener
// ___________________
app.listen(PORT, () => console.log('Keep training til you PR!', PORT))
