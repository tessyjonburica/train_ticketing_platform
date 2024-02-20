const Customer = require("../models/Customer")
const bcrypt = require('bcrypt')

let storeCustomer = async (req, res) => {
    let customer = new Customer(req.body)
    customer.password = bcrypt.hashSync(customer.password, 10);
    await customer.add()
    if (customer.id) {
        res.send('Customer saved Successfully')
    } else {
        res.send('Unable to save customer')
    }
}

let updateCustomer = async (req, res) => {
    const { id } = req.params;
    let customer = await Customer.findById(id)
    customer.setProp(req.body)
    res.send(await customer.update())
}

let deleteCustomer = async (req, res) => {
    const { id } = req.params;
    res.send(await Customer.delete(id))
}

let findCustomer = async (req, res) => {
    const { id } = req.params;
    let customer = await Customer.findById(id)
    res.send(customer);
}

let allCustomers = async (req, res) => {
    let results = await Customer.find()
    res.send(results)
}

module.exports = { storeCustomer, allCustomers, findCustomer, updateCustomer, deleteCustomer }