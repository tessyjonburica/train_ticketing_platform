const connection = require("./connection")

class Customer {
    constructor(surname, firstName, email, phone, gender, dob, password, nin, id, createdAt = null, updatedAt = null ) {
        this.id = id
        this.surname = surname
        this.firstName = firstName
        this.email = email
        this.phone = phone
        this.gender = gender
        this.dob = dob
        this.password = password
        this.nin = nin
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

    async add(){
        let sql = `INSERT INTO customers (surname, firstName, email, phone, gender, dob, password, nin) VALUES ('${this.surname}', '${this.firstName}', '${this.email}', '${this.phone}', '${this.gender}', '${this.dob}',  '${this.password}', '${this.nin}' ) `
        const [results, fields] = await connection.query(sql);
        if (results.insertId > 0){
            this.id =results.insertId;
            return this;
        }
        return false;
    }

    static async find() {
        let results = []
        let sql = "SELECT * FROM customers"
        const [rows] = await connection.query(sql)
        for (const row of rows){
            results.push(new Customer(row.surname, row.firstName, row.email, row.phone, row.gender,  row.dob,  row.password,row.nin, row.id, row.createdAt, row.updatedAt))
        }
        return results

    }

    static async findById(id) {
        let sql = `SELECT * FROM customers WHERE id = ${id}`
        const [rows, fields] = await connection.query(sql)
        let row = rows[0] || null;
        if (row != null) {
            return new Customer(row.surname, row.firstName, row.email, row.phone, row.gender,  row.dob, row.password, row.nin, row.id, row.createdAt, row.updatedAt)
        }
        return null
    }

    async update() {
        let sql = `UPDATE customers SET surname = '${surname}', firstName = '${firstName}', email = '${email}', phone = '${phone}, gender = '${gender}', dob = '${dob}', password = '${password}', nin = '${nin}' WHERE id = ${id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }

    async delete() {
        let sql = `DELETE FROM plans WHERE id = ${id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }
}

module.exports = Customer