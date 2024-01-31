import toast from "react-hot-toast";

export const initialItems = [
  {
    id: 1,
    name: "socks",
    packed: true,
  },
  {
    id: 2,
    name: "passport",
    packed: true,
  },
  {
    id: 3,
    name: "computer",
    packed: false,
  },
  {
    id: 4,
    name: "cellphone",
    packed: true,
  },
];

export const secondaryButtons = [
  "Mark all as complete",
  "Mark all as incomplete",
  "Reset to initial",
  "Remove all items",
];

export const notify = (message, type) => toast[type](message);
