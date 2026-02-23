import { EmployeeList } from "./components/EmployeeList";
import { employees } from "./data";

export const App = () => {
  return (
    <div className="app">
      <h1>Employee Benefits Dashboard</h1>
      <EmployeeList employees={employees} />
    </div>
  );
};
