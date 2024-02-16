const TravelClass = require("../models/TravelClass")

let storeTravelClass = async (req, res) => {
    let {name, description} = req.body
    let travelClass = new TravelClass(name,description)
    await travelClass.add()
    if (travelClass.id) {
        res.send('travelClass saved successfully')
    } else {
        res.send('Unable to save travelClass')
    }
}

let updateTravelClass = async (req, res)=>{
    const {id} = req.params;
    const {name, description} = req.body
    let travelClass = await TravelClass.findById(id)
    travelClass.name = name
    travelClass.description = description
    res.send(await travelClass.update())
}

let deleteTravelClass = async (req, res) => {
    const{id} = req.params;    
    res.send(await TravelClass.delete(id))
}

let findTravelClass =  async (req, res)=>{
    const {id} = req.params;
    let travelClass = await TravelClass.findById(id)
    res.send(travelClass);
}

let allTravelClasses =  async (req, res)=>{
    let results = await TravelClass.find()
    res.send(results)
}

module.exports = {storeTravelClass, allTravelClasses, findTravelClass, updateTravelClass, deleteTravelClass}