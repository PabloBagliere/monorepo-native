import { nodosNavigation } from '../Interfaces/navigation/nodosNavigation';
import { responsePHPmen } from '../Interfaces/navigation/responsePHPmen';

interface responseArray {
  title: string;
  label: string;
  uri: string;
  options: string;
  rel?: string;
  chils?: responseArray[];
}

function recursibe(array: nodosNavigation[]): responseArray[] {
  const response = [];
  array.forEach((data) => {
    let chils: responseArray[];
    const { title, label, uri, options, childs, rel } = data;
    if (childs) {
      chils = recursibe(childs);
    }
    response.push({
      title,
      label,
      uri,
      options,
      rel,
      chils,
    });
  });
  return response;
}

export const extractorInformationNavegation = (info: responsePHPmen) => {
  const response = recursibe(info.tree);

  console.log(response);
};
