const Model = require("./Model")
const bcrypt = require('bcrypt')
const connection = require("./connection")

class Customer extends Model {
    
    static async findByEmail(email) {
        let sql = `SELECT * FROM ${this.tableName} WHERE email = ?`
        const [rows, fields] = await connection.execute(sql, [email])
        let row = rows[0] || null;
        if(row != null) {
            return new this(row)
        }
        return null
    }

    static async customerLogin (email, password) {
        let customer = await this.findByEmail(email)
        if (customer != null) {
            if (bcrypt.compareSync(password, customer.password)) {
                return customer
            }
        }
        return null
    }
  
    }



module.exports = Customer