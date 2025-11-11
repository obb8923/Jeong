export interface Product {
  id: number;
  name: string;
  icon_url: string;
  link: string;
}

export interface NavConfig {
  logo: string;
  menu?: MenuItem[];
}

export interface MenuItem {
  type: 'link' | 'external_link' | 'button';
  text: string;
  to?: string;
  href?: string;
}

export type NavKey = 
  | '/' 
  | '/ToyDo' 
  | '/readin' 
  | '/pio' 
  | '/layered' 
  | '/HanaDiary' 
  | '/daydot'
  | '/FocusOven';

export interface TermsAndPolicy {
  title: string[];
  content: string[];
}

