const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
  res.send('Hello Express!')
})

router.get('/test', (req,res) => {
  res.send('test data!')
})

module.exports = router