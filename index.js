// Write your solution in this file!
let employee = {
    name: 'Sarah',
    post: 'Software Engineer',
    age: 18
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // update and return employee object
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    //clone of the employee object
    let clonedEmployee = { ...employee };
    // Delete the specified key and return
    delete clonedEmployee[key];
    return clonedEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key and return
    delete employee[key];
    return employee;
}
