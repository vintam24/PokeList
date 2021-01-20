import gql from 'graphql-tag';

// export const GET_POKEMONS = gql`
//     query pokemons ($first: Int!){
//         pokemons(first: $first){
//             id
//             name
//             image
//             maxHP
//             maxCP
//             attacks {
//                 special {
//                     name
//                     damage
//                 }
//             }
//         }
//     }
// `
export const GET_POKEMONS = gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
        results {
            url
            name
            image
        }
    }
  }
`;

export const GET_DETAILS = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            sprites {
              front_default
            }
            moves {
              move {
                name
              }
            }
            types {
              type {
                name
              }
            }
        }
    }
`