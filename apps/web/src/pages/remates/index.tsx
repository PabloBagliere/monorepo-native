import { promises as fs } from 'fs';
import path from 'path';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import {
  FormHistrix,
  paramsObtions,
  fieldsParmas,
  AtomicSwitch,
  AtomicInput,
  AtomicTextarea,
  AtomicSelect,
  AtomicDatapicker,
} from 'components-app-histrix';

const render = (content: paramsObtions): Array<JSX.Element> => {
  const y = [];
  const fields = content.schema.fields;
  const hidden = {};
  for (const key in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, key)) {
      if (fields[key].hidden !== true) {
        hidden[key] = fields[key];
      }
    }
  }
  const test: [string, fieldsParmas][] = Object.entries(hidden);
  test.forEach((e) => {
    if (e[1].options) {
      y.push(
        <AtomicSelect
          options={e[1].options}
          placeholder={e[1].placeholder}
          label={e[1].title}
          name={e[1].name}
          rules={{ required: 'Este campo es requerido' }}
        />,
      );
      return;
    }
    switch (e[1].histrix_type) {
      case 'Integer':
        y.push(
          <AtomicInput
            type={e[1].type}
            placeholder={e[1].placeholder}
            label={e[1].title}
            name={e[1].name}
            rules={{
              required: 'Este campo es requerido',
              maxLength: {
                value: Number.isInteger(e[1].size)
                  ? (e[1].size as number)
                  : (parseInt(e[1].size as string) as number),
                message: `No puede ser mayor de ${e[1].size} caracteres`,
              },
            }}
          />,
        );
        break;
      case 'Field':
        y.push(
          <AtomicInput
            type={e[1].type}
            placeholder={e[1].placeholder}
            label={e[1].title}
            name={e[1].name}
            rules={{
              required: 'Este campo es requerido',
              maxLength: {
                value: Number.isInteger(e[1].size)
                  ? (e[1].size as number)
                  : (parseInt(e[1].size as string) as number),
                message: `No puede ser mayor de ${e[1].size} caracteres`,
              },
            }}
          />,
        );
        break;
      case 'Date':
        y.push({
          componet: 'DataPicker',
          placehelder: e[1].placeholder,
          label: e[1].title,
          name: e[1].name,
          rules: {
            required: 'Este campo es requerido',
          },
        });
        break;
      case 'Tinyint':
        y.push(
          <AtomicInput
            type={e[1].type}
            placeholder={e[1].placeholder}
            label={e[1].title}
            name={e[1].name}
            rules={{
              required: 'Este campo es requerido',
              maxLength: {
                value: Number.isInteger(e[1].size)
                  ? (e[1].size as number)
                  : (parseInt(e[1].size as string) as number),
                message: `No puede ser mayor de ${e[1].size} caracteres`,
              },
            }}
          />,
        );
        break;
      case 'Time':
        y.push({
          componet: 'TimePicker',
          placehelder: e[1].placeholder,
          label: e[1].title,
          name: e[1].name,
          rules: {
            required: 'Este campo es requerido',
          },
        });
        break;
      case 'Varchar':
        y.push(
          <AtomicInput
            type={e[1].type}
            placeholder={e[1].placeholder}
            label={e[1].title}
            name={e[1].name}
            rules={{
              required: 'Este campo es requerido',
              maxLength: {
                value: Number.isInteger(e[1].size)
                  ? (e[1].size as number)
                  : (parseInt(e[1].size as string) as number),
                message: `No puede ser mayor de ${e[1].size} caracteres`,
              },
            }}
          />,
        );
        break;
      case 'HtmlField':
        y.push(
          <AtomicTextarea
            name={e[1].name}
            label={e[1].title}
            placeholder={e[1].placeholder}
            rules={{
              required: 'Este campo es requerido',
              maxLength: {
                value: Number.isInteger(e[1].size)
                  ? (e[1].size as number)
                  : (parseInt(e[1].size as string) as number),
                message: `No puede ser mayor de ${e[1].size} caracteres`,
              },
            }}
          />,
        );
        break;
      case 'Check':
        y.push(
          <AtomicSwitch
            name={e[1].name}
            label={e[1].title}
            message={e[1].placeholder}
            rules={{ required: 'Este campo es requerido' }}
          />,
        );
        break;
      case 'Text':
        y.push(
          <AtomicInput
            type={e[1].type}
            placeholder={e[1].placeholder}
            label={e[1].title}
            name={e[1].name}
            rules={{
              required: 'Este campo es requerido',
              maxLength: {
                value: Number.isInteger(e[1].size)
                  ? (e[1].size as number)
                  : (parseInt(e[1].size as string) as number),
                message: `No puede ser mayor de ${e[1].size} caracteres`,
              },
            }}
          />,
        );
        break;
      default:
        break;
    }
  });
  return y;
};

function Remates({
  fileContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const fileJson: paramsObtions = JSON.parse(fileContent);
  const fields = fileJson.schema.fields;
  const hidden = {};
  for (const key in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, key)) {
      if (fields[key].hidden !== true) {
        hidden[key] = fields[key];
      }
    }
  }
  console.log(hidden);
  const test = Object.entries(hidden);
  // console.log(test);
  return (
    <AtomicDatapicker setNewDate={undefined} label={''} value={undefined} />
  );
}

// <FormHistrix defaultValues={{}}>
//               <AtomicInput
//                 name="username"
//                 label="Usuario"
//                 rules={{
//                   required: 'Este campo es requerido',
//                   minLength: {
//                     value: 2,
//                     message: 'No puede ser menos de 2 caracteres',
//                   },
//                 }}
//                 type="text"
//                 message="Este usuario tambien puede ser tu email."
//               />
//               <AtomicInput
//                 name="password"
//                 label="Contraseña"
//                 type="password"
//                 rules={{
//                   required: 'Este campo es requerido',
//                   minLength: {
//                     value: 2,
//                     message: 'No puede ser menos de 2 caracteres',
//                   },
//                 }}
//               />
//               <AtomicButton onPress={onSubmit}> Ingresar </AtomicButton>
//             </FormHistrix>

export const getStaticProps: GetStaticProps = async (context) => {
  const filePath = path.join(process.cwd(), 'estructura.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');

  return {
    props: {
      fileContent,
    },
  };
};

export default Remates;
