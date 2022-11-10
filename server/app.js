//! 1. npm init // package-lock.json  is going to keep track of all modules that will be installed
//! 2. npm install express /// node_modules

//! 3 import express
const express = require('express'); //this is a function block that has to be called
const app = express(); //invoking the function will return an object (instance of express)
const mustacheExpress = require('mustache-express')
const PORT = process.env.PORT || 3000
// //! 5 create a route handler
// app.get('/', (req, res) => { //get= the request type // arg1 = '/' path: http://localhost:3000// , arg2 = cb/handler (req = info from request, res = send response back to client)
//     res.send("Hello World")
// })

//?set your template engine and the static folders
// app.engine('mustache', 'mustacheExpress()')
// app.engine('mustache', mustacheExpress())
// app.set('view engine', 'mustache')
app.set('views', '../client/views')
app.set('view engine', 'ejs')
app.use(express.static('public'))


//? display all the routes
app.use(require('./routes/index.js'))

//! 4 create and start a server
// let port = 3000
app.listen(PORT, () => { //arg1 = port , arg2 = cb
    console.log(`listening on port: ${port}`)
})


