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
                    <th className='tableColumn'>Name</th>
                    <th className='tableColumn'>Id</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='tableColumn'>{props.pokemon.name}</td>
                    <td className='tableColumn'>{props.pokemon.id}</td>
                </tr>
            </tbody>
        </table>

        <table className='tableData'>
            <thead>
                <tr>
                    <th className='tableColumn'>Abilities</th>
                </tr>
            </thead>
            <tbody>
                {props.pokemon.abilities.map((ability)=>{
                            return(
                                <td className='tableColumn' key={ability.ability.name}>{ability.ability.name}</td>
                            )
                        })}
            </tbody>
        </table>
        </>
    )

}