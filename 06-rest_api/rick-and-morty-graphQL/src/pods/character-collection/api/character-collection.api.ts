import { graphQLClient } from 'core/api';
import { gql } from 'graphql-request';
import { CharacterEntityApi } from './character-collection.api-model';

const url = '/api/characters';

interface GetCharacterColletionResponse {
  characters: CharacterEntityApi[];
}

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const query = gql`
    query {
      characters {
        id
        name
        image
        status
        episode
        bestSentences {
          id
          name
        }
      }
    }
  `;

  const { characters } =
    await graphQLClient.request<GetCharacterColletionResponse>(query);
  return characters;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
  });
  return response.ok;
};
