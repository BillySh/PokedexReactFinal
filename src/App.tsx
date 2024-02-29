import React from "react";
import "./App.css";
import Button from "./components/Button";
import { Pokemon } from "./models/Pokemon";
import { PokeApi } from "./api/PokeApi";
import PokemonComponent from "./components/Pokemon";
import PokemonData from "./components/Pokemon_Data";
import Display from "./components/Display";
import "./components/display.css";
/// --------------------------------------------------------------------

function App() {
  const [pokemonNumber, setPokemonNumber] = React.useState<string | undefined>(
    undefined,
  );
  const [pokemon, setPokemon] = React.useState<Pokemon | undefined>(undefined);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | undefined>(undefined);
  function buscar() {
    setLoading(true);
    setError(undefined);
    PokeApi.getPokemonById(pokemonNumber)
      .then((response) => {
        setPokemon(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError("Pokemon no encontrado");
      });
  }

  function n(){

  }
  

  ///---------------Functions--------------------------------------------------------
  return (
    <div className="App">
      <div className="pok-W">
        <div className="disp">
          <p className="title">Pokedex</p>
          {loading && <p>Cargando...</p>}
          {!loading && pokemon && !error && (
            <>
              <div className="dispG">
                <PokemonComponent pokemon={pokemon}></PokemonComponent>
              </div>
            </>
          )}
          {error && <p>{error}</p>}
          <div className="search">
            <input
              onChange={(event) => {
                setPokemonNumber(event.target.value);
              }}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={pokemonNumber}
            ></input>
            <br></br>
            <Button
              label="Buscar"
              color="green"
              onClick={() => buscar()}
            ></Button>
          </div>
        </div>

        <div className="pok-WW">
          <div className="mini-disp">
            {loading && <p>Cargando...</p>}
            {!loading && pokemon && !error && (
              <>
                <div className="dispD">
                  <PokemonData pokemon={pokemon}></PokemonData>
                </div>
              </>
            )}
            {error && <p>{error}</p>}

            <br></br>
            <br></br>
            <div className="gridCss">
                <Button label="00" color='green' onClick={()=>n()}></Button>
                <Button label="01" color='green' onClick={()=>n()}></Button>
                <Button label="02" color='green' onClick={()=>n()}></Button>
                <Button label="03" color='green' onClick={()=>n()}></Button>
                <Button label="04" color='green' onClick={()=>n()}></Button>
                <Button label="05" color='green' onClick={()=>n()}></Button>

          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
