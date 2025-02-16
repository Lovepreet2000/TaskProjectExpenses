export type Task = {
  title: string;
  description: string;
  deadline: Date;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "Completed";
};

export const tasksList: Task[] = [
  {
    title: "Design Home Page",
    description: "Create the UI for the home page of the application.",
    deadline: new Date("2025-01-15"),
    priority: "High",
    status: "Pending",
  },
  {
    title: "Write API Documentation",
    description: "Document all API endpoints with examples and usage.",
    deadline: new Date("2025-01-20"),
    priority: "Medium",
    status: "Pending",
  },
  {
    title: "Fix Login Bug",
    description: "Resolve the login issue where users can't reset passwords.",
    deadline: new Date("2025-01-12"),
    priority: "High",
    status: "Completed",
  },
  {
    title: "Update Dependencies",
    description: "Upgrade project dependencies to the latest versions.",
    deadline: new Date("2025-01-30"),
    priority: "Low",
    status: "Pending",
  },
  {
    title: "Test Payment Gateway",
    description: "Verify the payment gateway integration for different scenarios.",
    deadline: new Date("2025-01-18"),
    priority: "Medium",
    status: "Pending",
  },
];
