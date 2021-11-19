# Documentacion

Documentacion del uso de la libreria histrix componet

## Componentes

Los componente de formularios y el tipo de valor que devuelven son los sigueintes

- Input - Devuelve un string
- Select - Devuelve un valor string
- Checkbox - Devuelve un array de string
- Datapicker - Devuelve un Date completo su hora es T00:00:00.000Z
- Timepicker - Devuelve un Date completo su fecha es 0000-01-01
- Radio - Devuelve un string
- Slider - Devuelve un number
- Switch - Devuelve un boolean
- Textarea - Devulve un string
- MultipleSelect - Devuelve un array de string

## Validacion

La validacion se hace con la libreria Yup y las opciones disponible de elementos son las sigueintes

string - number - boolean - date - Array

El formato del mismo se puede pasar un valor y un mensaje o solamente mensaje de error si no es necesario que tenga un valor

### validacion yup String

- required - Si es requerido (No requiere valor)
- length - El limite que quieres que tenga (Requiere valor)
- min - Limite minimo que tiene que tener (Requiere valor)
- max - Limite maximo que puede tener (Requiere valor)
- matches - Pasandole una regex compara si esta en el string (Requiere valor)
- email - Compara si cumple el formato de un email a traves de una regex interna (No requiere valor)
- url - Compara si cumplete el formato de una url a traves de una regex interna (No requiere valor)
- uuid - Compara si es una UUID valida a traves de una regex interna (No requiere valor)
- trim - Trasforma el valor sacandole los espacios del principio y final
- lowercase - Trasforma el valor a minusculas
- upprcase - Trasforma el valor en mayusculas

### Validacion yup number

- required - Si es requerido (No requiere valor)
- min - Limite el numero minimo que tiene que tener (Requiere valor)
- max - Limite el numero maximo que puede tener (Requiere valor)
- positive - El valor tiene que ser positivo (No requiere valor)
- negative - El valor tiene que ser negativo (No requiere valor)
- integer - Valida si el valor es un entero (No requiere valor)
- truncate - Trasforma sacando los decimales

### Validacion de boolean

- required - Si es requerido (No requiere valor)

### Validacion de date

Para la validacion de maximo o minimo no es necesario el formato completo si usas datapicker automaticamente se va a setear en hora T00:00:00.000Z
y si usas timepicker automaticamente se seteara la fecha en 0000-01-01. Para que no tengas que estar pensando en esto.

- required - Si es requerido (No requiere valor)
- min - define la fecha minima que puede tener (Requiere valor)
- max - define la fecha maxima que puede tener (Requiere valor)

### Validacion de array

- length - Valida el tamaño del array (Requiere valor)
- min - Limita el minimo del tamaño que puede tener un array (Requiere valor)
- max - Limita el maximo del tamaño que puede tener un array (Requiere valor)
