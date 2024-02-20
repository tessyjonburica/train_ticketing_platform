const express = require('express')
const app = express()
const mysql = require('mysql2/promise');
const apiClientRoute = require('./routes/apiClientRoute');
const apiAdminRoute = require('./routes/apiAdminRoute');



app.use(express.urlencoded({extended: true}));

// Coach route
app.route('/coaches').get(allCoaches).post(coachValidator, storeCoach)
app.route('/coaches/:id').get(findCoach).put(updateCoach).delete(deleteCoach)

//Booking route
app.route('/bookings').get(allBookings).post(bookingValidator, storeBooking)
app.route('/bookings/:id').get(findBooking).put(updateBooking).delete(deleteBooking)


//Customer route

app.route('/customers').get(allCustomers).post(customerValidator ,storeCustomer)
app.route('/customers/:id').get(findCustomer).put(customerValidator,updateCustomer).delete(deleteCustomer)


//Schedule route
app.route('/schedules').get(allSchedules).post(scheduleValidator,storeSchedule)
app.route('/schedules/:id').get(findSchedule).put(scheduleValidator,updateSchedule).delete(deleteSchedule)

//Seat route
app.route('/seats').get(allSeats).post(seatValidator,storeSeat)
app.route('/seats/:id').get(findSeat).put(seatValidator,updateSeat).delete(deleteSeat)

app.get('/', (req, res) => res.send('Hello Swift Rails!'))


//stations route
app.route('/stations').get(allStations).post(stationValidator, storeStation)
app.route('/stations/:id').get(findStation).put(updateStation).delete(deleteStation)

//fares route
app.route('/fares').get(allFares).post(fareValidator, storeFare)
app.route('/fares/:id').get(findFare).put(updateFare).delete(deleteFare)


//bookedSeats route
app.route('/booked-seats').get(allBookedSeats).post(bookedSeatValidator, storeBookedSeat)
app.route('/booked-seats/:id').get(findBookedSeat).put(updateBookedSeat).delete(deleteBookedSeat)


//trains route
app.route('/trains').get(allTrains).post(storeTrain)
app.route('/trains/:id').get(findTrain).put(updateTrain).delete(deleteTrain)

//travelclasses route
app.route('/travelclasses').get(allTravelClasses).post(storeTravelClass)
app.route('/travelclasses/:id').get(findTravelClass).put(updateTravelClass).delete(deleteTravelClass)

//Amount route
app.route('/amounts').get(allAmounts).post(storeAmount)
app.route('/amounts/:id').get(findAmount).put(updateAmount).delete(deleteAmount)

// Admin route
// app.route('/login').get((req, res)=>{}).post(login)
// app.route('/admins').get(allAdmins).post(storeAdmin)
// app.route('/admins/:id').get(findAdmin).put(updateAdmin).delete(deleteAdmin)


app.route('/admins').get(allAdmins).post(storeAdmin)
app.route('/admins/:id').get(findAdmin).put(updateAdmin).delete(deleteAdmin)

app.listen(3000, ()=>console.log('server is listening on port 3000.\nvisit http://localhost:3000'))
