const express = require('express')  
const path = require('path')
require('dotenv').config()
const cors = require('cors')
const router = require('./routes/index')
require('./config/database')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', router)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname+"/client/build/index.html"))
    })
  }
  const port = process.env.PORT || 4000
  const host = process.env.HOST || '0.0.0.0'
  
  //app.listen(port, host,  console.log('app listening'))
  /*Server port e iniciacion*/
  app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}`))

// app.listen(4000, () => console.log("app listening on port 4000"))