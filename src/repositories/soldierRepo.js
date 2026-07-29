import mongoDb from '../db/mongo.js'

async function findSoldier(id) {
    let db = mongoDb.getDb()
    let cl = db.collection('welfare')
    return await cl.findOne({soldierId: id})
}

async function saveSoldier(doc) {
    let db = mongoDb.getDb()
    let cl = db.collection('welfare')
    await cl.insertOne(doc)
}

export default {
    findSoldier,
    saveSoldier
}