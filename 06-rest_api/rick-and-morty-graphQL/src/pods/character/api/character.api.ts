import { graphQLClient } from 'core/api';
import { gql } from 'graphql-request';
import { CharacterEntityApi } from './character.api-model';

// export const getCities = async (): Promise<Lookup[]> => {
//   return mockCities;
// };

const characterListUrl = '/api/characters';

interface GetCharacterResponse {
  character: CharacterEntityApi;
}

export const getCharacter = async (id: number): Promise<CharacterEntityApi> => {
  const query = gql`
    query {
      character(id: ${id}){
        id
        name
        status
        species
        type
        gender
        image
        episode
        bestSentences{
          id
          name
        }
      }
    }
  `;

  const { character } = await graphQLClient.request<GetCharacterResponse>(
    query
  );
  return character;
};

interface SaveCharacterResponse {
  saveCharacter: boolean;
}

export const saveCharacter = async (
  character: CharacterEntityApi
): Promise<boolean> => {
  const query = gql`
    mutation ($character: CharacterInput!) {
      saveCharacter(character: $character)
    }
  `;
  const { saveCharacter } = await graphQLClient.request<SaveCharacterResponse>(
    query,
    { character }
  );

  return saveCharacter;
};
