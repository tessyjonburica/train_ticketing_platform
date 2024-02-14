const BookedSeat = require("../models/bookedSeats.js")

let storeBookedSeat = async (req, res) => {
    let {passengerType, travelClassId} = req.body
    let bookedSeat = new BookedSeat(passengerType, travelClassId)
    await bookedSeat.add()
    if (bookedSeat.id) {
        res.send('bookedSeat saved successfully')
    } else {
        res.send('Unable to save bookedSeat')
    }
}

let updateBookedSeat = async (req, res)=>{
    const {id} = req.params;
    const {passengerType, travelClassId} = req.body
    let bookedSeat = await BookedSeat.findById(id)
    bookedSeat.passengerType = passengerType;
    bookedSeat.travelClassId = travelClassId;
    res.send(await BookedSeat.update())
}

let deleteBookedSeat = async (req, res) => {
    const{id} = req.params;    
    res.send(await BookedSeat.delete(id))
}

let findBookedSeat =  async (req, res)=>{
    const {id} = req.params;
    let bookedSeat = await BookedSeat.findById(id)
    res.send(bookedSeat);
}

let allBookedSeats =  async (req, res)=>{
    let results = await BookedSeat.find()
    res.send(results)
}

module.exports = {storeBookedSeat, allBookedSeats, findBookedSeat, updateBookedSeat, deleteBookedSeat}