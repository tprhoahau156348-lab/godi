import budgetService from '../services/budgetService.js'

async function postBudget(req, res) {
    try {
        let result = await budgetService.createBudget(req.body)
        if (result === "misssing") return res.status(400).send("misssing data")
        if (result === "allready exsist") return res.status(409).send("budget already exists")
        res.status(201).json({ id: result })
    } catch(err) {
        console.log("eror in create budget", err)
        res.status(500).send("big eror")
    }
}

async function getBudget(req, res) {
    try {
        let result = await budgetService.getAllBudgets()
        res.status(200).json(result)
    } catch(err) {
        console.log("eror getin budgets", err)
        res.status(500).send("big eror")
    }
}

async function postTransaction(req, res) {
    try {
        let result = await budgetService.addTransaction(req.params.id, req.body)
        if (result === "misssing") return res.status(400).send("misssing data")
        if (result === "not found") return res.status(404).send("budget not found")
        if (result === "exceeds") return res.status(400).send("amount exceeds budget")
        res.status(201).json({ id: result })
    } catch(err) {
        console.log("eror in post tx", err)
        res.status(500).send("big eror")
    }
}

async function getTransactions(req, res) {
    try {
        let result = await budgetService.getTransactions(req.params.id)
        res.status(200).json(result)
    } catch(err) {
        console.log("eror getin tx", err)
        res.status(500).send("big eror")
    }
}

async function getSpend(req, res) {
    try {
        let result = await budgetService.getSpend(req.params.id)
        if (!result) return res.status(404).send("budget not found")
        res.status(200).json(result)
    } catch(err) {
        console.log("eror getin spend", err)
        res.status(500).send("big eror")
    }
}

export default {
    postBudget,
    getBudget,
    postTransaction,
    getTransactions,
    getSpend
}
