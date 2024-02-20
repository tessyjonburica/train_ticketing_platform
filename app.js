
const express = require('express')
const app = express()
const mysql = require('mysql2/promise');




app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/admin', adminRoute)


app.listen(3000, ()=>console.log('server is listening on port 3000.\nvisit http://localhost:3000'))

