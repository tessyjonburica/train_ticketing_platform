const connection = require("./connection")

class Seat {
    constructor(code, coachId, customerId, classId, status, id = null, created_at = null, updated_at = null) {
        this.id = id;
        this.code = code;
        this.coachId = coachId;
        this.customerId = customerId;
        this.classId = classId;
        this.status = status;
        this.created_at = created_at;
        this.updated_at = updated_at;

    }

    async add(){
        let sql = `INSERT INTO seats (code, coachId, customerId, classId, status) VALUES ( '${this.code}', '${this.coachId}',  '${this.customerId}', '${this.classId}',    '${this.status}')`
        const [results, fields] = await connection.query(sql);
        if (results.insertId > 0) {
            this.id = results.insertId;
            return this;
        }
        return false
    }

    static async find() {
        let results = []
        let sql = "SELECT * FROM plans"
        const [rows] = await connection.query(sql)
        for (const row of rows) {
            results.push(new Seat(row.code,row.coachId,  row.customerId, row.classId, row.status, row.id, row.created_at, row.updated_at))

        }
        return results
    }

    static async findById(id) {
        let sql = `SELECT * FROM seats WHERE id = ${id}`
        const [rows, fields] = await connection.query(sql)
        let row = rows[0] || null;
        if (row != null) {
            return new Seat( row.code,row.coachId, row.customerId, row.classId,  row.status, row.id, row.created_at, row.updated_at)
        }
        return null
    }

    async update() {
        let sql =  `UPDATE seats SET code = '${this.code}',coachId = '${this.coachId}', customerId = '${this.customerId}',  classId = '${this.classId}', status = '${this.status}' WHERE  id = ${this.id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }

    static async delete(id) {
        let sql = `DELETE FROM seats WHERE id = ${id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }

    
}

module.exports = Seat