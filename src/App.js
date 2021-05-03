import PokemoneList from "./components/PokemoneList";
import Title from "./components/title";
import GlobalStyle from "./Style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Title content="Pokemon's List " />
      <PokemoneList />
    </>
  );
}

export default App;
