# Requerimiento / TODO

Requerimientos para paquete de componente histrix

## Feature a agregar / Arrelgar

- Liberar metodo watch para ser usado ✅
- Liberar cambios en los botones ✅
- Mejorar validaciones para multiples ✅
- Importar archivo del datapicker dependinedo si es web o celular (Archivo .web.tsx)
- Timepicker resta horas y al seleccionar suma horas ✅
- Si se a dado fecha maxima y minimas pasarcelo al componente para que lo muestre visualmente
- Poder poner validacion manualmente sin necesidad de editar el json TODO: No recarga el hooks resolver (Usar el rule del controller reglas de html)
- Cambiar estilo y formato del multiple select si esta en web (Archivo .web.tsx)
- Generar dinamicamente los item de navegacion
- Generar lista de items
- Generar plantilla de perfil expandible y editable
- Componente de graficas react-chartjs-2
- Componente de dashboard expandible
- Hooks de notificaciones (Libreria react-native-toast-notifications)

## Fix medianos

- Se forma un ciclo entre DynamicForm.tsx -> fieldHistrix/index.ts -> fieldHistrix/FieldControlers.tsx -> DynamicForm.tsx ✅
- Chequear el formato de envio de informacion de json
- Actualizar version de react-native App/ ✅
- Input formato fecha TODO: formato web (Archivo .web.tsx)

## Fix menores

- Switch si no se pasa valor sea falso ✅
- Slider si no se pasa valor sea 0 ✅
- Sacar regla de linter para imporatacion de react ✅

### Testing

- Agregar test unitario - Jest - Testing library react
- Agregar stories - StoryBook
