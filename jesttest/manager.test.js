const Manager = require("../employeejs/manager");
const manager = new Manager('Don', '1111', 'don@gmail.com', '1');

describe('employeeData', () => {
    it('Collects the employee data values', () => {
      expect(manager.name).toEqual('Don');
      expect(manager.id).toEqual('1111');
      expect(manager.email).toBe('don@gmail.com');
      expect(manager.officeNumber).toBe('1')
    });

    it('Testing the getName() method', () => {
        expect(manager.getName()).toBe('Don');
    });

    it('Testing the getId() method', () => {
        expect(manager.getId()).toBe('1111');
    });

    it('Testing the getEmail() method', () => {
        expect(manager.getEmail()).toBe('don@gmail.com');
    });

    it('Testing the getRole() method', () => {
        expect(manager.getRole()).toBe('Manager');
    });

});