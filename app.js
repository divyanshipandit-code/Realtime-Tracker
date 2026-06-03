const express = require('express')
const app = express()



app.get('/', function(req,res){
    res.send('Welcom to our page ')
})



app.listen(3000)