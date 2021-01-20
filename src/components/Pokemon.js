import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled'

export function Pokemon({ pokemon }){
    const Name = styled.button`
        background-color: #caa0fa;
        color: white;
        text-transform: uppercase;
        text-align: center;
        paddinx: 10px;
        font-weight: bold;
        text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.4);
    `;

    return(
        <tr className="pokemon">
            {/* <Router> */}
                <td className="pokemon_name"><Link to ={"/pokemondetail/"+pokemon.name} replace><Name>{pokemon.name}</Name></Link></td>
                <td className="pokemon_image"><img src={pokemon.image} alt={pokemon.name} /></td>
                {/* <Switch>
                    <Route path="/pokemondetail/:id" component={PokemonDetail}></Route>
                </Switch> */}
            {/* </Router> */}
        </tr>
        // <div className="pokemon">
        //     <div className="pokemon__name">
        //         <p>{pokemon.name}</p>
        //     </div>
        //     <div className="pokemon__image">
        //         <img src={pokemon.image} alt={pokemon.name} />
        //     </div>
        //     <div className="pokemon__detail">Detail</div>
        // </div>
    )
}