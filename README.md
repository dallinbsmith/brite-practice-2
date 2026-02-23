# Practice 2: Employee Benefits List

## Scenario
You're building a component that displays a list of employees and their enrolled benefits. The data is already being fetched and passed to your component.

## Your Task
Complete the `EmployeeList` component to:

1. **Render the employee list** - Display each employee's name, department, and their enrolled plans
2. **Add department filtering** - Implement the filter dropdown to show only employees from a selected department
3. **Show enrollment count** - Display how many plans each employee is enrolled in

## Data Structure
```typescript
type Employee = {
  id: string;
  name: string;
  email: string;
  department: string;
  enrolledPlans: string[];
};
```

## Acceptance Criteria
- [ ] All employees render with their name, department, and plans
- [ ] Filter dropdown shows unique departments
- [ ] Selecting a department filters the list
- [ ] "All Departments" option shows everyone
- [ ] Each employee shows their enrollment count

## Time Estimate
~45 minutes
# brite-practice-2
