const Engineer = require("../employeejs/enginerr");
const engineer = new Engineer('Bart', 'Bart', 'bart@gmail.com', 'github');

describe('employeeData', () => {
    it('Collects the employee data values', () => {
      expect(engineer.name).toEqual('Bart');
      expect(engineer.id).toEqual('Bart');
      expect(engineer.email).toBe('bart@gmail.com');
      expect(engineer.github).toBe('github')
    });

    it('Testing the getName() method', () => {
        expect(engineer.getName()).toBe('Bart');
    });

    it('Testing the getId() method', () => {
        expect(engineer.getId()).toBe('Bart');
    });

    it('Testing the getEmail() method', () => {
        expect(engineer.getEmail()).toBe('bart@gmail.com');
    });

    it('Testing the getGitHub() method', () => {
        expect(engineer.getGitHub()).toBe('github');
    });

    it('Testing the getRole() method', () => {
        expect(engineer.getRole()).toBe('Engineer');
    });

});