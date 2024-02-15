const connection = require("../connection")

class Coach {
    constructor(code, trainId, travelClassId, id = null, createdAt = null, updatedAt = null) {
        this.code = code
        this.trainId = trainId
        this.travelClassId = travelClassId
        this.id = id
        this.createdAt = createdAt
        this.updatedAt = updatedAt  
    }

    async add(){
        let sql = `INSERT INTO coaches (code, trainId, travelClassId) VALUES ('${this.code}', '${this.trainId}', ${this.travelClassId})`
        const [results, fields] = await connection.query(sql);
        if (results.insertId > 0){
            this.id = results.insertId;
            return this;
        } 
        return false;
    }

    static async find() {
        let results = []
        let sql = "SELECT * FROM coaches"
        const [rows] = await connection.query(sql)
        for (const row of rows) {
            results.push(new Coach(row.code, row.trainId, row.travelClassId, row.id, row.createdAt, row.updatedAt))            
        }
        return results
    }

    static async findById(id) {
        let sql = `SELECT * FROM coaches WHERE id = ${id}`
        const [rows, fields] = await connection.query(sql)
        let row = rows[0] || null;
        if (row != null) {
            return new Coach(row.code, row.trainId, row.travelClassId, row.id, row.createdAt, row.updatedAt)            
        }
        return null
    }

    async update() {
        let sql = `UPDATE coaches SET code = '${this.code}', trainId = '${this.trainId}', travelClassId = ${this.travelClassId} WHERE id = ${this.id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }

    static async delete(id) {
        let sql = `DELETE FROM coaches WHERE id = ${id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }
    
    async delete() {
        let sql = `DELETE FROM coaches WHERE id = ${this.id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }

}

module.exports = Coach
