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

export default {
    addSol,
    getSol
}
