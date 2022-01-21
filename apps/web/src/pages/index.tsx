import { VStack } from 'native-base';
import { useMe } from 'components-app-histrix';

// Start editing here, save and see your changes.
export default function App() {
  const {Me, isError, isLoading} = useMe();
  if (isError) return <div>Error:</div>
  if (Me)  return <div>{Me}</div>
  return <div>hola</div>;
}
