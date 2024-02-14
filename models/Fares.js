// const Model = require("./Model");
const connection = require("./connection")
class Fares{

    constructor( passengerType, travelClassId, id = null, createdAt = null, updatedAt = null) {
        this.id = id;
        this.passengerType = passengerType;
        this.travelClassId = travelClassId;
        this.createdAt = createdAt
        this.updatedAt = updatedAt  
    }

    async add(){
        let sql = `INSERT INTO fares (passengerType, travelClassId) 
        VALUES ('${this.passengerType}', '${this.travelClassId}')`
        const [results, fields] = await connection.query(sql);
        if (results.insertId > 0){
            this.id = results.insertId;
            return this;
        } 
        return false;
    }

    static async find() {
        let results = []
        let sql = "SELECT * FROM fares"
        const [rows] = await connection.query(sql)
        for (const row of rows) {
            results.push(new Fares(row.passengerType, row.travelClassId, row.id, row.createdAt, row.updatedAt))            
        }
        return results
    }

    static async findById(id) {
        let sql = `SELECT * FROM fares WHERE id = ${id}`
        const [rows, fields] = await connection.query(sql)
        let row = rows[0] || null;
        if (row != null) {
            return new Fares(row.passengerType, row.travelClassId, row.id, row.createdAt, row.updatedAt)
        }
        return null
    }

    async update() {
        let sql = `UPDATE fares SET passengerType = '${this.passengerType}', travelClassId = '${this.travelClassId}'`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }

    static async delete(id) {
        let sql = `DELETE FROM fares WHERE id = ${id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }
    
    async delete() {
        let sql = `DELETE FROM fares WHERE id = ${this.id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }

}


module.exports = Fares