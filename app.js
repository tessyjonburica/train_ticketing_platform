const express = require('express')
const app = express()
const mysql = require('mysql2/promise');
const { allCustomers, storeCustomer, findCustomer, updateCustomer, deleteCustomer } = require('./controllers/customerController');
const { allSchedules, storeSchedule, findSchedule, updateSchedule, deleteSchedule } = require('./controllers/scheduleController');
const { allSeats, storeSeat, findSeat, updateSeat, deleteSeat } = require('./controllers/seatController');

// const mysql = require('mysql2/promise')
// const route = express.Router();
// // const adminRoutes = require('./routes/adminRoutes');
const { allStations, storeStation, findStation, updateStation, deleteStation } = require('./controllers/stationController');
const { storeFare, allFares, findFare, updateFare, deleteFare } = require('./controllers/faresController');
const { allBookedSeats, storeBookedSeat, findBookedSeat, updateBookedSeat, deleteBookedSeat } = require('./controllers/bookedSeatController');

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

app.get('/', (req, res) => res.send('Hello Swift Rails!'))


//stations route
app.route('/stations').get(allStations).post(storeStation)
app.route('/stations/:id').get(findStation).put(updateStation).delete(deleteStation)

//fares route
app.route('/fares').get(allFares).post(storeFare)
app.route('/fares/:id').get(findFare).put(updateFare).delete(deleteFare)


//bookedSeats route
app.route('/booked-seats').get(allBookedSeats).post(storeBookedSeat)
app.route('/booked-seats/:id').get(findBookedSeat).put(updateBookedSeat).delete(deleteBookedSeat)



app.listen(3000, ()=>console.log('server is listening on port 3000.\n visit http://localhost:3000'))

