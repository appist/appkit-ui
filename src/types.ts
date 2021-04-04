export type IntroImage = {
  alt: string;
  src: string;
};

export type IntroLink = {
  color: "danger" | "info" | "primary" | "secondary" | "success" | "warning" | "";
  href: string;
  name: string;
  outline: boolean;
};

export type NavbarBrand = {
  href: string;
  logo: string;
  name: string;
};

export type NavbarAuthLink = {
  color: "danger" | "info" | "primary" | "secondary" | "success" | "warning" | "";
  href: string;
  name: string;
};

export type NavbarNavLink = {
  href: string;
  name: string;
};
