const express = require('express')
const router = express.Router()
const Item = require('./models/item')

router.get('/', (req, res) => {
  Item.find({}).then(items => {
    res.render('index', { items })
  })
})

router.get('/item/new', (req, res) => {
  res.render('new')
})

router.post('/item', (req, res) => {
  console.log(req.body)
  Item.create({
    content: req.body.content,
    status: req.body.status ? true : false
  }).then(() => res.redirect(`/`))
})

router.get('/item/:id', (req, res) => {
  Item.findById(req.params.id).then(item => {
    res.render('show', { item })
  })
})

router.get('/item/:id/edit', (req, res) => {
  Item.findById(req.params.id).then(item => {
    res.render('edit', item)
  })
})

router.put('/item/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, {
    content: req.body.content,
    status: req.body.status ? true : false
  }).then(item => {
    res.redirect(`/item/${item._id}`)
  })
})

router.delete('/item/:id', (req, res) => {
  Item.findByIdAndRemove(req.params.id).then(() => {
    res.redirect('/')
  })
})

module.exports = router
