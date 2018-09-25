const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const override = require('method-override')
app.use(override('_method'))
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'hbs')
app.use(require('./routes'))

app.listen(3000, () => {
  console.log('app IS LISTENNINGNNNGGNGNGNGNGN!')
})
