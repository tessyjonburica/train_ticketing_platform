const Schedule = require("../models/Schedule")

let storeSchedule = async (req, res) => {
    let {surname, firstName, email, stationId, gender, dob, password, nin} = req.body
    let schedule = new Schedule(surname, firstName, email, phone, gender, dob, password, nin)
    await schedule.add()
    if (schedule.id) {
        res.send('Schedule saved')
    } else {
        res.send('Unable to save schedule')
    }
}

let updateSchedule = async (req, res)=>{
    const{id} = req.params;
    const{name, distance, stationId, arrivalTime, departureTime, departureStation} = req.body
    let schedule = await Schedule.findById(id)
    
    schedule.name = name;
    schedule.distance = distance;
    schedule.stationId = stationId;
    schedule.arrivalTime = arrivalTime;
    schedule.departureTime = departureTime;
    schedule.departureStation = departureStation;
    res.send(await schedule.update())
}

let deleteSchedule = async (req, res) => {
    const{id} = req.params;
    res.send(await Schedule.delete(id))
}

let findSchedule = async (req, res)=>{
    const {id} = req.params;
    let schedule = await Schedule.findById(id)
    res.send(schedule);
}

let allSchedules  = async (req, res)=>{
    let results = await Schedule.find()
    res.send(results)
}

module.exports = {storeSchedule, allSchedules, findSchedule, updateSchedule, deleteSchedule}