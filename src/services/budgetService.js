import budgetRepo from '../repositories/budgetRepo.js'

async function createBudget(body) {
    if (!body.unit || !body.month || !body.budgetType || !body.totalAmount) {
        return "misssing"
    }
    
    let all = await budgetRepo.getAllBudgets()
    let exists = all.find(b => b.name === `${body.unit}-${body.month}-${body.budgetType}`)
    
    if (exists) {
        return "allready exsist"
    }
    
    let name = `${body.unit}-${body.month}-${body.budgetType}`
    return await budgetRepo.createBudget(name, body.totalAmount)
}

async function getAllBudgets() {
    let budgets = await budgetRepo.getAllBudgets()
    let result = []
    for (let b of budgets) {
        let info = await budgetRepo.getBudgetInfo(b.id)
        if (info) result.push(info)
    }
    return result
}

async function addTransaction(budgetId, body) {
    if (!body.amount) {
        return "misssing"
    }
    
    let info = await budgetRepo.getBudgetInfo(budgetId)
    if (!info) return "not found"
    
    if (info.remaining < body.amount) {
        return "exceeds"
    }
    
    return await budgetRepo.addTransaction(budgetId, body.description || "no desc", body.amount)
}

async function getTransactions(budgetId) {
    return await budgetRepo.getTransactions(budgetId)
}

async function getSpend(budgetId) {
    return await budgetRepo.getBudgetInfo(budgetId)
}

export default {
    createBudget,
    getAllBudgets,
    addTransaction,
    getTransactions,
    getSpend
}