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

async function updateSoldier(id, doc) {
    let db = mongoDb.getDb()
    let cl = db.collection('welfare')
    await cl.updateOne({soldierId: id}, {$set: doc})
}

export default {
    findSoldier,
    saveSoldier,
    updateSoldier
}