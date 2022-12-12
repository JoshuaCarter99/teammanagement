const Employee = require("../employeejs/employee");
const employee = new Employee('Abe', '1122', 'abe@gmail.com');

describe('employeeData', () => {
    it('Collects the employee data values', () => {
      expect(employee.name).toEqual('Abe');
      expect(employee.id).toEqual('1122');
      expect(employee.email).toBe('abe@gmail.com');
    });

    it('Testing the getName() method', () => {
        expect(employee.getName()).toBe('Abe');
    });

    it('Testing the getId() method', () => {
        expect(employee.getId()).toBe('1122');
    });

    it('Testing the getEmail() method', () => {
        expect(employee.getEmail()).toBe('abe@gmail.com');
    });

    it('Testing the getRole() method', () => {
        expect(employee.getRole()).toBe('Employee');
    });

});