const mongoose = require("mongoose") // new

// Connect to MongoDB database
mongoose
    .connect(process.env.MONO_URI)
    .then(() => {
        console.log('connected')
    }).catch(err => {
        console.log('err:' + err)
    })