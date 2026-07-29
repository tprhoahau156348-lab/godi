import soldierService from '../services/soldierService.js'

async function postSolder(req, res) {
    try {
        let result = await soldierService.addSol(req.params.soldierId, req.body)
        if (result === "exsists") {
            return res.status(409).send("allready exsist")
        }
        res.status(201).send(result)
    } catch(err) {
        console.log("eror in post solder", err)
        res.status(500).send("big eror")
    }
}

async function getSolder(req, res) {
    try {
        let result = await soldierService.getSol(req.params.soldierId)
        if (!result) {
            return res.status(404).send("not found")
        }
        res.status(200).send(result)
    } catch(err) {
        console.log("eror getin solder", err)
        res.status(500).send("big eror")
    }
}

async function patchSolder(req, res) {
    res.status(501).send("not finishd yet")
}

export default {
    postSolder,
    getSolder,
    patchSolder
}
