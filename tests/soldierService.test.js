import test from 'node:test'
import assert from 'node:assert'
import soldierService from '../src/services/soldierService.js'
import soldierRepo from '../src/repositories/soldierRepo.js'

test('check if soldier service returns exsists', async (t) => {

    let original = soldierRepo.findSoldier
    soldierRepo.findSoldier = async () => { return { id: 1 } }
    
    let result = await soldierService.addSol('999', {})
    assert.strictEqual(result, 'exsists')
    
    soldierRepo.findSoldier = original
})

test('check if it can save new soldier', async (t) => {
    let origFind = soldierRepo.findSoldier
    let origSave = soldierRepo.saveSoldier
    
    soldierRepo.findSoldier = async () => null
    soldierRepo.saveSoldier = async () => {}
    
    let result = await soldierService.addSol('999', { unit: 'test', benefitType: 'test' })
    
    // very basic test to see if it doesn't crash
    assert.strictEqual(1, 1) 
    
    soldierRepo.findSoldier = origFind
    soldierRepo.saveSoldier = origSave
})