const express = require('express')
const router = express.Router()
const Infos = require('../models/info')

var data = {
        code: Number,
        msg: String,
        data: {
            content: {},
            current: Number
        }
    }
    // 查询info
router.get('/info', (req, res) => {
        Infos.find({})
            .then(info => {
                console.log(JSON.stringify(info,null,2))
                data.code = 200
                data.msg = "request ok"
                data.data.content = info
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


module.exports = router