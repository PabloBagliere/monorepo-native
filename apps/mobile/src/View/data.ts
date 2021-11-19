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
  {
    name: 'CheckboxPrueba',
    type: typeFormController.CHECKBOX,
    value: ['prueba'],
    propsForms: {
      inputProps: {
        colorScheme: 'green',
        mt: '2',
        alignItems: 'flex-start',
        accessibilityLabel: 'prueba de checkbox',
      },
      labelProps: {
        _text: { color: 'coolGray.800', fontSize: 'xs', fontWeight: 500 },
      },
      labelString: 'Prueba de checkbox',
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
        type: typeValidation.MIN,
        value: 2,
        message: 'El Minimo seleccionados 2 es necesaria',
      },
      {
        type: typeValidation.MAX,
        message: 'Maximo 4',
        value: 4,
      },
      {
        type: typeValidation.REQUIRED,
        message: 'Es requerido',
      },
    ],
  },
  {
    name: 'RadioPrueba',
    type: typeFormController.RADIO,
    value: 'prueba',
    propsForms: {
      inputProps: {
        colorScheme: 'green',
        name: 'RadioPrueba',
        alignItems: 'flex-start',
        accessibilityLabel: 'prueba de radio',
      },
      labelProps: {
        _text: { color: 'coolGray.800', fontSize: 'xs', fontWeight: 500 },
      },
      labelString: 'Prueba de Radio',
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
  {
    name: 'SliderPrueba',
    type: typeFormController.SLIDER,
    value: 70,
    propsForms: {
      inputProps: {
        colorScheme: 'green',
        maxValue: 100,
        minValue: 0,
        accessibilityLabel: 'prueba de slider',
      },
      labelProps: {
        _text: { color: 'coolGray.800', fontSize: 'xs', fontWeight: 500 },
      },
      labelString: 'Prueba de Slider',
      formProps: { isRequired: true },
    },
    validations: [
      {
        type: typeValidation.REQUIRED,
        message: 'El textArea es necesaria',
      },
      {
        type: typeValidation.MIN,
        message: 'No puede ser menor al 50',
        value: 50,
      },
    ],
  },
  {
    name: 'TextareaPrueba',
    type: typeFormController.TEXTAREA,
    value: '',
    propsForms: {
      inputProps: {
        placeholder: 'textarea prueba',
        accessibilityLabel: 'prueba de Textarea',
      },
      labelProps: {
        _text: { color: 'coolGray.800', fontSize: 'xs', fontWeight: 500 },
      },
      labelString: 'Prueba de textarea',
      formProps: { isRequired: true },
    },
    validations: [
      {
        type: typeValidation.REQUIRED,
        message: 'El textArea es necesaria',
      },
      {
        type: typeValidation.MIN,
        message: 'El textArea es necesario minimo 6 caracteres',
        value: 6,
      },
    ],
  },
  {
    name: 'SwitchPrueba',
    type: typeFormController.SWITCH,
    value: false,
    propsForms: {
      inputProps: {
        defaultIsChecked: true,
        onThumbColor: 'orange.500',
        offThumbColor: 'orange.50',
        onTrackColor: 'orange.200',
        offTrackColor: 'orange.100',
      },
      labelProps: {
        _text: { color: 'coolGray.800', fontSize: 'xs', fontWeight: 500 },
      },
      labelString: 'Prueba de Swirch',
      formProps: { isRequired: true },
    },
  },
  {
    name: 'MultiSelectPrueba',
    type: typeFormController.MULTISELECT,
    value: ['prueba'],
    propsForms: {
      inputProps: {
        colorScheme: 'green',
        mt: '2',
        alignItems: 'flex-start',
        accessibilityLabel: 'prueba de multiselect',
      },
      labelProps: {
        _text: { color: 'coolGray.800', fontSize: 'xs', fontWeight: 500 },
      },
      labelString: 'prueba multiselect',
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
        type: typeValidation.MIN,
        value: 2,
        message: 'El Minimo seleccionados 2 es necesaria',
      },
      {
        type: typeValidation.MAX,
        message: 'Maximo 4',
        value: 4,
      },
      {
        type: typeValidation.REQUIRED,
        message: 'Es requerido',
      },
    ],
  },
  {
    name: 'PruebaDataPicker',
    type: typeFormController.DATEPICKER,
    value: '2021-11-27',
    propsForms: {
      inputProps: {},
      labelProps: {
        _text: { color: 'coolGray.800', fontSize: 'xs', fontWeight: 500 },
      },
      labelString: 'Prueba de datapicker',
      formProps: { isRequired: true },
    },
    validations: [
      {
        type: typeValidation.MIN,
        value: '2021-11-20',
        message: 'Fecha minima',
      },
      {
        type: typeValidation.MAX,
        message: 'Fecha maxima',
        value: '2021-11-30',
      },
      {
        type: typeValidation.REQUIRED,
        message: 'Es requerido',
      },
    ],
  },
  {
    name: 'PruebaTimePicker',
    type: typeFormController.TIMEPICKER,
    value: '12:00:00',
    propsForms: {
      inputProps: {},
      labelProps: {
        _text: { color: 'coolGray.800', fontSize: 'xs', fontWeight: 500 },
      },
      labelString: 'Prueba de timepicker',
      formProps: { isRequired: true },
    },
    validations: [
      {
        type: typeValidation.MIN,
        value: '12:00:10',
        message: 'Hora minima',
      },
      {
        type: typeValidation.MAX,
        message: 'Hora maxima',
        value: '13:50:10',
      },
      {
        type: typeValidation.REQUIRED,
        message: 'Es requerido',
      },
    ],
  },
];
