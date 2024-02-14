
// const express = require('express')
// const mysql = require('mysql2/promise')
// const app = express()
// const port = 3000

// app.use(express.urlencoded({extended: true}));


// app.get('/', (req, res) => res.send('Hello SwiftRails!'))

// app.get('/bookings', async (req, res)=>{
//     const connection = await mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'train_ticketing'
//     })
//     let sql = "SELECT * FROM bookings"
//     let [results, fields] = await connection.query(sql)
//     res.send(results)

// } )

// app.post('/bookings', async (req, res)=>{
//     let {date, arrivalTime, departureTime, scheduleId, customerId} = req.body
//     let sql = `INSERT INTO bookings (date, arrivalTime, departureTime, scheduleId, customerId) VALUES ('${date}', '${arrivalTime}', '${departureTime}', '${scheduleId}', '${customerId}' ) `
//     const connection = await mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'train_ticketing'
//     })
   
//     const [results, fields] = await connection.query(sql)
//     res.send(results)

// } )



// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const express = require('express');
const app = express()
const { allCoaches, storeCoach, findCoach, updateCoach, deleteCoach } = require('./controllers/coachController');
const { allBookings, storeBooking, findBooking, updateBooking, deleteBooking } = require('./controllers/bookingController');

app.use(express.urlencoded({extended: true}));


// Coach route
app.route('/coaches').get(allCoaches).post(storeCoach)
app.route('/coaches/:id').get(findCoach).put(updateCoach).delete(deleteCoach)

//Booking route
app.route('/bookings').get(allBookings).post(storeBooking)
app.route('/bookings/:id').get(findBooking).put(updateBooking).delete(deleteBooking)

app.listen(3000, ()=>console.log('server is listening on port 3000.\n visit http://localhost:3000'))




