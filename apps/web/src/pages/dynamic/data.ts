import {
  dynamicForm,
  typeFormController,
  typeValidation,
} from 'components-app-histrix';
export const mock: Array<dynamicForm> = [
  {
    name: 'emailInput',
    type: typeFormController.INPUT,
    value: 'Hola',
    propsForms: {
      inputProps: { type: 'text' },
      labelProps: {
        _text: { color: 'coolGray.800', fontSize: 'xs', fontWeight: 500 },
      },
      labelString: 'Usuario',
      formProps: { isRequired: true },
      helperMessaje: {
        Messaje: 'El usuario puede ser tambien tu email',
        props: {},
      },
    },
    validations: [
      {
        type: typeValidation.REQUIRED,
        message: 'Es requerido este campo',
      },
      {
        type: typeValidation.EMAIL,
        message: 'El email es requerido',
      },
    ],
  },
  {
    name: 'passwordInput',
    type: typeFormController.INPUT,
    value: '',
    propsForms: {
      inputProps: { type: 'password' },
      labelProps: {
        _text: { color: 'coolGray.800', fontSize: 'xs', fontWeight: 500 },
      },
      labelString: 'Contraseña',
      formProps: { isRequired: true },
    },
    validations: [
      {
        type: typeValidation.REQUIRED,
        message: 'La contraseña es necesaria',
      },
      {
        type: typeValidation.MIN,
        message: 'La contraseña es necesario minimo 6 caracteres',
        value: 6,
      },
      {
        type: typeValidation.MAX,
        message: 'La contraseña como maximo 12 caracteres',
        value: 12,
      },
    ],
  },
  {
    name: 'SelectPrueba',
    type: typeFormController.SELECT,
    value: '',
    propsForms: {
      inputProps: {
        placeholder: 'Prueba',
        width: 150,
        _selectedItem: {
          bg: 'teal.400',
        },
      },
      labelProps: {
        _text: { color: 'coolGray.800', fontSize: 'xs', fontWeight: 500 },
      },
      labelString: 'Prueba de select',
      formProps: { isRequired: true },
    },
    options: [
      {
        id: 1,
        label: 'prueba 1',
        value: 'prueba',
      },
      {
        id: 2,
        label: 'prueba 2',
        value: 'prueba2',
      },
      {
        id: 3,
        label: 'prueba 3',
        value: 'prueba3',
      },
      {
        id: 4,
        label: 'prueba 4',
        value: 'prueba4',
      },
      {
        id: 5,
        label: 'prueba 5',
        value: 'prueba5',
      },
    ],
    validations: [
      {
        type: typeValidation.REQUIRED,
        message: 'La contraseña es necesaria',
      },
    ],
  },
];
