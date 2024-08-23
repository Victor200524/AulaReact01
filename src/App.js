import Data from "./meusComponentes/data";

function App() {
  return ( //Todo componente deve iniciar em letra maiscula -> <Data/>
    <div className="App">
      <Data texto="Data e Hora atuais: " timeZone = "-3"></Data>
      <Data texto="Data e Hora em Londres: " timeZone = "1"></Data>
      <Data texto="Data e Hora em Nova york: " timeZone = "-4"></Data>
    </div>
  );
}

export default App;
