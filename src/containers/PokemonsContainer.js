import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons';
import { Pokemon } from '../components/Pokemon'
import * as ReactBootstrap from 'react-bootstrap';

export function PokemonsContainer(){
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: {limit: 1108, offset: 0,},
    });

    const pkmns = pokemons.results;

    return(
        // <div>
        //     {pkmns && pkmns.map(pokemon => JSON.stringify(pokemon))}
        // </div>
        <ReactBootstrap.Table bordered className="table_pokemon">
            <thead className="table_head">
                <tr>
                    <td className="header_name">Name</td>
                    <td className="header_image">Image</td>
                </tr>
          </thead>
          <tbody className="table_body">
            {pkmns && pkmns.map(pokemon => <Pokemon key={pokemon.id} pokemon = {pokemon} />)}
          </tbody>
        </ReactBootstrap.Table>
        // <div className="pokemons">
        //     {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon = {pokemon} />)}
        // </div>
    )
}