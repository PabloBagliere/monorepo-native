export interface nodosNavigation {
  'data-ajax': boolean | string;
  menuId: number | string;
  nodeKey: number;
  title: string;
  label: string;
  icon: string | null;
  uri: string | null;
  options: string | null;
  'data-role': string;
  'data-iconpos'?: string;
  'data-inset': boolean | string;
  class: string;
  childs?: Array<nodosNavigation>;
  children?: Array<nodosNavigation>;
  rel?: string;
}
