const Schedule = require("../models/Schedule")

let storeSchedule = async (req, res) => {
    let schedule = new Schedule(req.body)
    await schedule.add()
    if (schedule.id) {
        res.send('Schedule saved')
    } else {
        res.send('Unable to save schedule')
    }
}

let updateSchedule = async (req, res)=>{
    const{id} = req.params;
    let schedule = await Schedule.findById(id)
    schedule.setProp(req.body)
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