export const initialState = {
  menu: {
    data: [
      {
        name: "Float Menu 1",
        style: 'float',
        children: [
          { name: "Submenu 1" },
          { name: "Submenu 2" },
          { name: "Submenu 3" },
        ],
      },
      {
        name: "Collapse Menu 1",
        style: 'collapse',
        children: [
          { name: "Submenu 1" },
          { name: "Submenu 2" },
          { name: "Submenu 3" },
        ],
      },
      {
        name: "Float Menu 2",
        style: 'float',
        children: [
          { name: "Submenu 1" },
          { name: "Submenu 2" },
          { name: "Submenu 3" },
        ],
      },
      {
        name: "Collapse Menu 3",
        style: 'collapse',
        children: [
          { name: "Submenu 1" },
          { name: "Submenu 2" },
          { name: "Submenu 3" },
        ],
      },
    ],
    selected: "menu1submenu1",
  },
  content: {
    data: [
      {
        key: "menu1submenu1",
        data: {
          title: "Hello World!",
          description: "Welcome to my world.",
        },
      },
    ],
  },
};

export type State = typeof initialState;
