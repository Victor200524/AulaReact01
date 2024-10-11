import Data from "./meusComponentes/data";
import DataV2 from "./meusComponentes/DataVS";

function App() {
  return ( //Todo componente deve iniciar em letra maiscula -> <Data/>
    <div className="App">
      <Data texto="Data e Hora atuais: " timeZone = "-3"></Data>
      <Data texto="Data e Hora em Londres: " timeZone = "1"></Data>
      <Data texto="Data e Hora em Nova york: " timeZone = "-4"></Data>
      <DataV2 texto="Data JSX: " timeZone={-3.00}></DataV2>
    </div>
  );
}

export default App;
