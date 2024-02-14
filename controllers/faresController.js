const Fare = require("../models/fares.js")

let storeFare = async (req, res) => {
    let {passengerType, travelClassId} = req.body
    let fare = new Fare(passengerType, travelClassId)
    await fare.add()
    if (fare.id) {
        res.send('fare saved successfully')
    } else {
        res.send('Unable to save fare')
    }
}

let updateFare = async (req, res)=>{
    const {id} = req.params;
    const {passengerType, travelClassId} = req.body
    let fare = await fare.findById(id)
    fare.passengerType = passengerType;
    fare.travelClassId = travelClassId;
    
    res.send(await Fare.update())
}

let deleteFare = async (req, res) => {
    const{id} = req.params;    
    res.send(await Fare.delete(id))
}

let findFare =  async (req, res)=>{
    const {id} = req.params;
    let fare = await Fare.findById(id)
    res.send(fare);
}

let allFares =  async (req, res)=>{
    let results = await Fare.find()
    res.send(results)
}

module.exports = {storeFare, allFares, findFare, updateFare, deleteFare}