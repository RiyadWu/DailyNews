const express = require('express')
const router = express.Router()
const News = require('../models/news')
const Top = require('../models/top')
const Info = require('../models/info')

var data = {
        code: Number,
        msg: String,
        data: {
            content: [],
            current: Number
        }
    }
    // 查询news
router.get('/news', (req, res) => {
        News.find({})
            .sort({ publish_time: -1 })
            .skip(req.query.page * 5 - 5)
            .limit(5)
            .then(news => {
                data.code = 200
                data.msg = "request ok"
                data.data.content = news
                data.data.current = req.query.page
                    // console.log(data)
                res.json(data)
            })
            .catch(err => {
                data.code = 105
                data.msg = "request err"
                data.data = null
                res.json(data)
            })
    })
    // news info
router.get('/info', (req, res) => {
        Info.find({})
            .then(info => {
            console.log("info=========>"+info)
                res.json(info)
            })
            .catch(err => {
                res.json(err)
            })
    })
    // add news
router.post('/addnews', (req, res) => {
        News.create(req.body, (err, news) => {
            if (err) {
                res.json(err)
            } else {
                res.json(news)
            }
        })

    })
    // del news
router.delete('/news/:id', (req, res) => {
    Movie.findOneAndRemove({
            _id: req.params.id
        })
        .then(news => res.send(`${news.title}删除成功`))
        .catch(err => res.json(err))
})

module.exports = router
