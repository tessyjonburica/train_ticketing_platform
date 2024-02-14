const connection = require("./connection");

class Amount {
    constructor(amount, id = null, created_at = null, updated_at = null){
        this.amount = amount
        this.id = id
        this.created_at = created_at
        this.updated_at = updated_at

    }
    async add(){
        let sql = `INSERT INTO amounts (amount) VALUES ('${this.amount}')`
        const [results, fields] = await connection.query(sql);
        if(results.insertId > 0){
            this.id = results.insertId
            return this
        }
        return false
    }

    static async find(){
        let results = []
        let sql = 'SELECT * FROM amounts'
        const [rows] = await connection.query(sql)
        for(const row of rows){
            results.push(new Train(row.amount, row.id, row.created_at, row.updated_at))
        }
        return results
    }

    static async findById(id){
        let sql = `SELECT * FROM amounts WHERE id = ${id}`
        const [rows, fields] = await connection.query(sql)
        let row = rows[0] || null;
        if (row != null){
            return new Train(row.amount, row.id, row.created_at, row.updated_at)
        }
        return null
    }
    async update(){
        let sql = `UPDATE amounts SET amount = '${this.amount}'  WHERE id = ${this.id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }
    static async delete(){
        let sql = `DELETE FROM amounts WHERE id = ${id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }
    async delete(){
        let sql = `DELETE FROM amounts WHERE id = ${this.id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }
}


module.exports = Amount