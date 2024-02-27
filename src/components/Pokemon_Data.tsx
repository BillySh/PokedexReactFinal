import { Pokemon } from '../models/Pokemon';
import './pokemon_data.css';

interface Pokemon_DataProps{
    pokemon:Pokemon;
}

export default function PokemonData(props:Pokemon_DataProps){
    return(
        <>
        <table className='tableData'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Abilities</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.pokemon.name}</td>
                </tr>
                <tr>
                    <td>{props.pokemon.id}</td>
                </tr>
                <tr>
                    {props.pokemon.abilities.map((ability)=>{
                        return(
                            <td key={ability.ability.name}>{ability.ability.name}</td>
                        )
                    })}
                </tr>
            </tbody>
        </table>
        </>
    )

}