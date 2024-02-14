const connection = require("./connection")

class Schedule {
    constructor(name, distance, stationId, arrivalTime, departureTime, departureStation,  id = null, createdAt = null, updatedAt = null  ) {
        this.id = id
        this.name = name
        this.distance = distance
        this.stationId = stationId
        this.arrivalTime = arrivalTime
        this.departureTime = departureTime
        this.departureStation = departureStation
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

    async add(){
        let sql = `INSERT INTO schedules (name, distance, stationId, arrivalTime, departureTime, departureStation) VALUES ('${this.name}', '${this.distance}', '${this.stationId}', '${this.arrivalTime}', '${this.departureTime}', '${this.departureStation}') `
        const [results, fields] = await connection.query(sql);
        if (results.insertId > 0){
            this.id =results.insertId;
            return this;
        }
        return false;
    }

    static async find() {
        let results = []
        let sql = "SELECT * FROM schedules"
        const [rows] = await connection.query(sql)
        for (const row of rows){
            results.push(new Schedule(row.name, row.distance, row.stationId, row.arrivalTime, row.departureTime, row.departureStation, row.id, row.createdAt, row.updatedAt))
        }
        return results

    }

    static async findById(id) {
        let sql = `SELECT * FROM schedules WHERE id = ${id}`
        const [rows, fields] = await connection.query(sql)
        let row = rows[0] || null;
        if (row != null) {
            return new Schedule(row.name, row.distance, row.stationId, row.arrivalTime, row.departureTime , row.departureStation)
        }
        return null
    }

    async update() {
        let sql = `UPDATE schedules SET name = '${this.name}', distance =${this.distance}', stationId = '${this.stationId}', arrivalTime = '${this.arrivalTime}', departureTime = '${this.departureTime}', departureStation = '${this.departureStation} WHERE id = ${id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }

    async delete() {
        let sql = `DELETE FROM schedules WHERE id = ${id}`
        const [results, fields] = await connection.query(sql)
        return results.affectedRows > 0
    }
}

module.exports = Schedule