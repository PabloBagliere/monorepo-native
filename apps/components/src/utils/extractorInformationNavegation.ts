import { infoParse } from '../Interfaces/navigation/infoParse';
import { nodosNavigation } from '../Interfaces/navigation/nodosNavigation';
import { responsePHPmen } from '../Interfaces/navigation/responsePHPmen';

function recursibe(array: nodosNavigation[]): infoParse[] {
  const response = [];
  array.forEach((data) => {
    let chils: infoParse[];
    const { title, label, uri, options, childs, rel, icon, menuId } = data;
    const object: infoParse = {};
    if (childs) {
      chils = recursibe(childs);
    }
    if (chils && chils.length !== 0) object['chils'] = chils;
    if (options && options.length !== 0) object['options'] = options;
    if (uri && uri.length !== 0) object['uri'] = uri;
    if (rel && rel.length !== 0) object['rel'] = rel;
    if (icon && icon.length !== 0) object['icon'] = icon;
    if (menuId && menuId.length !== 0) object['menuId'] = menuId;
    object['title'] = title;
    object['lagel'] = label;
    response.push(object);
  });
  return response;
}

export const extractorInformationNavegation = (info: responsePHPmen | null) => {
  if (!info) return;
  const response = recursibe(info.tree);
  return response;
};
