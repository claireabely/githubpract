
const newSchedules =  [
    {
        weeknumber: 1,
        description: 'Coachs Tip: Nutrition Hydration, Body weight can be used as a functional indicator of hydration status. If possible, weigh yourself before and immediately after the run. Your goal is to have only lost between 0-2% of your initial body weight, as performance does not decrease until you are more than 2% dehydrated. If you have lost more than 2% of your initial bodyweight so for you that is 2.4 lbs, you did not take in enough fluid during the run. Due to variables such as running pace, environmental conditions, individual sweating rate, and clothing, it is challenging to recommend specific fluid and electrolyte intake amounts. As always, our advice is to seek the assistance of a nutritional professional who will evaluate your individual needs',
      img: 'https://i.imgur.com/3KEOLq1.jpg',
        iframe: 'https://www.strava.com/segments/852256/embed',
        price: 44,
        sunday:'Long Run 12 Miles',
      monday: 'Day Off',
      tuesday: 'Reg Run 7 Miles',
      wednesday: 'Intervals 9 Miles',
      thursday: 'Reg Run 8 Miles',
      friday: 'Flex Day 6 Miles',
      saturday: 'AYF 8 Miles',
        qty: 99
      },
      {
        weeknumber: 2,
        description: '45 Miles Prescribed',
        iframe: 'https://www.strava.com/segments/852256/embed',
        img: 'https://i.imgur.com/0PbW78a.jpg',
        price: 45,
        sunday:'Long Run 14 Miles',
        monday: 'Day Off',
        tuesday: 'Reg Run 7 Miles',
        wednesday: 'Intervals 9 Miles',
        thursday: 'Reg Run 7 Miles',
        friday: 'Flex Day 6 Miles',
        saturday: 'AYF 8 Miles',
        qty: 1
      },
      {
        weeknumber:  3,
        description: '45 Miles Prescribed',
        iframe: 'https://www.strava.com/segments/852256/embed',
        img: 'https://i.imgur.com/EtRiVLT.jpg',
        price: 45,
        sunday:'Long Run 16 Miles',
        monday: 'Day Off',
        tuesday: 'Reg Run 7 Miles',
        wednesday: 'Intervals 9 Miles',
        thursday: 'Reg Run 8 Miles',
        friday: 'Flex Day 6 Miles',
        saturday: 'AYF 8 Miles',
        qty: 0
      },
      {weeknumber:  4,
      description: '45 Miles Prescribed',
      img: 'https://i.imgur.com/IPOehy8.jpg',
      iframe: 'https://www.strava.com/segments/852256/embed',
      qty: 45,
      sunday:'Long Run 16 Miles',
      monday: 'Day Off',
      tuesday: 'Reg Run 7 Miles',
      wednesday: 'Intervals 9 Miles',
      thursday: 'Reg Run 8 Miles',
      friday: 'Flex Day 6 Miles',
      saturday: 'AYF 8 Miles',
      price: 1000000
    },
    {
      weeknumber: 5,
      description: '44 Miles Prescribed',
      img: 'https://i.imgur.com/yi2YRnx.jpg',
      iframe: 'https://www.strava.com/segments/852256/embed',
      price: 44,
      sunday:'Long Run 16 Miles',
      monday: 'Day Off',
      tuesday: 'Reg Run 7 Miles',
      wednesday: 'Intervals 9 Miles',
      thursday: 'Reg Run 8 Miles',
      friday: 'Flex Day 6 Miles',
      saturday: 'AYF 8 Miles',
      qty: 72
    },
    {
      weeknumber: 6,
      description: '49 Miles Prescribed',
      img: 'https://i.imgur.com/wiR4QCv.jpg',
      price: 49,
       iframe: 'https://www.strava.com/segments/852256/embed',
      sunday:'Long Run 16 Miles',
      monday: 'Day Off',
      tuesday: 'Reg Run 7 Miles',
      wednesday: 'Intervals 9 Miles',
      thursday: 'Reg Run 8 Miles',
      friday: 'Flex Day 6 Miles',
      saturday: 'AYF 8 Miles',
      qty: 0
    },
    {
      weeknumber: 7,
      description: '47 Miles Prescribed',
      img: 'https://i.imgur.com/DjEXbh6.jpg', 
      iframe: 'https://www.strava.com/segments/852256/embed',
      price: 47,
      sunday:'Long Run 16 Miles',
      monday: 'Day Off',
      tuesday: 'Reg Run 7 Miles',
      wednesday: 'Intervals 9 Miles',
      thursday: 'Reg Run 8 Miles',
      friday: 'Flex Day 6 Miles',
      saturday: 'AYF 8 Miles',
      qty: 913462
    }, 
    {
      weeknumber:  8,
      description: '36 Miles Prescribed',
      img: 'https://i.imgur.com/QMb2BW8.jpg',
      iframe: 'https://www.strava.com/segments/852256/embed',
      price: 36,
      sunday:'Long Run 16 Miles',
      monday: 'Day Off',
      tuesday: 'Reg Run 7 Miles',
      wednesday: 'Intervals 9 Miles',
      thursday: 'Reg Run 8 Miles',
      friday: 'Flex Day 6 Miles',
      sat: 'AYF 8 Miles',
      qty: 14
    },
    {
      weeknumber: 9,
      description: '48 Miles Prescribed',
      img: 'https://i.imgur.com/QMb2BW8.jpg',
      iframe: 'https://www.strava.com/segments/852256/embed',
      price: 48,
      sunday:'Long Run 16 Miles',
      monday: 'Day Off',
      tuesday: 'Reg Run 7 Miles',
      wednesday: 'Intervals 9 Miles',
      thursday: 'Reg Run 8 Miles',
      friday: 'Flex Day 6 Miles',
      saturday: 'AYF 8 Miles',
      qty: 49
    },
    {
      weeknumber:  10,
      description: '34 Miles Prescribed',
      img: 'https://i.imgur.com/XRsN1cT.jpg',
      iframe: 'https://www.strava.com/segments/852256/embed',
      price: 34,
      sun:'Long Run 16 Miles',
      monday: 'Day Off',
      tuesday: 'Reg Run 7 Miles',
      wednesday: 'Intervals 9 Miles',
      thursday: 'Reg Run 8 Miles',
      friday: 'Flex Day 6 Miles',
      saturday: 'AYF 8 Miles',
      qty: 54
    },
    {
      weeknumber: 11,
      description: '25 Miles Prescribed',
      img: 'https://i.imgur.com/yi2YRnx.jpg',
      iframe: 'https://www.strava.com/segments/852256/embed',
      price: 25,
      sunday:'Long Run 16 Miles',
      monday: 'Day Off',
      tuesday: 'Regular Run 4 Miles',
      wednesday: 'Tempo 6 Miles',
      thursday: 'Flex Day 3 Miles',
      friday: 'Regular Run 4 Miles',
      saturday: 'Regular Run 4 Miles',
      qty: 54
    },
    {
      weeknumber: 12,
      description: '35 Miles Prescribed',
      img: 'https://i.imgur.com/3KEOLq1.jpg',
      iframe: 'https://www.strava.com/segments/852256/embed',
     price: 35,
     sunday:'As You Feel Run 3 Miles',
     monday: 'Day Off',
     tuesday: 'Day Off',
     wednesday: 'Tempo 3 Miles',
     thursday: 'As You Feel Run 3 Miles',
     friday: 'Flex Day 3 Miles',
     saturday: 'RACE DAY',
      qty: 54
    }
    ]

  const express = require('express')
