const mongoose = require('mongoose')

const infoSchema = mongoose.Schema({
    "detail_source": String,
    "media_user": {
        "no_display_pgc_icon": Boolean,
        "avatar_url": String,
        "id": String,
        "screen_name": String
    },
    "publish_time": Date,
    "title": String,
    "url": String,
    "is_original": Boolean,
    "is_pgc_article": Boolean,
    "content": String,
    "video_play_count": Number
})

const Info = module.exports = mongoose.model('Info', infoSchema)
