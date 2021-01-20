// import logo from '../logo.svg';
import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_DETAILS } from '../graphql/get-pokemons';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import * as ReactBootstrap from 'react-bootstrap';


export function PokemonDetail() {
    const [show, setShow] = useState(false);
    const [input, setInput] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    let arr_pokemonlist = [];
    const Catch = styled.button`
        background-color: #71f18d;
        color: white;
        text-align: center;
        paddinx: 10px;
        margin-bottom: 10px;
        font-weight: bold;
        text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.4);
    `;
    const { id } = useParams();
    const { data: { pokemon = [] } = {} } = useQuery(GET_DETAILS, {
        variables: { name: id },
    });
    const handleChange = (event) =>{
        setInput(event.target.value);
    }
    const handleSubmit =(event) =>{
        event.preventDefault();
        console.log(input);
        if (localStorage.getItem('data')) {
            let getPokemenList = JSON.parse(localStorage.getItem('data'));
            console.log(getPokemenList);
            if (getPokemenList.length >= 1) {
                let pokemon_new = {
                    id: pokemon.id,
                    name: pokemon.name,
                    nickname: input,
                    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png",
                };
                getPokemenList.push(pokemon_new);
                localStorage.setItem('data', JSON.stringify(getPokemenList));
            }
        } else {
            let pokemon_new_b = {
                id: pokemon.id,
                name: pokemon.name,
                nickname: input,
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png",
            }
            arr_pokemonlist.push(pokemon_new_b);
            localStorage.setItem('data', JSON.stringify(arr_pokemonlist));
        }
    }
    function type(pokemon) {
        return (
            <span className="span_type">{pokemon} </span>
        )
    }
    function move(pokemon) {
        return (
            <span className="span_move">{pokemon} </span>
        )
    }
    function save() {
        // let RNG = Math.floor(Math.random() * 2);
        let RNG = 1;
        // console.log(RNG);
        if (RNG === 1) {
            handleShow();
            // console.log(setInput);
            // if (localStorage.getItem('data')) {
            //     let getPokemenList = JSON.parse(localStorage.getItem('data'));
            //     console.log(getPokemenList);
            //     if (getPokemenList.length >= 1) {
            //         let pokemon_new = {
            //             id: pokemon.id,
            //             name: pokemon.name,
            //             nickname: "",
            //             image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png",
            //         };
            //         getPokemenList.push(pokemon_new);
            //         localStorage.setItem('data', JSON.stringify(getPokemenList));
            //     }
            // } else {
            //     let pokemon_new_b = {
            //         id: pokemon.id,
            //         name: pokemon.name,
            //         nickname: "",
            //         image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png",
            //     }
            //     arr_pokemonlist.push(pokemon_new_b);
            //     localStorage.setItem('data', JSON.stringify(arr_pokemonlist));
            // }

            // arr_pokemonlist.push(pokemon_new);

            // console.log(getPokemenList)
            // var old_data = JSON.parse(localStorage.getItem('data')) || [];
            // var new_data = [{
            //     id: pokemon.id,
            //     name: pokemon.name,
            //     nickname: "",
            //     image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png",
            // }];
            // console.log(old_data);
            // old_data.push(new_data);
            // localStorage.setItem('data', JSON.stringify(old_data));
            // const editJSONFile2 = require("edit-json-file");
            // let file = editJSONFile2('./File/mypokemon.json');
            // file.set("id", pokemon.id);
            // file.set("name", pokemon.name);
            // file.set("nickname", "");
            // file.set("image", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png");
            // file.save();

            // console.log(file.get());
        } else {
            handleShow2();
        }
    }
    return (
        <div className="detail">
            <Catch onClick={save}>Catch Pokemon!</Catch>
            <div className="pokemon_name">
                <p>{pokemon.name}</p>
            </div>
            <div className="pokemon_type">
                {pokemon.types && pokemon.types.map(pokemon => type(pokemon.type.name))}
            </div>
            <div className="pokemon_image">
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png"} alt={pokemon.name} />
            </div>
            <div className="pokemon_move">
                {pokemon.moves && pokemon.moves.map(pokemon => move(pokemon.move.name))}
            </div>
            <ReactBootstrap.Modal show={show} onHide={handleClose}>
                <ReactBootstrap.Form onSubmit={handleSubmit}>
                    <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>Catch Status</ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>
                    <ReactBootstrap.Modal.Body>
                        <p>Succesfully catch the pokemon</p>
                        <p>Please give a nickname to your new pokemon</p>
                        <input type="text" value = {input} onChange={handleChange}></input>
                    </ReactBootstrap.Modal.Body>
                    <ReactBootstrap.Modal.Footer>
                        <ReactBootstrap.Button type="submit" variant="primary" onClick={handleClose}>
                            Ok
                    </ReactBootstrap.Button>
                    </ReactBootstrap.Modal.Footer>
                </ReactBootstrap.Form>
            </ReactBootstrap.Modal>

            <ReactBootstrap.Modal show={show2} onHide={handleClose2}>
                <ReactBootstrap.Modal.Header closeButton>
                    <ReactBootstrap.Modal.Title>Catch Status</ReactBootstrap.Modal.Title>
                </ReactBootstrap.Modal.Header>
                <ReactBootstrap.Modal.Body>Failed to catch the pokemon</ReactBootstrap.Modal.Body>
                <ReactBootstrap.Modal.Footer>
                    <ReactBootstrap.Button variant="primary" onClick={handleClose2}>
                        Ok
                    </ReactBootstrap.Button>
                </ReactBootstrap.Modal.Footer>
            </ReactBootstrap.Modal>
        </div>
    )
}