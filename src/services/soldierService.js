import soldierRepo from '../repositories/soldierRepo.js'

async function addSol(id, body) {
    let check = await soldierRepo.findSoldier(id)
    if (check) {
        return "exsists"
    }
    let newb = {
        soldierId: id,
        unit: body.unit,
        currentBenefitType: body.benefitType,
        history: [{
            startDate: new Date().toISOString(),
            endDate: null,
            decisionReason: body.decisionReason,
            budgetApproved: body.budgetApproved,
            benefitType: body.benefitType,
            details: body.details
        }]
    }
    await soldierRepo.saveSoldier(newb)
    return newb
}

async function getSol(id) {
    return await soldierRepo.findSoldier(id)
}

async function editSol(id, updates) {
    let sol = await soldierRepo.findSoldier(id)
    if (!sol) return null
    
    let now = new Date()
    let isFirstOfMonth = now.getDate() === 1
    

    if (sol.history.length > 0) {
        if (isFirstOfMonth) {

            sol.history[sol.history.length - 1].endDate = sol.history[sol.history.length - 1].startDate
            sol.history[sol.history.length - 1].decisionReason = "Cancelled by 1st of month rule"
        } else {
            sol.history[sol.history.length - 1].endDate = now.toISOString()
        }
    }
    

    sol.currentBenefitType = updates.benefitType
    sol.history.push({
        startDate: now.toISOString(),
        endDate: null,
        benefitType: updates.benefitType,
        decisionReason: isFirstOfMonth ? "Replaced on 1st of month" : "Updated normally"
    })
    
    await soldierRepo.updateSoldier(id, sol)
    return sol
}

export default {
    addSol,
    getSol,
    editSol
}