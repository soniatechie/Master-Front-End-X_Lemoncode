import {
  Lookup,
  createEmptyLookup,
  NameAndUrl,
  createEmptyNameAndUrl,
} from 'common/models';

export interface Character {
  id: string;
  name: string;
  specie: string;
  origin: NameAndUrl;
  episode: string[];
  bestSentences?: Lookup[];
  bestSentenceInput?: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  specie: '',
  origin: createEmptyNameAndUrl(),
  episode: [''],
  bestSentences: [createEmptyLookup()],
});
