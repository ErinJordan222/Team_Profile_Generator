const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('getSchool', () => {
        it("should return intern's school", () => {
            let intern = new Intern('', 1, 'email@email.com', 'School Name Here')
            expect(intern.school).toEqual(intern.getSchool())
        })
    })
})