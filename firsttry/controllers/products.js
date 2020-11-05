// ___________________
// Dependencies
// ___________________
// require express so we can use router
const express = require('express')
const products = express.Router()

// ___________________
// Models
// ___________________
// get access to the Product model
const Product = require('../models/products')

// ___________________
// See json Route
// ___________________
products.get('/json', async (req, res) => {
  try {
    const products = await Product.find()
    res.send(products)
  } catch (err) {
    res.send(err.message)
  }
})

// ___________________
// 7 Restful Routes
// ___________________
// Index  : GET    '/products'          1/7
// Show   : GET    '/products/:id'      2/7
// New    : GET    '/prodcuts/new'      3/7
// Create : POST   '/products'          4/7
// Edit   : GET    '/products/:id/edit' 5/7
// Update : PUT    '/products/:id'      6/7
// Delete : DELETE '/products/:id'      7/7

// Index  : GET    '/products'          1/7
products.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ weeknumber: 1 })
    if (!products.length) { res.send('waiting for database to be seeded <a href="/products/seed/newproducts">go here</a>') }
    res.render('./products/index.ejs', { products })
  } catch (err) {
    res.send(err.message)
  }
})

// New    : GET    '/products/new'      3/7
// Order matters! must be above /prodcuts/:id or else this route will never get hit
products.get('/new', (req, res) => {
  res.render('./products/new.ejs')
})

// Show   : GET    '/products/:id'      2/7
products.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    console.log(product)
    res.render('./products/show.ejs', { product: product })
  } catch (err) {
    res.send('That isn\'t a valid id! <a href="/products">Go back</a>')
  }
})

// Create : POST   '/products'          4/7
products.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.redirect('/products/' + product.id)
  } catch (err) {
    res.send(err.message)
  }
})

// Edit   : GET    '/products/:id/edit' 5/7
products.get('/:id/edit', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.render('./products/edit.ejs', { product: product })
  } catch (err) {
    res.send(err.message)
  }
})

// Update : PUT    '/products/:id'      6/7
products.put('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.redirect('/products/' + product.id)
  } catch (err) {
    res.send(err.message)
  }
})

// Delete : DELETE '/products/:id'      7/7
products.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id)
    res.redirect('/products')
  } catch (err) {
    res.send(err.message)
  }
})

// ___________________
// Buy Route - go here on click of buy button
// ___________________

products.put('/:id/buy', async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, {$inc: { qty: -1 }})
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
products.get('/seed/newproducts', (req, res) => {
  const newProducts =  [
    {
      weeknumber: 1,
      description: 'Welcome to your 12-Week Moderate training plan. One of the keys to your success in the marathon will be your ability to train at the right intensity (pace). Our major goal for Week 1 is to start this process. Do your best to follow the prescribed paces, and take note of how you feel while doing it. Your ability to perceive your effort is a better indicator of intensity than even heart rate. This week you will jump right in and run Marathon-Pace Pickups. If this first week is overly difficult, we suggest that you switch to the Conservative program until your fitness improves. If this first week seems too easy, we suggest staying patient. Not all training needs to feel really hard. If, after another week, you still think the paces feel too easy, we suggest that you run a local road race. Your time from that race will update all your training paces and marathon goal pace ranges and generate a more fine-tuned training plan for you.',
      img: 'https://i.imgur.com/uS2hTf0.png',
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
      img: '',
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
      img: '',
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
    img: '',
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
    img: '',
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
    img: '',
    price: 49,
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
    img: '',
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
    img: '',
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
    img: '',
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
    img: '',
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
    img: '',
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
    img: '',
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
  
    
  

  Product.create(newProducts, (err, product) => {
    if (err) { console.log(err) }
    console.log('SEED: NEW PRODUCTS CREATED!')
    res.redirect('/products')
  })
})

// ___________________
// ALTERNATE Seed Route - Vist ONCE to populate database
// ___________________
// note uses callbacks rather than async/await
// you can upgrade to async/await, if you like
const productSeeds = require('../models/seed.js')
products.get('/seed/newproducts/viaseedfile', (req, res) => {
  Product.insertMany(productSeeds, (err, products) => {
    if (err) { console.log(err) } else {
      res.send(products)
    }
  })
})

// ___________________
// Mistakes happen! Drop Database - Vist ONCE to drop your database. WARNING! YOU CANNOT UNDO THIS!
// Why is this a bad idea for production?
// ___________________
products.get('/dropdatabase/cannotundo/areyoursure/reallysure/okthen', (req, res) => {
  Product.collection.drop()
  res.send('You did it! You dropped the database!')
})

// ___________________
// Module Exports - access this file in server.js
// ___________________
// Export router AND require it in server.js Step 3/3
// Note all three need to be working in order to get server runnning
module.exports = products
