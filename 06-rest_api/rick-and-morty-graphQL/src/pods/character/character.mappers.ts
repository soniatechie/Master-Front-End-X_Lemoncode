import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.Character => ({
  ...character,
  id: `${character.id}`,
  name: character.name,
  specie: character.species,
  origin: character.origin,
  episode: character.episode,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.CharacterEntityApi => {
  const { bestSentenceInput, specie, id, ...newCharacter } = character;
  return {
    ...newCharacter,
    id: Number(id),
    species: specie,
    bestSentences: newCharacter.bestSentences,
  } as unknown as apiModel.CharacterEntityApi;
};
