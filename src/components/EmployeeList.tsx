import { useState } from "react";
import { Employee } from "../data";

type EmployeeListProps = {
  employees: Employee[];
};

export const EmployeeList = ({ employees }: EmployeeListProps) => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const uniqueDepartments = [...new Set(employees.map(employee => employee.department))];
  const filteredEmployees = employees.filter(employee => selectedDepartment === 'all' || employee.department === selectedDepartment);

  return (
    <div className="employee-list">
      <div className="filters">
        <label htmlFor="department-filter">Filter by Department:</label>
        <select id="department-filter" value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
          <option value="all">All Departments</option>
          {uniqueDepartments.map(department => (
            <option key={department} value={department}>{department}</option>
          ))}
        </select>
      </div>

      <div className="employees">
        {filteredEmployees.map(employee => (
          <div key={employee.id} className="employee-card">
            <h3 className="text-lg font-bold">{employee.name}</h3>
            <p className="text-gray-500">Department: {employee.department}</p>
            <p className="text-gray-500">Enrolled Plans: {employee.enrolledPlans.join(', ')}</p>
            <p className="text-gray-500">Enrollment Count: {employee.enrolledPlans.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
};