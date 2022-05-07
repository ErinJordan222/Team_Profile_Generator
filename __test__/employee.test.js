const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('getName', () => {
        it("should return employee's name value", () => {
            let employee = new Employee('', 1, 'email@email.com')
            expect(employee.name).toEqual(employee.getName())
        })
    })

describe('getId', () => {
    it('should return employee id #', () => {
        let employee = new Employee('', 1, 'email@email.com')
        expect(employee.id).toEqual(employee.getId())
    })
})

describe('getEmail', () => {
    it('should return employee email', () => {
        let employee = new Employee('', 1, 'email@email.com')
        expect(employee.email).toEqual(employee.getEmail())
    })
})

describe('getRole', () => {
    it('should return employee role', () => {
        let employee = new Employee('', 1, 'email@email.com')
        expect(employee.getRole()).toEqual('Employee')
    })
})

})