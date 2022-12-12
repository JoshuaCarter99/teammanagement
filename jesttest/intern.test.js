const Intern = require("../employeejs/intern");
const intern = new Intern('Clarence', '1234', 'clarence@gmail.com', 'Bootcamp');

describe('internData', () => {
    it('Collects the employee data values', () => {
      expect(intern.name).toEqual('Clarence');
      expect(intern.id).toEqual('1234');
      expect(intern.email).toBe('clarence@gmail.com');
      expect(intern.school).toBe('Bootcamp')
    });

    it('Testing the getName() method', () => {
        expect(intern.getName()).toBe('Clarence');
    });

    it('Testing the getId() method', () => {
        expect(intern.getId()).toBe('1234');
    });

    it('Testing the getEmail() method', () => {
        expect(intern.getEmail()).toBe('clarence@gmail.com');
    });

    it('Testing the getSchool() method', () => {
        expect(intern.getSchool()).toBe('Bootcamp');
    });

    it('Testing the getRole() method', () => {
        expect(intern.getRole()).toBe('Intern');
    });

});