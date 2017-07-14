const pkg = require('./package')
const config = require('./config/db')
const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const index = require('./route/index')
const news = require('./route/news')
const info = require('./route/info')

// mongoose.connection(config.mongodb)
console.log("mongodb==============>"+config.mongodb)
mongoose.connect(config.mongodb,{useMongoClient:true}); 
mongoose.Promise = global.Promise
var db = mongoose.connection

db.on('error', console.error.bind(console, '连接错误:'));
db.once('open', function() {
    console.log('连接成功');
})

// mongoose.Promise = global.Promise

const app = express()
const port = process.env.PORT || 5050

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(favicon(__dirname + '/src/assets/favicon.ico'))
app.use(express.static('dist'))
app.use('/',index)
app.use('/api',news)
app.use('/api',info)


app.listen(port, () => {
  console.log(`${pkg.name} listening on port ${port}`)
})

module.exports = app