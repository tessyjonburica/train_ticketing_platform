const Train = require("../models/Train")

let storeTrain = async (req, res) => {
    let {code} = req.body
    let train = new Train(code)
    await train.add()
    if (train.id) {
        res.send('Train saved successfully')
    } else {
        res.send('Unable to save Train')
    }
}

let updateTrain = async (req, res)=>{
    const {id} = req.params;
    const {code} = req.body
    let train = await Train.findById(id)
    train.code = code
    res.send(await train.update())
}

let deleteTrain = async (req, res) => {
    const{id} = req.params;    
    res.send(await Train.delete(id))
}

let findTrain =  async (req, res)=>{
    const {id} = req.params;
    let train = await Train.findById(id)
    res.send(train);
}

let allTrains =  async (req, res)=>{
    let results = await Train.find()
    res.send(results)
}

module.exports = {storeTrain, allTrains, findTrain, updateTrain, deleteTrain}