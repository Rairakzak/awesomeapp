import PokemoneList from "./components/PokemoneList";
import Title from "./components/title";
import GlobalStyle from "./Style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Title content="This is Title" />
      <PokemoneList />
    </>
  );
}

export default App;
