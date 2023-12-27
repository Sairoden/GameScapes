// STYLES
import { Grid, GridItem, Show } from "@chakra-ui/react";

// UI COMPONENTS
import { Navbar, GameGrid } from "./components";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside">Aside</GridItem>
        </Show>

        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

// LESSON 85
