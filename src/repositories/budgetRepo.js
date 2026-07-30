import supabase from '../db/mysql.js'

async function createBudget(name, amount) {
    const { data, error } = await supabase
        .from('budgets')
        .insert([{ name: name, total_amount: amount }])
        .select()
        
    if (error) {
        console.log("eror in create budget supabase", error)
        return null
    }
    return data[0].id
}

async function getAllBudgets() {
    const { data, error } = await supabase.from('budgets').select('*')
    return data || []
}

async function addTransaction(budgetId, desc, amount) {
    const { data, error } = await supabase
        .from('transactions')
        .insert([{ budget_id: budgetId, description: desc, amount: amount }])
        .select()
        
    if (error) {
        console.log("eror in tx", error)
        return null
    }
    return data[0].id
}

async function getTransactions(budgetId) {
    const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .eq('budget_id', budgetId)
        
    return data || []
}

async function getBudgetInfo(budgetId) {
    const { data: budgets } = await supabase.from('budgets').select('*').eq('id', budgetId)
    if (!budgets || budgets.length == 0) return null
    

    const { data: txs } = await supabase.from('transactions').select('amount').eq('budget_id', budgetId)
    
    let spent = 0
    if (txs) {
        txs.forEach(t => spent += parseFloat(t.amount))
    }
    let total = parseFloat(budgets[0].total_amount)
    
    return {
        budgetId: budgetId,
        name: budgets[0].name,
        totalAmount: total,
        totalSpent: spent,
        remaining: total - spent
    }
}

export default {
    createBudget,
    getAllBudgets,
    addTransaction,
    getTransactions,
    getBudgetInfo
}