const schedules = express.Router()

const Schedule = require('../models/schedules')

schedules.get('/json', async (req, res) => {
    try {
      const schedules = await Schedule.find()
      res.send(schedules)
    } catch (err) {
      res.send(err.message)
    }
  })
  
  schedules.get('/', async (req, res) => {
    try {
      const schedules = await Schedule.find().sort({ weeknumber: 1 })
      if (!schedules.length) { res.send('waiting for training plan to load <a href="/schedules/seed/newschedules">click here</a>') }
      res.render('./schedules/index.ejs', { schedules })
    } catch (err) {
      res.send(err.message)
    }
  })

  schedules.get('/new', (req, res) => {
    res.render('./schedules/new.ejs')
  })
  
  schedules.get('/:id', async (req, res) => {
    try {
      const schedule = await Schedule.findById(req.params.id)
      console.log(schedule)
      res.render('./schedules/show.ejs', { schedule: schedule })
    } catch (err) {
      res.send('That isn\'t a valid id! <a href="/schedules">Go back</a>')
    }
  })

  schedules.post('/', async (req, res) => {
    try {
      const schedule = await Schedule.create(req.body)
      res.redirect('/schedules/' + schedule.id)
    } catch (err) {
      res.send(err.message)
    }
  })

  schedules.get('/:id/edit', async (req, res) => {
    try {
      const schedule = await Schedule.findById(req.params.id)
      res.render('./schedules/edit.ejs', { schedule: schedule })
    } catch (err) {
      res.send(err.message)
    }
  })

  schedules.put('/:id', async (req, res) => {
    try {
      const schedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.redirect('/schedules/' + schedule.id)
    } catch (err) {
      res.send(err.message)
    }
  })
  
  // Delete : DELETE '/products/:id'      7/7
  schedules.delete('/:id', async (req, res) => {
    try {
      await Schedule.findByIdAndRemove(req.params.id)
      res.redirect('/schedules')
    } catch (err) {
      res.send(err.message)
    }
  })
  
  // ___________________
  // Buy Route - go here on click of buy button
  // ___________________
  
  schedules.put('/:id/buy', async (req, res) => {
    try {
      await Schedule.findByIdAndUpdate(req.params.id, {$inc: { qty: -1 }})
      res.redirect('back')
    } catch (err) {
      res.send(err.message)
    }
  })
  
  // ___________________
  // Seed Route - Vist ONCE to populate database
  // ___________________
  // note uses callbacks rather than async/await
  // you can upgrade to async/await, if you like
  schedules.get('/seed/newschedules', (req, res) => {
    
      
    
  
    Schedule.create(newSchedules, (err, schedule) => {
      if (err) { console.log(err) }
      console.log('SEED: NEW SCHEDULES CREATED!')
      res.redirect('/schedules')
    })
  })
  
  // ___________________
  // ALTERNATE Seed Route - Vist ONCE to populate database
  // ___________________
  // note uses callbacks rather than async/await
  // you can upgrade to async/await, if you like
  const scheduleSeeds = require('../models/seed.js')
  schedules.get('/seed/newschedules/viaseedfile', (req, res) => {
    Product.insertMany(scheduleSeeds, (err, schedules) => {
      if (err) { console.log(err) } else {
        res.send(schedules)
      }
    })
  })
  

  schedules.get('/dropdatabase/cannotundo/areyoursure/reallysure/okthen', (req, res) => {
    Schedule.collection.drop()
    res.send('You did it! You dropped the database!')
  })
  
  // ___________________
  // Module Exports - access this file in server.js
  // ___________________
  // Export router AND require it in server.js Step 3/3
  // Note all three need to be working in order to get server runnning
  module.exports = schedules
  