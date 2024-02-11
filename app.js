
const express = require('express')
const mysql = require('mysql2/promise')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => res.send('Hello Swift Rails!'))

app.get('/customers', async (req, res)=>{
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'train_ticketing'
    })
    let sql = "SELECT * FROM customers"
    let [results, fields] = await connection.query(sql)
    res.send(results)

} )

app.post('/customers', async (req, res)=>{
    let {surname, firstName, email, phone, gender, dob, password, nin} = req.body
    let sql = `INSERT INTO customers (surname, firstName, email, phone, gender, dob, password, nin) VALUES ('${surname}', '${firstName}', '${email}', '${phone}', '${gender}', '${password}', '${dateOfBirth}', '${nin}' ) `
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'train_ticketing'
    })
   
    const [results] = await connection.query(sql)
    res.send(results)

} )



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

