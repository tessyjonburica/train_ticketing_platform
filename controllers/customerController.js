const Customer = require("../models/Customer")

let storeCustomer = async (req, res) => {
    let {surname, firstName, email, phone, gender, dob, password, nin} = req.body
    let customer = new Customer(surname, firstName, email, phone, gender, dob, password, nin)
    await customer.add()
    if (customer.id) {
        res.send('Customer saved')
    } else {
        res.send('Unable to save customer')
    }
}

let updateCustomer = async (req, res)=>{
    const{id} = req.params;
    const{surname, firstName, email, phone, gender, dob, password, nin} = req.body
    let customer = await Customer.findById(id)
    customer.surname = surname
    customer.firstName = firstName
    customer.email = email
    customer.phone = phone
    customer.gender = gender
    customer.dob = dob
    customer.password = password
    customer.nin = nin
    res.send(await customer.update())
}

let deleteCustomer = async (req, res) => {
    const{id} = req.params;
    res.send(await Customer.delete(id))
}

let findCustomer = async (req, res)=>{
    const {id} = req.params;
    let customer = await Customer.findById(id)
    res.send(customer);
}

let allCustomers  = async (req, res)=>{
    let results = await Customer.find()
    res.send(results)
}

module.exports = {storeCustomer, allCustomers, findCustomer, updateCustomer, deleteCustomer}