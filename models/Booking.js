const connection = require("../connection")

class Booking {
    constructor(date, arrivalTime, departureTime, scheduleId, customerId, id = null, createdAt = null, updatedAt = null) {
        this.date = date
        this.arrivalTime = arrivalTime
        this.departureTime = departureTime
        this.scheduleId = scheduleId
        this.customerId = customerId
        this.id = id
        this.createdAt = createdAt
        this.updatedAt = updatedAt  
    }

    async add(){
        let sql = `INSERT INTO bookings (date, arrivalTime, departureTime, scheduleId, customerId) VALUES ('${this.date}', '${this.arrivalTime}', '${this.departureTime}','${this.scheduleId}','${this.customerId}' )`
        const [results, fields] = await connection.query(sql);
        if (results.insertId > 0){
            this.id = results.insertId;
            return this;
        } 
        return false;
    }

    static async find() {
        let results = []
        let sql = "SELECT * FROM bookings"
        const [rows] = await connection.query(sql)
        for (const row of rows) {
            results.push(new Booking(row.date, row.arrivalTime, row.departureTime, row.scheduleId, row.customerId, row.id, row.createdAt, row.updatedAt))            
        }
        return results
    }

    static async findById(id) {
        let sql = `SELECT * FROM bookings WHERE id = ${id}`
        const [rows, fields] = await connection.query(sql)
        let row = rows[0] || null;
        if (row != null) {
            return new Booking(row.date, row.arrivalTime, row.departureTime, row.scheduleId, row.customerId, row.id, row.createdAt, row.updatedAt)            
        }
        return null
    }

    async update() {
        let sql = `UPDATE bookings SET date = '${this.date}', arrivalTime = '${this.arrivalTime}', departureTime = ${this.departureTime} WHERE id = ${this.id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }

    static async delete(id) {
        let sql = `DELETE FROM bookings WHERE id = ${id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }
    
    async delete() {
        let sql = `DELETE FROM bookings WHERE id = ${this.id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }

}

module.exports = Booking
