const express = require('express')
const app = express()
const mysql = require('mysql2/promise');
const apiClientRoute = require('./routes/apiClientRoute');
const apiAdminRoute = require('./routes/apiAdminRoute');



app.use(express.urlencoded({extended: true}));




app.use("/admin", apiAdminRoute);
app.use(apiClientRoute);


app.listen(3000, ()=>console.log('server is listening on port 3000.\nvisit http://localhost:3000'))
