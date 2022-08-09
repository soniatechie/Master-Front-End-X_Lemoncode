import { CharacterEntityApi } from './character.api-model';

// export const getCities = async (): Promise<Lookup[]> => {
//   return mockCities;
// };

const characterListUrl = '/api/characters';

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  const response = await fetch(`${characterListUrl}/${id}`);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};

export const saveCharacter = async (
  character: CharacterEntityApi
): Promise<boolean> => {
  if (character.id) {
    await fetch(`${characterListUrl}/${character.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    });
  } else {
    await fetch(characterListUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    });
  }
  return true;
};
