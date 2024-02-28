import { Pokemon } from '../models/Pokemon';

interface PokemonProps{
    pokemon:Pokemon;
}



export default function PokemonComponent(props:PokemonProps){
    return(
        <>
            
            <img  className='pokesprite'  width={"150px"} src={props.pokemon?.sprites.other['official-artwork'].front_default} alt={props.pokemon?.name}></img> 
         
        </>
    )

}