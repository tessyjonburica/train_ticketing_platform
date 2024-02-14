const Seat = require("../models/Seat")

let storeSeat = async (req,res) => {
    let {code, coachId, customerId, classId, status} = req.body
    let seat = new Seat(code, coachId, customerId, classId, status)
    await seat.add()
    if (seat.id) {
        res.send('Seat saved successfully')
    } else {
        res.send('Unable to save seat')
    }
}

let updateSeat = async (req, res)=> {
    const {id} = req.params;
    const {code, coachId, customerId, classId, status} = req.body
    let seat = await Seat.findById(id)
    seat.classId = classId
    seat.coachId = coachId
    seat.code = code
    seat.customerId = customerId
    seat.status = status
    res.send(await seat.update())
}

let deleteSeat = async (req, res) => {
    const{id} = req.params;
    res.send(await Seat.delete(id))
}

let findSeat = async (req, res) =>{
    const{id} =req.params;
    let seat = await Seat.findById(id)
    res.send(seat);
}

let allSeats = async (req, res) =>{
    let results = await Seat.find()
    res.send(results)
}

module.exports = {storeSeat, allSeats, findSeat, updateSeat, deleteSeat}