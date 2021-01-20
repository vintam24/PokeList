import logo from '../logo.svg';
import * as ReactBootstrap from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled'
import file from '../File/mypokemon.json'

export function MyPokemon({ mypokemon }){
    // console.log(file);
    let data = localStorage.getItem('data');
    data = JSON.parse(data);
    const Name = styled.button`
        background-color: #caa0fa;
        color: white;
        text-align: center;
        text-transform: uppercase;
        paddinx: 10px;
        font-weight: bold;
        text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.4);
    `;

    const Detail = styled.button`
        background-color: #f35151;
        text-align: center;
        paddinx: 10px;
        font-weight: bold;
        text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.4);
    `;
    function remove(index){
        let data2 = JSON.parse(localStorage.getItem('data'));
        if(data2.length > 1){
            data.splice(index,1);
            let new_data = data;
            localStorage.removeItem('data');
            localStorage.setItem('data', JSON.stringify(new_data));
            window.location.reload();
        }else{
            localStorage.removeItem('data');
            window.location.reload();
        }
        console.log(data2);
    }
    return(
        <ReactBootstrap.Table bordered className="table_pokemon">
            <thead className="table_head">
                <tr>
                    <td className="header_name">Species</td>
                    <td className="header_name">Nickname</td>
                    <td className="header_image">Image</td>
                    <td className="header_action">Action</td>
                </tr>
          </thead>
          <tbody className="table_body">
            {data && data.map((pokemon, index) => {
                return(
                    <tr className="pokemon" key={index}>
                        <td className="pokemon_name"><Link to ={"/pokemondetail/"+pokemon.name} replace><Name>{pokemon.name}</Name></Link></td>
                        <td className="pokemon_name"><Name>{pokemon.nickname}</Name></td>
                        <td className="pokemon_image"><img src={pokemon.image} alt={pokemon.name} /></td>
                        <td className="pokemon_detail"><Detail onClick={()=>remove(index)}>Release</Detail></td>
                    </tr>
                )
            })}
          </tbody>
        </ReactBootstrap.Table>
    )
}