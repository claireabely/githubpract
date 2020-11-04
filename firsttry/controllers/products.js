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
    const products = await Product.find().sort({ name: 1 })
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
  const newProducts =
  module.exports =   [
    {
      name: 'Week 1',
      description: 'Sunday: Long Run, Monday: Day Off, Tuesday: Reg Run 7 Miles, Wednesday: Intervals 9 Miles, Thursday: Reg Run 8 Miles, Friday: Flex Day 6 Miles, Saturday: AYF 8 Miles',
      img: '',
      price: 44,
      Sunday:'Long Run 12 Miles',
      Monday: 'Day Off',
      Tuesday: 'Reg Run 7 Miles',
      Wednesday: 'Intervals 9 Miles',
      qty: 99
    },
    {
      name: 'Week 2',
      description: '45 Miles Prescribed',
      img: '',
      price: 45,
      qty: 1
    },
    {
      name: 'Week 3',
      description: '45 Miles Prescribed',
      img: '',
      price: 45,
      qty: 0
    },
    {name: 'Week 4',
    description: '45 Miles Prescribed',
    img: '',
    description: 'Beautiful, ephemeral, assembly required',
    qty: 45,
    price: 1000000
  },
  {
    name: 'Week 5',
    description: '44 Miles Prescribed',
    img: '',
    description: 'Forget your fears of agricultural genetic engineering and take your taste buds back to the beginning of time with this authentic unaltered fruit',
    price: 44,
    qty: 72
  },
  {
    name: 'Week 6',
    description: '49 Miles Prescribed',
    img: '',
    description: 'Sustainably raised, cage-free, docile mantis shrimp. Makes a for a cuddly companion as long as you never make direct eye contact! Notice: this item is gluten-free, should your relationship go south',
    price: 49,
    qty: 0
  },
  {
    name: 'Week 7',
    description: '47 Miles Prescribed',
    img: '',
    description: 'Get a jump on the next superfood craze. Kohlrabi\'s superiority is marked by its tricky to spell name. Text all your friends: You are going to live forever with the power of kholrabi',
    price: 47,
    qty: 913462
  }, 
  {
    name: 'Week 8',
    description: '36 Miles Prescribed',
    img: '',
    description: 'Stop wasting your time doing one exercise at a time! With the YFM1000 you can do yoga and pilates at the same time! ',
    price: 36,
    qty: 14
  },
  {
    name: 'Week 9',
    description: '48 Miles Prescribed',
    img: '',
    description: 'Capture the beauty of anything and don\'t let it get away! Formaldehyde sold separatey ',
    price: 48,
    qty: 49
  },
  {
    name: 'Week 10',
    description: '34 Miles Prescribed',
    img: '',
    description: 'Bored of your neighborhood? Bored of your typical vacation? Go to the 5th dimension',
    price: 34,
    qty: 54
  },
  {
    name: 'Week 11',
    description: '25 Miles Prescribed',
    img: '',
    description: 'Bored of your neighborhood? Bored of your typical vacation? Go to the 5th dimension',
    price: 25,
    qty: 54
  },
  {
    name: 'Week 12',
    description: '35 Miles Prescribed',
    img: '',
    description: 'Bored of your neighborhood? Bored of your typical vacation? Go to the 5th dimension',
    price: 35,
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
