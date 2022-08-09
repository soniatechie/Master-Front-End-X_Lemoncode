import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { Character, createEmptyCharacter } from './character.vm';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';
import { Lookup } from 'common/models';
import { CharacterComponent } from './character.component';
import { BestSentences } from './components/bestSentences.component';

const getMax = (arr: Lookup[]) => {
  let maxValue =
    arr?.length > 0
      ? arr.reduce((a, b) => Math.max(a, Number(b.id)), -Infinity)
      : 0;

  return maxValue + 1;
};
export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const [bestSentenceInput, setBestSentenceInput] = React.useState<string>('');

  // const [cities, setCities] = React.useState<Lookup[]>([]);
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  // const handleLoadCityCollection = async () => {
  //   const apiCities = await api.getCities();
  //   setCities(apiCities);
  // };

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
    console.log('bestSentences', character.bestSentences);
    // handleLoadCityCollection();
  }, []);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save character');
    }
  };

  const handleAdd = () => {
    const newSentence: Lookup = {
      id: String(getMax(character.bestSentences)).padStart(3, '0'),
      name: bestSentenceInput,
    };
    setCharacter({
      ...character,
      bestSentences: character.bestSentences
        ? [...character.bestSentences, newSentence]
        : [newSentence],
    });
    setBestSentenceInput('');
  };

  const handleDelete = (idToDelete: string) => {
    const newBestSentences = character.bestSentences.filter(
      (sentence) => sentence.id !== idToDelete
    );
    setCharacter({ ...character, bestSentences: newBestSentences });
  };

  return (
    <CharacterComponent
      character={character}
      onSave={handleSave}
      onAdd={handleAdd}
      onDelete={handleDelete}
      bestSentenceInput={bestSentenceInput}
      setBestSentenceInput={setBestSentenceInput}
    />
  );
};
