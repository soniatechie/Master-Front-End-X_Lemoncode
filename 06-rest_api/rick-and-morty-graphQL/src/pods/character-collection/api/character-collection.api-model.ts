import { Lookup } from 'common/models';

export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: NameAndUrl;
  location: NameAndUrl;
  image: string;
  episode: string[];
  url: string;
  created: string;
  bestSentences?: Lookup[];
}

interface NameAndUrl {
  name: string;
  url: string;
}

export interface LocationEntityApi {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface EpisodeEntityApi {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
