import express from 'express'
import soldierController from './controllers/soldierController.js'
import budgetController from './controllers/budgetController.js'

const app = express()

app.use(express.json())

app.post('/soldiers/:soldierId/benefits', soldierController.postSolder)
app.get('/soldiers/:soldierId/benefits', soldierController.getSolder)
app.patch('/soldiers/:soldierId/benefits', soldierController.patchSolder)

app.post('/budget', budgetController.postBudget)
app.get('/budget', budgetController.getBudget)
app.post('/budget/:id/transactions', budgetController.postTransaction)
app.get('/budget/:id/transactions', budgetController.getTransactions)
app.get('/budget/:id/spend', budgetController.getSpend)

app.listen(3000, () => {
    console.log("server runing on port 3000 yahh")
})