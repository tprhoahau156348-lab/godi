import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()


let url = process.env.MYSQL_URI

let pool
try {
    pool = mysql.createPool(url)
    console.log("mysql pool redy (cloud)")
} catch(err) {
    console.log("bad mysql url or somting", err)
}

export default {
    query: async (sql, params) => {
        if (!pool) return [[]]
        try {
            return await pool.execute(sql, params)
        } catch(e) {
            console.log("eror in query!!!", e)
            return [[]]
        }
    }
}