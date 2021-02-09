const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment: String
})

const Comment = mongoose.model('comment',commentSchema)

module.exports = Comment