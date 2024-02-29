import { Pokemon } from "../models/Pokemon";
import "./pokemon_data.css";
import Button from './Button';

interface Pokemon_DataProps {
  pokemon: Pokemon;
}

export default function PokemonData(props: Pokemon_DataProps) {
  return (
    <>
      <table className="tableData">
        <thead>
          <tr>
            <th className="tableTitle">Name</th>
            <th className="tableTitle">Id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tableColumn">{props.pokemon.name}</td>
            <td className="tableColumn">{props.pokemon.id}</td>
          </tr>
        </tbody>
      </table>

      <table className="tableData">
        <thead>
          <tr>
            <th className="tableTitle">Abilities</th>
          </tr>
        </thead>
        <tbody>
          {props.pokemon.abilities.map((ability, index) => (
            <tr key={index}>
              <td className="tableColumn">{ability.ability.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br></br>
      <br></br>
      
    </>
  );
}
