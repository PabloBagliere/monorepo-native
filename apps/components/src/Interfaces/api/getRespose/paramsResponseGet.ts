export interface paramsResponseGet {
  [key: string]: {
    _: string;
    style?: string | null;
    button_style?: string | null;
    text?: string | null;
    value?: string | null;
    link?: {
      file: string;
      dir: string;
    };
    link_icon?: null | string;
    link_text?: boolean | string;
    linkParameters?: string;
  };
}
