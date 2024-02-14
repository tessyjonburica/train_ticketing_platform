// const Model = require("./Model");
const connection = require("./connection")

class BookedSeats{

    
    constructor( bookingId, seatId, passengerType, phone, email, nin, amount, id = null, createdAt = null, updatedAt = null) {
        this.passengerType = passengerType;
        this.bookingId = bookingId;
        this.seatId = seatId;
        this.phone = phone ;
        this.email =email;
        this.nin = nin ;
        this.amount = amount ;
        this.createdAt = createdAt
        this.updatedAt = updatedAt  
    }

    async add(){
        let sql = `INSERT INTO bookedseats (bookingId, seatId, passengerType, phone, email, nin, amount) 
        VALUES ('${this.bookingId}', '${this.seatId}', '${this.passengerType}', '${this.phone}, '${this.nin}', '${this.amount}')`
        const [results, fields] = await connection.query(sql);
        if (results.insertId > 0){
            this.id = results.insertId;
            return this;
        } 
        return false;
    }

    static async find() {
        let results = []
        let sql = "SELECT * FROM bookedseats"
        const [rows] = await connection.query(sql)
        for (const row of rows) {
            results.push(new BookedSeats(row.bookingId, row.seatId, row.passengerType, row.phone, row.email, row.nin, row.amount, row.id, row.createdAt, row.updatedAt))            
        }
        return results
    }

    static async findById(id) {
        let sql = `SELECT * FROM bookedseats WHERE id = ${id}`
        const [rows, fields] = await connection.query(sql)
        let row = rows[0] || null;
        if (row != null) {
            return new BookedSeats(row.bookingId, row.seatId, row.passengerType, row.phone, row.email, row.nin, row.amount, row.id, row.createdAt, row.updatedAt)
        }
        return null
    }

    async update() {
        let sql = `UPDATE bookedseats SET bookinId = '${this.bookingId}', seatId = '${this.seatId}', passengerType = '${this.passengerType}', phone = '${this.phone}', email = '${this.email}', nin = '${this.nin}', amount = '${this.amount}'`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }

    static async delete(id) {
        let sql = `DELETE FROM bookedseats WHERE id = ${id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }
    
    async delete() {
        let sql = `DELETE FROM bookedseats WHERE id = ${this.id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }

}
    


module.exports = BookedSeats