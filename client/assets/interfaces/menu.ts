interface NavMenuItems {
  name: string;
  link: string;
  isBeta: boolean
}

export interface NavMenuItemsProps {
  navMenuItems: NavMenuItems[];
}