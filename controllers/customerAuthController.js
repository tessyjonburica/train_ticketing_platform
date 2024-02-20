const jwt = require('jsonwebtoken');
const Customer = require('../models/Customer');
const customerLogin = async (req, res) => {
    const {email, password} = req.body;
    let customer = await Customer.customerLogin(email, password);
    if (customer) {
        const token = jwt.sign({email: customer.email}, 'swiftrails', {expiresIn: '2hrs'});
        // localStorage.setItem("token", token);
        return res.json({message: 'Login successful', token});

    }
    return res.status(401).json({message: 'Invalid credentials'});    
}


module.exports = {customerLogin}