const express = require('express');
const cors = require('cors')
const { default: mongoose } = require('mongoose');
const shoesRouter = require('./routes/shoes-routes')

const PORT = 8008;
const URL = 'mongodb+srv://VzutiAdmin:HttnfUwizP9PG0DX@cluster0.cb6gmpw.mongodb.net/vzuti_in_ua';

const app = express()
app.use(express.json())
app.use(shoesRouter)
app.use(cors())

mongoose
    .connect(URL)
    .then(() => console.log('Connected to db - MongoDB')
    )
    .catch((err) => console.log(`Something went wrong, error: ${err}`))


app.listen(PORT, (err) => {
    err ? console.log(err) : console.log('Server is running')
})

