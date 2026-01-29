export interface NavItem {
  id: string;
  label: string;
}

export interface Review {
  id: number;
  name: string;
  location: string;
  initials: string;
  text: string;
  image: string;
  stars: number;
}

export interface Region {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  highlight: string[];
}