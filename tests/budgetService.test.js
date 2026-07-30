import test from 'node:test'
import assert from 'node:assert'
import budgetService from '../src/services/budgetService.js'
import budgetRepo from '../src/repositories/budgetRepo.js'

test('check missing budget data', async (t) => {
    let result = await budgetService.createBudget({ unit: "Golani" }) 
    assert.strictEqual(result, 'misssing')
})

test('check if budget is created with mock', async (t) => {
    let origGetAll = budgetRepo.getAllBudgets
    let origCreate = budgetRepo.createBudget
    
    budgetRepo.getAllBudgets = async () => []
    budgetRepo.createBudget = async () => { return 5 }
    
    let result = await budgetService.createBudget({ unit: "Givati", month: "08", budgetType: "Food", totalAmount: 100 })
    
    // basic assert
    assert.ok(result)
    
    budgetRepo.getAllBudgets = origGetAll
    budgetRepo.createBudget = origCreate
})