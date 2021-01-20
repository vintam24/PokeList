// import logo from './logo.svg';
import AppoloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import { PokemonsContainer } from './containers/PokemonsContainer';
import { MyPokemon } from './components/MyPokemon';
import { PokemonDetail } from './components/PokemonDetail';
import { BrowserRouter as Router ,Switch, Route, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import pokeball from './pkball-removebg-preview.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const client = new AppoloClient({
    // uri: 'https://graphql-pokemon2.vercel.app/'
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql'
  });

  const Detail = styled.button`
        background-color: #ecd018;
        color: white;
        margin-top: 10px;
        margin-left: 10px;
        margin-bottom: 10px;
        text-align: center;
        paddinx: 10px;
        font-weight: bold;
        text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.4);
    `;

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <ApolloProvider client={client}>
      <main>
        <Router>
          <div className="App">
            <header className="App-header">
              <p><span><img src={pokeball} width="100px" height="50px"/></span>Pokemon</p>
            </header>
            <Detail><Link to="/">Pokemon Lists</Link></Detail>
            <Detail><Link to="/mypokemon">MyPokemon</Link></Detail>
            <Switch>
              <Route path="/" exact component={PokemonsContainer}></Route>
              <Route path="/mypokemon" component={MyPokemon}></Route>
              <Route path="/pokemondetail/:id" component={PokemonDetail}></Route>
            </Switch>
            {/* <PokemonsContainer /> */}
          </div>
        </Router>
      </main>
    </ApolloProvider>
  );
}

export default App;
