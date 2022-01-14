export const initialState = {
  menu: {
    data: [
      {
        name: "Menu 1",
        children: [
          { name: "Submenu 1" },
          { name: "Submenu 2" },
          { name: "Submenu 3" },
        ],
      },
      {
        name: "Menu 2",
        children: [
          { name: "Submenu 1" },
          { name: "Submenu 2" },
          { name: "Submenu 3" },
        ],
      },
      {
        name: "Menu 3",
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
