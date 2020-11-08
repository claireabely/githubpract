
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const scheduleSchema = new Schema({
  sunday: {
    type: String,
    min: [0, 'Price can\'t be less than 0. No capatalist joyrides here!']
},
monday: {
  type: String,
  min: [0, 'Price can\'t be less than 0. No capatalist joyrides here!']
},
tuesday: {
  type: String,
  min: [0, 'Price can\'t be less than 0. No capatalist joyrides here!']
},
wednesday: {
  type: String,
  min: [0, 'Price can\'t be less than 0. No capatalist joyrides here!']
},
thursday: {
  type: String,
  min: [0, 'Price can\'t be less than 0. No capatalist joyrides here!']
},
friday: {
  type: String,
  min: [0, 'Price can\'t be less than 0. No capatalist joyrides here!']
},
saturday: {
  type: String,
  min: [0, 'Price can\'t be less than 0. No capatalist joyrides here!']
},
  weeknumber: {
    type: Number,
    min: [0, 'Quantity can\'t be less than 0. This ain\'t no charity!']
},
iframe: {
    type: String,
    min: [0, 'Price can\'t be less than 0. No capatalist joyrides here!']
},
  description: String,
  img: String,
  price: {
    type: Number,
    min: [0, 'Quantity can\'t be less than 0. This ain\'t no charity!']
  },
  qty: {
    type: Number,
    min: [0, 'Price can\'t be less than 0. No capatalist joyrides here!']
  },
  
})

const Schedule = mongoose.model('Schedule', scheduleSchema)


module.exports = Schedule