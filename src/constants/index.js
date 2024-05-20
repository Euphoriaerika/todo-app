import { list, clock } from "../assets/icons";

export const links = [
  { path: "/todos", label: "Todo list", icon: list },
  { path: "/timer", label: "Work timer", icon: clock },
];

// test data
export const todoTable = [
  {
    name: "Test table",
    id: 1,
    tasks: [
      { id: 1, task: "Task 1", completed: true },
      { id: 2, task: "Task 2", completed: false },
      { id: 3, task: "Task 3", completed: false },
      { id: 4, task: "Task 4", completed: false },
      { id: 5, task: "Task 5", completed: false },
    ],
  },
];
