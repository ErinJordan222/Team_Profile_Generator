const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getGithub', () => {
        it("should return engineer's github username", () => {
            let engineer = new Engineer('', 1, 'email@email.com', 'github username here')
            expect(engineer.github).toEqual(engineer.getGithub())
        })
    })
})
