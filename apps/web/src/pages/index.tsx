import { useMe } from 'components-app-histrix';

// Start editing here, save and see your changes.
export default function App() {
  const { Me, isError, isLoading } = useMe();
  if (isLoading) {
    return <div>Cargando</div>;
  }
  if (isError) return <div>Error:</div>;
  return (
    <div>
      <p>Hola</p>
      {Me ? <button>Deslogar</button> : <button>Logear</button>}
    </div>
  );
}
