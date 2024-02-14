const express = require('express')
const mysql = require('mysql2/promise');
const { allCustomers, storeCustomer, findCustomer, updateCustomer, deleteCustomer } = require('./controllers/customerController');
const { allSchedules, storeSchedule, findSchedule, updateSchedule, deleteSchedule } = require('./controllers/scheduleController');
const { allSeats, storeSeat, findSeat, updateSeat, deleteSeat } = require('./controllers/seatController');
const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}));


//Customer route
app.route('/customers').get(allCustomers).post(storeCustomer)
app.route('/customers/:id').get(findCustomer).put(updateCustomer).delete(deleteCustomer)

//Schedule route
app.route('/schedules').get(allSchedules).post(storeSchedule)
app.route('/schedules/:id').get(findSchedule).put(updateSchedule).delete(deleteSchedule)

//Seat route
app.route('/seats').get(allSeats).post(storeSeat)
app.route('/seats/:id').get(findSeat).put(updateSeat).delete(deleteSeat)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))