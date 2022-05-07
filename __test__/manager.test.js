const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('getOffice', () => {
        it("should return manager's office #", () => {
            let manager = new Manager("", 1, "email@email.com", 1)
            expect(manager.office).toEqual(manager.getOffice())
        })
    })
})