
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Error: Página No Encontrada</h1>
        <p>Lo sentimos, la página que buscas no está aquí.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button>Volver</button>
    </div>
  );
}