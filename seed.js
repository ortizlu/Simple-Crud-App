const Item = require('./models/item')

Item.find({}).remove(() => {
  Item.create({
    content: 'wash dog',
    status: false
  })
})
