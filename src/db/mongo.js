import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

let url = process.env.MONGO_URI || "mongodb+srv://tprhoahau156348_db_user:qaZI6zKlFIQsKMBe@cluster0.evktjui.mongodb.net/godi"
let client = new MongoClient(url)
let db

client.connect().then(() => {
    console.log("mongo conected succsesfully!!!1")
    db = client.db('godi')
}).catch(e => console.log("eror in mongo conection", e))

export default {
    getDb: () => db
}