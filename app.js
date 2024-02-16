
// const express = require ('express')
// const mysql = require('mysql2/promise')
// const app = express()
// const port = 3000

// app.use(express.urlencoded({extended: true}));


// app.get('/', (req, res) => res.send('Hello SwiftRails!'))

// app.get('/trains', async (req, res)=>{
//     const connection = await mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'train_ticketing',
//     })
//     let sql = "SELECT * FROM trains"
//     let [results, fields] = await connection.query(sql)
//     res.send(results)

// } )

// app.post('/trains', async (req, res)=>{
//     let {code} = req.body
//     let sql = `INSERT INTO trains (code) VALUES ('${code}') `
//     const connection = await mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'train_ticketing',
//     })
//     const [results, fields] = await connection.query(sql)
//     res.send(results)
// });

// app.get('/trains/:id', async (req, res)=>{
//     const {id} = req.params;
//     let sql = `SELECT * FROM trains WHERE id = ${id}`
//     const connection = await mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'train_ticketing',
//     })
//     const [results, fields] = await connection.query(sql)
//     res.send(results[0]);
// });

// app.put('/trains/:id', async (req, res)=>{
//     const {id} = req.params;
//     const {code} = req.body
//     let sql = `UPDATE trains SET code = '${code}'  WHERE id = ${id}`
//     const connection = await mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'train_ticketing',
//     })
//     const [results, fields] = await connection.query(sql)
//     res.send(results)
// });

// app.delete('/trains/:id' ,async (req, res) => {
//     const{id} = req.params;
//     let sql = `DELETE FROM trains WHERE id = ${id}`
//     const connection = await mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'train_ticketing',
//     })
//     const [results, fields] = await connection.query(sql)
//     res.send(results)
// });




// // app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// app.listen(3000, ()=>console.log('server is listening on port 3000.\n visit http://localhost:3000'))


const express = require('express');
const app = express()
const { allTrains, storeTrain, findTrain, updateTrain, deleteTrain } = require('./controllers/trainController');
const { allAmounts, storeAmount, findAmount, updateAmount, deleteAmount } = require('./controllers/amountController');
const { allTravelClasses, storeTravelClass, findTravelClass, updateTravelClass, deleteTravelClass } = require('./controllers/travelClassController');
const amountValidator = require('./validators/amountValidator');
const trainValidator = require('./validators/trainValidator');
const travelClassValidator = require('./validators/travelClassValidator');

app.use(express.urlencoded({extended: true}));


//Trains route
app.route('/trains').get(allTrains).post(trainValidator, storeTrain)
app.route('/trains/:id').get(findTrain).put(trainValidator, updateTrain).delete(deleteTrain)

//Amounts route
app.route('/amounts').get(allAmounts).post(amountValidator, storeAmount)
app.route('/amounts/:id').get(findAmount).put(amountValidator, updateAmount).delete(deleteAmount)

//TravelClasses route
app.route('/travelClasses').get(allTravelClasses).post(travelClassValidator, storeTravelClass)
app.route('/travelClasses/:id').get(findTravelClass).put(travelClassValidator, updateTravelClass).delete(deleteTravelClass)

app.listen(3000, ()=>console.log('server is listening on port 3000.\n visit http://localhost:3000'))
