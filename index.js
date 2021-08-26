const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

// import routers
const indexRouter = require('./routes/index')
const tabuadaRouter = require('./routes/tabuada')

//------------------------------------------------------------------------------
// view engine configuration
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/tabuada', tabuadaRouter)

// listen on port 3000
app.listen(port, () => console.log('Tabuada Server on port ' + port))
