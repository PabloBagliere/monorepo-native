import { fieldsParmas, paramsObtions } from '../Interfaces';

type fields = { [key: string]: fieldsParmas };

export const deleteHidden = (fields: fields): [string, fieldsParmas][] => {
  const hidden = {};
  for (const key in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, key)) {
      if (fields[key].hidden !== true) {
        hidden[key] = fields[key];
      }
    }
  }
  return Object.entries(hidden);
};

export const formatDataUse = (content: string): [string, fieldsParmas][] => {
  const fileJson: paramsObtions = JSON.parse(content);
  const fields = fileJson.schema.fields;
  return deleteHidden(fields);
};
