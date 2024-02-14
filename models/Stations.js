// const Model = require("./Model");
const connection = require("./connection")

class Station {

    constructor( stationCode, name, city, id = null, createdAt = null, updatedAt = null) {
        this.id = id;
        this.stationCode = stationCode;
        this.name = name;
        this.city = city;
        this.createdAt = createdAt
        this.updatedAt = updatedAt  
    }

    async add(){
        let sql = `INSERT INTO stations (stationCode, name, city) 
        VALUES ('${this.stationCode}', '${this.name}', '${this.city}')`
        const [results, fields] = await connection.query(sql);
        if (results.insertId > 0){
            this.id = results.insertId;
            return this;
        } 
        return false;
    }

    static async find() {
        let results = []
        let sql = "SELECT * FROM stations"
        const [rows] = await connection.query(sql)
        for (const row of rows) {
            // console.log(row);
            results.push(new Station(row.stationCode, row.name, row.city, row.id, row.createdAt, row.updatedAt))            
        }
        return results
    }

    static async findById(id) {
        let sql = `SELECT * FROM stations WHERE id = ${id}`
        const [rows, fields] = await connection.query(sql)
        let row = rows[0] || null;
        if (row != null) {
            return new Station(row.stationCode, row.name, row.city, row.id, row.createdAt, row.updatedAt)
        }
        return null
    }

    async update() {
        let sql = `UPDATE stations SET stationCode = '${this.stationCode}', name = '${this.name}', city = '${this.city}'`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }

    static async delete(id) {
        let sql = `DELETE FROM stations WHERE id = ${id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }
    
    async delete() {
        let sql = `DELETE FROM stations WHERE id = ${this.id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }

}




module.exports = Station
