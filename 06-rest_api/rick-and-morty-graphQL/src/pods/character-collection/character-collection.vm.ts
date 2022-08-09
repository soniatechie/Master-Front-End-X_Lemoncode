import { Lookup } from 'common/models';

export interface CharacterEntityVm {
  id: string;
  picture: string;
  name: string;
  description: string;
  episode: string[];
  bestSentences?: Lookup[];
}
