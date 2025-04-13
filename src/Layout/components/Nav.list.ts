interface INav {
  id: number,
  icon: string,
  title: string,
  nav: { id: number, external: boolean, link: string, description: string}[]
}

export const NavList: INav[] = [
  {
    id: 0,
    icon: "menu_book",
    title: "Getting started",
    nav: [
      { id: 0, external: false, description: "Introduction", link: "/" },
      { id: 1, external: true, description: "Breakpoints", link: "/layout/breakpoints/" },
      { id: 2, external: true, description: "Containers", link: "/layout/containers/" },
      { id: 3, external: true, description: "Grid", link: "/layout/grid/" },
      { id: 4, external: true, description: "Columns", link: "/layout/columns/" },
      { id: 6, external: false, description: "Typography", link: "/typography" },
    ]
  },
  {
    id: 1,
    icon: "rule",
    title: "Forms",
    nav: [
      { id: 0, external: false, description: "Form", link: "/form" },
    ]
  },
  {
    id: 2,
    icon: "smart_button",
    title: "Components",
    nav: [
      { id: 0, external: false, description: "Icons", link: "/icons" },
      { id: 1, external: false, description: "Dropdown", link: "/dropdown" },
      { id: 2, external: false, description: "Card", link: "/card" },
      { id: 3, external: false, description: "Header", link: "/header" },
      { id: 4, external: false, description: "Introduction", link: "/carousel" },
      { id: 5, external: false, description: "Footer", link: "/footer" },
    ]
  },
  {
    id: 3,
    icon: "data_object",
    title: "Utilities",
    nav: [
      { id: 0, external: false, description: "Colors", link: "/colors" },
      { id: 1, external: true, description: "Borders", link: "/utilities/borders" },
      { id: 2, external: true, description: "Display", link: "/utilities/display" },
      { id: 3, external: true, description: "Flex", link: "/utilities/flex" },
      { id: 4, external: true, description: "Opacity", link: "/utilities/opacity" },
      { id: 5, external: true, description: "Overflow", link: "/utilities/overflow" },
      { id: 6, external: true, description: "Position", link: "/utilities/position" },
      { id: 7, external: true, description: "Shadows", link: "/utilities/shadows" },
      { id: 8, external: true, description: "Sizing", link: "/utilities/sizing" },
      { id: 9, external: true, description: "Spacing", link: "/utilities/spacing" },
      { id: 10, external: true, description: "Text", link: "/utilities/text" },
      { id: 11, external: true, description: "Visibility", link: "/utilities/visibility" },
    ]
  },
]