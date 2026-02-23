export type Employee = {
  id: string;
  name: string;
  email: string;
  department: string;
  enrolledPlans: string[];
};

export const employees: Employee[] = [
  {
    id: "emp-001",
    name: "Sarah Johnson",
    email: "sjohnson@company.com",
    department: "Engineering",
    enrolledPlans: ["Medical - PPO", "Dental", "Vision", "401k"],
  },
  {
    id: "emp-002",
    name: "Michael Chen",
    email: "mchen@company.com",
    department: "Marketing",
    enrolledPlans: ["Medical - HMO", "Dental"],
  },
  {
    id: "emp-003",
    name: "Emily Rodriguez",
    email: "erodriguez@company.com",
    department: "Engineering",
    enrolledPlans: ["Medical - PPO", "Vision", "Life Insurance"],
  },
  {
    id: "emp-004",
    name: "David Kim",
    email: "dkim@company.com",
    department: "Sales",
    enrolledPlans: ["Medical - HDHP", "Dental", "Vision", "HSA", "401k"],
  },
  {
    id: "emp-005",
    name: "Jessica Martinez",
    email: "jmartinez@company.com",
    department: "Human Resources",
    enrolledPlans: ["Medical - PPO", "Dental", "Vision"],
  },
  {
    id: "emp-006",
    name: "James Wilson",
    email: "jwilson@company.com",
    department: "Sales",
    enrolledPlans: ["Medical - HMO"],
  },
  {
    id: "emp-007",
    name: "Amanda Thompson",
    email: "athompson@company.com",
    department: "Engineering",
    enrolledPlans: ["Medical - HDHP", "HSA", "401k", "Life Insurance"],
  },
  {
    id: "emp-008",
    name: "Robert Garcia",
    email: "rgarcia@company.com",
    department: "Marketing",
    enrolledPlans: ["Medical - PPO", "Dental", "Vision", "401k"],
  },
];
